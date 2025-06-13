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
      name: 'Find Talent',
      href: '/browse-talent',
      hasDropdown: true,
      dropdownItems: [
        { 
          name: 'Browse Professionals', 
          href: '/browse-talent', 
          icon: '👥',
          description: 'Explore our curated pool of verified African talent'
        },
        { 
          name: 'Top Rated Talent', 
          href: '/top-talent', 
          icon: '⭐',
          description: 'Discover the highest-rated professionals on our platform'
        },
        { 
          name: 'Skill Categories', 
          href: '/categories', 
          icon: '🎯',
          description: 'Find talent by specific skills and expertise areas'
        },
        { 
          name: 'Success Stories', 
          href: '/success-stories', 
          icon: '🏆',
          description: 'Read about successful projects and collaborations'
        }
      ]
    },
    {
      name: 'For Companies',
      href: '/companies',
      hasDropdown: true,
      dropdownItems: [
        { 
          name: 'Post a Job', 
          href: '/post-job', 
          icon: '📝',
          description: 'Create job postings and find the perfect candidates'
        },
        { 
          name: 'Enterprise Solutions', 
          href: '/enterprise', 
          icon: '🏢',
          description: 'Custom solutions for large organizations and teams'
        },
        { 
          name: 'Pricing Plans', 
          href: '/pricing', 
          icon: '💰',
          description: 'Transparent pricing for all your hiring needs'
        },
        { 
          name: 'Hiring Guide', 
          href: '/hiring-guide', 
          icon: '📚',
          description: 'Best practices for hiring remote African talent'
        }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { 
          name: 'Blog & Insights', 
          href: '/blog', 
          icon: '📖',
          description: 'Latest trends and insights in remote work and talent'
        },
        { 
          name: 'Help Center', 
          href: '/help', 
          icon: '❓',
          description: 'Get answers to frequently asked questions'
        },
        { 
          name: 'API Documentation', 
          href: '/api-docs', 
          icon: '⚡',
          description: 'Integrate Tumoro into your existing workflows'
        },
        { 
          name: 'Community', 
          href: '/community', 
          icon: '🌍',
          description: 'Connect with other professionals and companies'
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
        transition={{ duration: 0.3 }}
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
                      <span>{dropdownItem.icon}</span>
                      <span>{dropdownItem.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.mobileNavActions}>
          <Link 
            to="/login" 
            className={styles.loginBtn}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link 
            to="/signup" 
            className={styles.signupBtn}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started Free
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header; 