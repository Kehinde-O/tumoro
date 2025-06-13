import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb}></div>
      </div>
      
      <div className="container">
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <Logo />
            <p className={styles.brandDescription}>
              Africa's premier talent marketplace connecting verified professionals 
              with global opportunities. Every talent is vetted. Every hire is reliable.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com/company/tumoro" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/tumoro_org" className={styles.socialLink} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://facebook.com/tumoro.org" className={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>For Talent</h4>
            <ul className={styles.linkList}>
              <li><Link to="/signup" className={styles.footerLink}>Join as Professional</Link></li>
              <li><Link to="/browse-jobs" className={styles.footerLink}>Browse Jobs</Link></li>
              <li><Link to="/talent-resources" className={styles.footerLink}>Career Resources</Link></li>
              <li><Link to="/success-stories" className={styles.footerLink}>Success Stories</Link></li>
              <li><Link to="/skills-assessment" className={styles.footerLink}>Skills Assessment</Link></li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>For Employers</h4>
            <ul className={styles.linkList}>
              <li><Link to="/hire-talent" className={styles.footerLink}>Hire Talent</Link></li>
              <li><Link to="/post-job" className={styles.footerLink}>Post a Job</Link></li>
              <li><Link to="/enterprise" className={styles.footerLink}>Enterprise Solutions</Link></li>
              <li><Link to="/pricing" className={styles.footerLink}>Pricing</Link></li>
              <li><Link to="/hiring-guide" className={styles.footerLink}>Hiring Guide</Link></li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Resources</h4>
            <ul className={styles.linkList}>
              <li><Link to="/blog" className={styles.footerLink}>Blog</Link></li>
              <li><Link to="/help-center" className={styles.footerLink}>Help Center</Link></li>
              <li><Link to="/api-docs" className={styles.footerLink}>API Documentation</Link></li>
              <li><Link to="/community" className={styles.footerLink}>Community</Link></li>
              <li><Link to="/events" className={styles.footerLink}>Events</Link></li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link to="/about" className={styles.footerLink}>About Us</Link></li>
              <li><Link to="/careers" className={styles.footerLink}>Careers</Link></li>
              <li><Link to="/press" className={styles.footerLink}>Press</Link></li>
              <li><Link to="/contact" className={styles.footerLink}>Contact</Link></li>
              <li><Link to="/investors" className={styles.footerLink}>Investors</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © 2024 Tumoro. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <Link to="/privacy" className={styles.legalLink}>Privacy Policy</Link>
              <Link to="/terms" className={styles.legalLink}>Terms of Service</Link>
              <Link to="/cookies" className={styles.legalLink}>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 