import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    {
      name: 'For Talent',
      href: '/talent',
      hasDropdown: true,
      dropdownItems: [
        { 
          name: 'Create Profile', 
          href: '/signup?role=talent', 
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
            </svg>
          ),
          description: 'Build your professional profile and showcase your skills'
        },
        { 
          name: 'Browse Opportunities', 
          href: '/jobs', 
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
              <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
              <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
            </svg>
          ),
          description: 'Discover vetted job opportunities from global companies'
        },
        { 
          name: 'Skill Assessment', 
          href: '/assessment', 
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          description: 'Get rated by industry experts and boost your ELO score'
        },
        { 
          name: 'Success Stories', 
          href: '/success-stories', 
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L10 13L18 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          ),
          description: 'Read inspiring stories from African professionals'
        }
      ]
    },
    {
      name: 'For Employers',
      href: '/employers',
      hasDropdown: true,
      dropdownItems: [
        { 
          name: 'Find Talent', 
          href: '/browse-talent', 
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          description: 'Search vetted African professionals by skills and ratings'
        },
        { 
          name: 'Post Opportunities', 
          href: '/post-job', 
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          description: 'Create job postings and connect with top talent'
        },
        { 
          name: 'Enterprise Solutions', 
          href: '/enterprise', 
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 21H21L18 8H6L3 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 8V6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6V8" stroke="currentColor" strokeWidth="2"/>
            </svg>
          ),
          description: 'Custom hiring solutions for large organizations'
        },
        { 
          name: 'Hiring Analytics', 
          href: '/analytics', 
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ),
          description: 'Track your hiring success and talent pipeline'
        }
      ]
    },
    {
      name: 'Platform',
      href: '/platform',
      hasDropdown: true,
      dropdownItems: [
        { 
          name: 'How It Works', 
          href: '/how-it-works', 
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          description: 'Learn about our vetting process and ELO rating system'
        },
        { 
          name: 'Reviewer Network', 
          href: '/reviewers', 
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22 10V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10C3.10457 10 4 10.8954 4 12C4 13.1046 3.10457 14 2 14V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V14C20.8954 14 20 13.1046 20 12C20 10.8954 20.8954 10 22 10Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          ),
          description: 'Meet our expert reviewers and become one yourself'
        },
        { 
          name: 'Community Feed', 
          href: '/feed', 
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          ),
          description: 'Connect with professionals and share your journey'
        },
        { 
          name: 'API & Integrations', 
          href: '/api', 
          icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.5521 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.47L11.75 5.18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 11C13.5705 10.4259 13.0226 9.95085 12.3934 9.60706C11.7643 9.26327 11.0685 9.05885 10.3533 9.00763C9.63819 8.95641 8.92037 9.05963 8.24864 9.31018C7.5769 9.56073 6.9669 9.95295 6.46 10.46L3.46 13.46C2.54918 14.403 2.04520 15.6661 2.05660 16.977C2.068 18.288 2.59384 19.5421 3.52088 20.4691C4.44792 21.3962 5.70199 21.922 7.01297 21.9334C8.32395 21.9448 9.58701 21.4408 10.53 20.53L12.24 18.82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ),
          description: 'Integrate Tumoro into your existing workflows'
        }
      ]
    },
    { name: 'About', href: '/about' }
  ];

  return (
    <motion.header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.headerContainer}>
        {/* Logo */}
        <Link to="/" className={styles.logoLink}>
          <Logo size="medium" />
          <span className={styles.logoText}>Tumoro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navItems.map((item, index) => (
            <div 
              key={item.name} 
              className={`${styles.navItem} ${item.hasDropdown ? styles.hasDropdown : ''}`}
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
            >
              <Link 
                to={item.href} 
                className={styles.navLink}
              >
                {item.name}
                {item.hasDropdown && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={styles.dropdownIcon}>
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>
              
              {item.hasDropdown && activeDropdown === item.name && (
                <motion.div 
                  className={styles.dropdownContent}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.dropdownItems.map((dropdownItem) => (
                    <Link 
                      key={dropdownItem.name}
                      to={dropdownItem.href} 
                      className={styles.dropdownItem}
                    >
                      <span className={styles.dropdownIcon}>{dropdownItem.icon}</span>
                      <div className={styles.dropdownText}>
                        <span className={styles.dropdownTitle}>{dropdownItem.name}</span>
                        <p className={styles.dropdownDescription}>{dropdownItem.description}</p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className={styles.headerActions}>
          <Link to="/login" className={styles.loginBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15M10 17L15 12L10 7M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Sign In</span>
          </Link>
          
          <Link to="/signup" className={styles.signupBtn}>
            <span>Get Started Free</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <motion.div
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={styles.hamburgerLine}
          />
          <motion.div
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className={styles.hamburgerLine}
          />
          <motion.div
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={styles.hamburgerLine}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className={styles.mobileNavList}>
          {navItems.map((item) => (
            <div key={item.name} className={styles.mobileNavGroup}>
              <Link 
                to={item.href} 
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.hasDropdown && (
                <div className={styles.mobileDropdownItems}>
                  {item.dropdownItems.map((dropdownItem) => (
                    <Link 
                      key={dropdownItem.name}
                      to={dropdownItem.href} 
                      className={styles.mobileDropdownItem}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className={styles.dropdownIcon}>{dropdownItem.icon}</span>
                      <span>{dropdownItem.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className={styles.mobileNavActions}>
            <Link 
              to="/login" 
              className={styles.loginBtn}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15M10 17L15 12L10 7M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Sign In</span>
            </Link>
            
            <Link 
              to="/signup" 
              className={styles.signupBtn}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Get Started Free</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header; 