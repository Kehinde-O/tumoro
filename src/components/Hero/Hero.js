import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const features = [
    {
      icon: "🎯",
      title: "Vetted Professionals",
      description: "Every talent is thoroughly screened and verified"
    },
    {
      icon: "⚡",
      title: "Fast Matching",
      description: "Find the right talent in under 24 hours"
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Access talent from across Africa and beyond"
    },
    {
      icon: "🛡️",
      title: "Secure Platform",
      description: "Protected payments and data security"
    }
  ];

  const companies = [
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Shopify", logo: "https://logo.clearbit.com/shopify.com" },
    { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com" },
    { name: "Airbnb", logo: "https://logo.clearbit.com/airbnb.com" }
  ];

  return (
    <section className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.heroBackground}>
        <motion.div 
          className={styles.gradientOrb1}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={styles.gradientOrb2}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -25, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={styles.gradientOrb3}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 20, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          {/* Main Content */}
          <motion.div 
            className={styles.heroMain}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className={styles.badgeContainer}>
              <span className={styles.badge}>
                <span className={styles.badgeIcon}>🌟</span>
                <span>Join 12,000+ African professionals worldwide</span>
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className={styles.heroTitle}>
              Unlock Your
              <span className={styles.highlightText}> African Excellence</span>
              <br />
              on the Global Stage
            </motion.h1>
            
            <motion.p variants={itemVariants} className={styles.heroSubtitle}>
              Every talent is vetted. Every hire is reliable. Join Africa's premier talent marketplace 
              where exceptional professionals connect with world-class opportunities and build careers that matter.
            </motion.p>

            <motion.div variants={itemVariants} className={styles.heroActions}>
              <Link to="/signup" className={styles.primaryBtn}>
                <span>Start Your Journey</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/browse-jobs" className={styles.secondaryBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Browse Opportunities</span>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.socialProof}>
              <div className={styles.avatarGroup}>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face&auto=format&q=80" alt="Professional" className={styles.avatar} />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format&q=80" alt="Professional" className={styles.avatar} />
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face&auto=format&q=80" alt="Professional" className={styles.avatar} />
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face&auto=format&q=80" alt="Professional" className={styles.avatar} />
                <div className={styles.avatarMore}>+12K</div>
              </div>
              <div className={styles.socialProofText}>
                <span className={styles.proofHighlight}>Join thousands</span> of professionals who've found their dream careers
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            className={styles.heroVisual}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className={styles.visualContainer}>
              <div className={styles.mainImageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1642929456654-f4540e3e2a85?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&dl=francis-odeyemi--LK4GItKS7M-unsplash.jpg&w=1920" 
                  alt="African professional working confidently"
                  className={styles.mainImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              
              
              {/* Floating Cards */}
              <motion.div 
                className={styles.floatingCard1}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className={styles.cardIcon}>💼</div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitle}>Remote Opportunities</div>
                  <div className={styles.cardSubtitle}>Work from anywhere</div>
                </div>
              </motion.div>

              <motion.div 
                className={styles.floatingCard2}
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className={styles.cardIcon}>🚀</div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitle}>Career Growth</div>
                  <div className={styles.cardSubtitle}>Level up your skills</div>
                </div>
              </motion.div>

              <motion.div 
                className={styles.floatingCard3}
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className={styles.cardIcon}>💰</div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitle}>Competitive Pay</div>
                  <div className={styles.cardSubtitle}>Global market rates</div>
                </div>
              </motion.div>

              {/* Success Indicator */}
              <motion.div 
                className={styles.successIndicator}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <div className={styles.successIcon}>✨</div>
                <div className={styles.successText}>
                  <div className={styles.successTitle}>96% Success Rate</div>
                  <div className={styles.successSubtitle}>Professionals hired</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 