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
          icon: '👤',
          description: 'Build your professional profile and showcase your skills'
        },
        { 
          name: 'Browse Opportunities', 
          href: '/jobs', 
          icon: '💼',
          description: 'Discover vetted job opportunities from global companies'
        },
        { 
          name: 'Skill Assessment', 
          href: '/assessment', 
          icon: '🎯',
          description: 'Get rated by industry experts and boost your ELO score'
        },
        { 
          name: 'Success Stories', 
          href: '/success-stories', 
          icon: '🏆',
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
          icon: '🔍',
          description: 'Search vetted African professionals by skills and ratings'
        },
        { 
          name: 'Post Opportunities', 
          href: '/post-job', 
          icon: '📝',
          description: 'Create job postings and connect with top talent'
        },
        { 
          name: 'Enterprise Solutions', 
          href: '/enterprise', 
          icon: '🏢',
          description: 'Custom hiring solutions for large organizations'
        },
        { 
          name: 'Hiring Analytics', 
          href: '/analytics', 
          icon: '📊',
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
          icon: '⚡',
          description: 'Learn about our vetting process and ELO rating system'
        },
        { 
          name: 'Reviewer Network', 
          href: '/reviewers', 
          icon: '🎓',
          description: 'Meet our expert reviewers and become one yourself'
        },
        { 
          name: 'Community Feed', 
          href: '/feed', 
          icon: '🌍',
          description: 'Connect with professionals and share your journey'
        },
        { 
          name: 'API & Integrations', 
          href: '/api', 
          icon: '🔗',
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