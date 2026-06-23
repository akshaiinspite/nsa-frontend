import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../../config';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [adminEmail, setAdminEmail] = useState('');
  const [verifying, setVerifying] = useState(true);
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' or 'announcement'
  const navigate = useNavigate();

  // Gallery Management States
  const [galleryItems, setGalleryItems] = useState([]);
  const [galTitle, setGalTitle] = useState('');
  const [galOrder, setGalOrder] = useState('');
  const [galImageInput, setGalImageInput] = useState(''); // Text URL
  const [galImageFile, setGalImageFile] = useState(null); // Local File
  const [editingItem, setEditingItem] = useState(null); // Item currently being edited
  const [galLoading, setGalLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Announcement Management States
  const [annText, setAnnText] = useState('');
  const [annPdfUrl, setAnnPdfUrl] = useState('');
  const [newAnnText, setNewAnnText] = useState('');
  const [annPdfFile, setAnnPdfFile] = useState(null);
  const [annPdfName, setAnnPdfName] = useState('');
  const [annLoading, setAnnLoading] = useState(false);

  // Token & Authentication Check
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const email = localStorage.getItem('adminEmail');

    if (!token) {
      toast.error('Session expired. Please log in first.', { position: 'top-right' });
      navigate('/admin');
      return;
    }

    setAdminEmail(email || 'Admin');
    setVerifying(false);

    // Verify token with backend
    fetch(`${API_BASE_URL}/api/admin/verify`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Invalid token session.');
        return res.json();
      })
      .then(() => {
        fetchGalleryData();
        fetchAnnouncementData();
      })
      .catch(() => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminEmail');
        toast.error('Session invalid. Please log in again.', { position: 'top-right' });
        navigate('/admin');
      });
  }, [navigate]);

  // Fetch Gallery Data
  const fetchGalleryData = () => {
    fetch(`${API_BASE_URL}/api/gallery`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          setGalleryItems(resData.data);
        }
      })
      .catch((err) => console.error('Error fetching gallery:', err));
  };

  // Fetch Announcement Data
  const fetchAnnouncementData = () => {
    fetch(`${API_BASE_URL}/api/announcement`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setAnnText(resData.data.text);
          setNewAnnText(resData.data.text);
          setAnnPdfUrl(resData.data.pdfUrl);
        }
      })
      .catch((err) => console.error('Error fetching announcement:', err));
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    toast.success('Logged out successfully!', { position: 'top-right', autoClose: 1500 });
    setTimeout(() => {
      navigate('/admin');
    }, 1000);
  };

  // Convert File to Base64 Helper
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // ==========================================
  // GALLERY LOGIC
  // ==========================================
  const handleGallerySubmit = async (e) => {
    e.preventDefault();
    if (!galTitle) {
      toast.warn('Please provide a title/caption.', { position: 'top-right' });
      return;
    }

    setGalLoading(true);
    const token = localStorage.getItem('adminToken');

    try {
      let imageSrc = galImageInput;

      // If a file is uploaded, convert it to Base64
      if (galImageFile) {
        imageSrc = await fileToBase64(galImageFile);
      }

      if (!imageSrc) {
        toast.warn('Please upload an image file or provide an image URL.', { position: 'top-right' });
        setGalLoading(false);
        return;
      }

      const bodyData = {
        title: galTitle,
        src: imageSrc,
        order: galOrder ? Number(galOrder) : 0
      };

      let url = `${API_BASE_URL}/api/gallery`;
      let method = 'POST';

      if (editingItem) {
        url = `${API_BASE_URL}/api/gallery/${editingItem._id || editingItem.id}`;
        method = 'PUT';
      }

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bodyData)
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Failed to save gallery item.');
      }

      toast.success(editingItem ? 'Gallery item updated successfully!' : 'Gallery item added successfully!', {
        position: 'top-right',
        autoClose: 2000
      });

      // Clear Form
      setGalTitle('');
      setGalOrder('');
      setGalImageInput('');
      setGalImageFile(null);
      setEditingItem(null);
      
      // Clear HTML file input element manually
      const fileInput = document.getElementById('gallery-file-input');
      if (fileInput) fileInput.value = '';

      fetchGalleryData();
    } catch (err) {
      toast.error(err.message, { position: 'top-right' });
    } finally {
      setGalLoading(false);
    }
  };

  const handleEditGalleryClick = (item) => {
    setEditingItem(item);
    setGalTitle(item.title);
    setGalOrder(item.order || 0);
    // If it is a url (and not base64 string), load in URL box
    if (item.src && !item.src.startsWith('data:')) {
      setGalImageInput(item.src);
    } else {
      setGalImageInput('');
    }
    setGalImageFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteGalleryClick = async (itemId) => {
    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch(`${API_BASE_URL}/api/gallery/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const resData = await response.json();
      if (!response.ok) throw new Error(resData.message || 'Failed to delete.');

      toast.success('Gallery item deleted successfully!', { position: 'top-right', autoClose: 2000 });
      fetchGalleryData();
    } catch (err) {
      toast.error(err.message, { position: 'top-right' });
    }
  };

  // Adjust order index and update instantly
  const handleOrderChange = async (item, increment) => {
    const token = localStorage.getItem('adminToken');
    const newOrder = (item.order || 0) + increment;

    try {
      const response = await fetch(`${API_BASE_URL}/api/gallery/${item._id || item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ order: newOrder })
      });

      if (response.ok) {
        fetchGalleryData();
      }
    } catch (err) {
      console.error('Failed to change order', err);
    }
  };

  // Cancel edit mode
  const handleCancelEdit = () => {
    setEditingItem(null);
    setGalTitle('');
    setGalOrder('');
    setGalImageInput('');
    setGalImageFile(null);
    const fileInput = document.getElementById('gallery-file-input');
    if (fileInput) fileInput.value = '';
  };

  // ==========================================
  // ANNOUNCEMENT LOGIC
  // ==========================================
  const handleAnnouncementSubmit = async (e) => {
    e.preventDefault();
    if (!newAnnText) {
      toast.warn('Announcement text cannot be empty.', { position: 'top-right' });
      return;
    }

    setAnnLoading(true);
    const token = localStorage.getItem('adminToken');

    try {
      let pdfData = null;

      if (annPdfFile) {
        pdfData = await fileToBase64(annPdfFile);
      }

      const bodyData = {
        text: newAnnText,
        pdfName: annPdfName || (annPdfFile ? annPdfFile.name : ''),
        pdfData
      };

      const response = await fetch(`${API_BASE_URL}/api/announcement`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bodyData)
      });

      const resData = await response.json();
      if (!response.ok) throw new Error(resData.message || 'Failed to update announcement.');

      toast.success('Announcement marquee updated successfully!', { position: 'top-right', autoClose: 2000 });
      setAnnPdfFile(null);
      setAnnPdfName('');
      
      const pdfInput = document.getElementById('ann-pdf-input');
      if (pdfInput) pdfInput.value = '';

      fetchAnnouncementData();
    } catch (err) {
      toast.error(err.message, { position: 'top-right' });
    } finally {
      setAnnLoading(false);
    }
  };

  // Pagination config
  const itemsPerPage = 8;
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGalleryItems = galleryItems.slice(indexOfFirstItem, indexOfLastItem);

  // Auto-clamp page if items are deleted and reduce total pages
  useEffect(() => {
    if (currentPage > 1 && currentGalleryItems.length === 0) {
      setCurrentPage((prev) => Math.max(1, prev - 1));
    }
  }, [galleryItems, currentPage, currentGalleryItems.length]);

  if (verifying) {
    return (
      <div className="admin-loading-container">
        <div className="admin-loading-spinner"></div>
        <p>Verifying admin credentials...</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-wrapper">
      {/* Sidebar with only 2 menus */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-logo-wrapper">
            <img src="/logos/nsa-logo.png" alt="NSA Logo" className="sidebar-logo" />
          </div>
          <span className="brand-badge">Admin Portal</span>
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={`nav-item-btn ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            Gallery Manager
          </button>
          
          <button 
            className={`nav-item-btn ${activeTab === 'announcement' ? 'active' : ''}`}
            onClick={() => setActiveTab('announcement')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            Announcement Manager
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        {/* Top Header */}
        <header className="admin-main-header">
          <div className="header-title">
            <h1>{activeTab === 'gallery' ? 'Gallery Manager' : 'Announcement Manager'}</h1>
            <p>Admin Control Dashboard • logged in as <span className="admin-name">{adminEmail}</span></p>
          </div>
          <div className="header-actions">
            <div className="profile-indicator">
              <span className="profile-dot"></span>
              <span>Online</span>
            </div>
          </div>
        </header>

        {/* Dynamic Content Panel */}
        <div className="dashboard-content">
          
          {/* TAB 1: GALLERY MANAGER */}
          {activeTab === 'gallery' && (
            <div className="tab-pane animate-fadeIn">
              
              {/* Add / Edit Form */}
              <div className="admin-form-card">
                <h2>{editingItem ? 'Edit Gallery Item' : 'Add New Gallery Item'}</h2>
                <form onSubmit={handleGallerySubmit} className="admin-dashboard-form">
                  <div className="form-row">
                    <div className="form-group-dash flex-3">
                      <label>Title / Caption</label>
                      <input 
                        type="text" 
                        value={galTitle} 
                        onChange={(e) => setGalTitle(e.target.value)} 
                        placeholder="Enter description for the image" 
                        required 
                      />
                    </div>
                    <div className="form-group-dash flex-1">
                      <label>Display Order</label>
                      <input 
                        type="number" 
                        value={galOrder} 
                        onChange={(e) => setGalOrder(e.target.value)} 
                        placeholder="e.g. 1" 
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group-dash flex-2">
                      <label>Image Upload</label>
                      <input 
                        type="file" 
                        id="gallery-file-input"
                        accept="image/*" 
                        onChange={(e) => setGalImageFile(e.target.files[0])} 
                      />
                      <small className="help-text">Directly upload from your device</small>
                    </div>

                    <div className="form-or-divider">OR</div>

                    <div className="form-group-dash flex-2">
                      <label>Remote Image URL</label>
                      <input 
                        type="text" 
                        value={galImageInput} 
                        onChange={(e) => setGalImageInput(e.target.value)} 
                        placeholder="https://example.com/image.jpg" 
                        disabled={galImageFile !== null}
                      />
                      <small className="help-text">Input link directly if hosting elsewhere</small>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className="btn-dash btn-dash-primary"
                      disabled={galLoading}
                    >
                      {galLoading ? <span className="btn-spinner"></span> : (editingItem ? 'Update Item' : 'Add Item')}
                    </button>
                    {editingItem && (
                      <button 
                        type="button" 
                        className="btn-dash btn-dash-outline"
                        onClick={handleCancelEdit}
                      >
                        Cancel Edit
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Gallery List */}
              <div className="admin-list-card">
                <h2>Catalog Images ({galleryItems.length})</h2>
                <p className="list-subtitle">Manage, reorder, or delete pictures in the main website gallery grid</p>
                
                <div className="table-responsive">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th width="80">Preview</th>
                        <th width="100">Order</th>
                        <th>Title / Description</th>
                        <th width="180">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentGalleryItems.map((item) => (
                        <tr key={item._id || item.id}>
                          <td>
                            <div className="table-img-wrapper">
                              <img src={item.src} alt={item.title} className="table-preview-img" />
                            </div>
                          </td>
                          <td>
                            <div className="order-adjuster">
                              <button 
                                className="order-arrow" 
                                onClick={() => handleOrderChange(item, -1)}
                                title="Move Up"
                              >
                                ▲
                              </button>
                              <span className="order-num">{item.order || 0}</span>
                              <button 
                                className="order-arrow" 
                                onClick={() => handleOrderChange(item, 1)}
                                title="Move Down"
                              >
                                ▼
                              </button>
                            </div>
                          </td>
                          <td>
                            <p className="table-text-title">{item.title}</p>
                          </td>
                          <td>
                            <div className="table-actions">
                              <button 
                                className="action-btn edit-btn"
                                onClick={() => handleEditGalleryClick(item)}
                              >
                                Edit
                              </button>
                              <button 
                                className="action-btn delete-btn"
                                onClick={() => handleDeleteGalleryClick(item._id || item.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {galleryItems.length === 0 && (
                        <tr>
                          <td colSpan="4" className="table-empty">
                            No gallery items found. Use the form above to add some!
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="dashboard-pagination">
                    <div className="pagination-info">
                      Showing <span>{indexOfFirstItem + 1}</span> to <span>{Math.min(indexOfLastItem, galleryItems.length)}</span> of <span>{galleryItems.length}</span> images
                    </div>
                    <div className="pagination-buttons">
                      <button 
                        type="button"
                        className="pagination-btn arrow-btn" 
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                      >
                        &laquo; Prev
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                        <button
                          type="button"
                          key={pageNum}
                          className={`pagination-btn num-btn ${currentPage === pageNum ? 'active' : ''}`}
                          onClick={() => setCurrentPage(pageNum)}
                        >
                          {pageNum}
                        </button>
                      ))}

                      <button 
                        type="button"
                        className="pagination-btn arrow-btn" 
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                      >
                        Next &raquo;
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: ANNOUNCEMENT MANAGER */}
          {activeTab === 'announcement' && (
            <div className="tab-pane animate-fadeIn">
              
              {/* Current Active Announcement Display */}
              <div className="admin-info-card ann-view-card">
                <h2>Active Website Announcement</h2>
                <div className="marquee-preview-box">
                  <div className="marquee-label-tag">📢 Live Marquee</div>
                  <p className="marquee-text-preview">{annText || 'No active announcement text set.'}</p>
                </div>
                <div className="pdf-preview-link">
                  <strong>PDF Attachment Link:</strong>{' '}
                  <a href={annPdfUrl} target="_blank" rel="noopener noreferrer" className="live-pdf-link">
                    {annPdfUrl || 'None'}
                  </a>
                </div>
              </div>

              {/* Form to Update */}
              <div className="admin-form-card">
                <h2>Update Announcement Details</h2>
                <form onSubmit={handleAnnouncementSubmit} className="admin-dashboard-form">
                  
                  <div className="form-group-dash">
                    <label>Announcement Text</label>
                    <textarea 
                      rows="4"
                      value={newAnnText}
                      onChange={(e) => setNewAnnText(e.target.value)}
                      placeholder="Write your marquee scroll text here..."
                      required
                    />
                    <small className="help-text">This text scrolls continuously on the homepage marquee.</small>
                  </div>

                  <div className="form-row">
                    <div className="form-group-dash flex-2">
                      <label>Upload New Announcement PDF</label>
                      <input 
                        type="file" 
                        id="ann-pdf-input"
                        accept="application/pdf"
                        onChange={(e) => {
                          setAnnPdfFile(e.target.files[0]);
                          if (e.target.files[0]) {
                            setAnnPdfName(e.target.files[0].name);
                          }
                        }}
                      />
                      <small className="help-text">Upload a new PDF to replace the Orientation details guide.</small>
                    </div>

                    <div className="form-group-dash flex-2">
                      <label>Saved PDF Filename (Optional)</label>
                      <input 
                        type="text" 
                        value={annPdfName} 
                        onChange={(e) => setAnnPdfName(e.target.value)}
                        placeholder="e.g. Orientation_Program_Details.pdf"
                      />
                      <small className="help-text">Leave blank to use original uploaded file name.</small>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className="btn-dash btn-dash-primary"
                      disabled={annLoading}
                    >
                      {annLoading ? <span className="btn-spinner"></span> : 'Update Announcement'}
                    </button>
                  </div>
                </form>
              </div>

            </div>
          )}

        </div>
      </main>
    </div>
  );
}
