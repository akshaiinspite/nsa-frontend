# Asset Mapping — National Skill Academy

This document outlines the media assets extracted and used in the National Skill Academy React application, listing their original URLs, local project file paths, usage locations, and styling requirements.

---

## 1. Page Banners & Backgrounds

### Hero Section & Contact Banner
*   **Original URL:** `https://demo.nationalskillacademy.net/wp-content/uploads/2025/02/solar-panel-electricians.jpg`
*   **Local Path:** `/banners/hero-bg.webp` (placed under `public/banners/hero-bg.webp`)
*   **Usage Location:** `src/components/Hero/` (as overlay base) and `src/components/ContactBanner/` (as background image).
*   **Styling Requirements:** 
    *   Object-fit: cover
    *   Dark overlay gradient: `linear-gradient(to bottom, rgba(0, 15, 20, 0.88), rgba(0, 80, 84, 0.92))`
    *   Parallax-like behavior or smooth transitions on hover.

---

## 2. Institutional Logos & Brand Marks

### Main Logo
*   **Original URL:** `https://demo.nationalskillacademy.net/wp-content/uploads/2025/02/nsa-logo.png`
*   **Local Path:** `/logos/nsa-logo.png`
*   **Usage Location:** `src/components/Navbar/` and `src/components/Footer/`.
*   **Styling Requirements:** 
    *   Max height: `55px`
    *   Filter: `brightness(0) invert(1)` for white version on transparent header, transitioning back to default full-color on scrolled white header.

### Partner & Initiative Logos
*   **National Skill Development Corporation (NSDC)**
    *   *Original URL:* `https://demo.nationalskillacademy.net/wp-content/uploads/2025/02/nsdc-logo.png`
    *   *Local Path:* `/logos/nsdc.png`
*   **Skill Council for Green Jobs (SCGJ)**
    *   *Original URL:* `https://demo.nationalskillacademy.net/wp-content/uploads/2025/02/scgj-logo.png`
    *   *Local Path:* `/logos/scgj.png`
*   **Government of India (GoI) Initiative**
    *   *Original URL:* `https://demo.nationalskillacademy.net/wp-content/uploads/2025/02/govt-india-logo.png`
    *   *Local Path:* `/logos/govt-india.png`
*   **Skill India Campaign**
    *   *Original URL:* `https://demo.nationalskillacademy.net/wp-content/uploads/2025/02/skill-india-logo.png`
    *   *Local Path:* `/logos/skill-india.png`
*   **Pandit Deendayal Energy University (PDEU)**
    *   *Original URL:* `https://demo.nationalskillacademy.net/wp-content/uploads/2025/02/pdeu-logo.png`
    *   *Local Path:* `/logos/pdeu.png`
*   **Usage Location:** `src/components/Partners/` (scrolling marquee logo track).
*   **Styling Requirements:**
    *   Grayscale effect when overlaying standard layouts, shifting to full-color with CSS transitions.
    *   Height matched at `40px` to `50px` for baseline alignment.

---

## 3. Social Media Brand Colors

*   **Facebook Icon (SVG)**
    *   *Hex Color:* `#1877F2`
    *   *Styling:* Scale overlay `scale(1.1)`, box shadow `var(--shadow-lg)` on hover.
*   **Instagram Icon (SVG)**
    *   *Hex Color:* `linear-gradient(45deg, #F09433 0%, #E6683C 25%, #DC2743 50%, #CC2366 75%, #BC1888 100%)`
    *   *Styling:* Circular gradient border, micro-animation scale up.
*   **LinkedIn Icon (SVG)**
    *   *Hex Color:* `#0A66C2`
    *   *Styling:* Standard corporate blue, hover transition to high-luminance active state.
*   **YouTube Icon (SVG)**
    *   *Hex Color:* `#FF0000`
    *   *Styling:* Icon fills pure white on red canvas backdrop.
*   **WhatsApp Icon (SVG)**
    *   *Hex Color:* `#25D366`
    *   *Styling:* Click-to-message URL forwarding to `https://wa.me/917034593132`.
*   **Usage Location:** `src/components/SocialLinks/` and `src/components/Footer/`.
