import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Features.module.css';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Streamlined stats - no repetition
  const stats = [
    { number: "12K+", label: "Professionals", color: "#6366f1" },
    { number: "500+", label: "Companies", color: "#8b5cf6" },
    { number: "96%", label: "Success Rate", color: "#a855f7" }
  ];

  // Core features - focused and unique
  const features = [
    {
      title: "ELO Rating System",
      description: "Dynamic scoring that showcases your true professional value through skill assessments and performance metrics.",
      highlight: "96% accuracy",
      color: "#6366f1",
      bgColor: "#f0f4ff"
    },
    {
      title: "Expert Vetting",
      description: "Rigorous evaluation by industry experts ensures quality matches and reliable hiring outcomes.",
      highlight: "Zero bad hires",
      color: "#10b981",
      bgColor: "#f0fdf4"
    },
    {
      title: "Cultural Heritage",
      description: "Optional Tree Score integration celebrates African heritage while building professional credibility.",
      highlight: "Authentic identity",
      color: "#f59e0b",
      bgColor: "#fffbeb"
    },
    {
      title: "AI-Powered Matching",
      description: "Smart algorithms connect the right talent with the right opportunities for optimal career growth.",
      highlight: "Perfect matches",
      color: "#8b5cf6",
      bgColor: "#faf5ff"
    }
  ];

  // Top companies - streamlined selection
  const companies = [
    { 
      name: "Microsoft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    },
    { 
      name: "Meta", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
    },
    { 
      name: "Apple", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },
    { 
      name: "Shopify", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg"
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {/* Trusted Worldwide Section */}
        <motion.div 
          className={styles.trustedSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className={styles.trustedHeader}>
            <span className={styles.badge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Trusted Worldwide
            </span>
            <h2 className={styles.trustedTitle}>
              Join <span className={styles.highlightText}>12,000+</span> African Professionals
            </h2>
            <p className={styles.trustedSubtitle}>
              Building careers and connecting with global opportunities through our verified platform
            </p>
          </motion.div>
          
          <motion.div className={styles.statsGrid} variants={containerVariants}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={styles.statCard}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={styles.statNumber} style={{ color: stat.color }}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statAccent} style={{ backgroundColor: stat.color }}></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Platform Features Section */}
        <motion.div 
          className={styles.platformSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className={styles.platformHeader}>
            <span className={styles.badge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Platform Features
            </span>
            <h2 className={styles.platformTitle}>
              Everything You Need to
              <span className={styles.highlightText}> Unlock Your Potential</span>
            </h2>
            <p className={styles.platformSubtitle}>
              From AI-powered matching to cultural heritage celebration, we provide comprehensive tools for career advancement.
            </p>
          </motion.div>

          <motion.div 
            className={styles.featuresGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`${styles.featureCard} ${activeFeature === index ? styles.active : ''}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setActiveFeature(index)}
              >
                <div className={styles.featureHeader}>
                  <div className={styles.featureHighlight} style={{ backgroundColor: feature.color }}>
                    {feature.highlight}
                  </div>
                </div>
                
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>

                <div className={styles.featureFooter}>
                  <motion.button 
                    className={styles.learnMore}
                    style={{ color: feature.color }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </div>

                <div className={styles.cardAccent} style={{ backgroundColor: feature.color }}></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Companies Section */}
        <motion.div 
          className={styles.companiesSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className={styles.companiesHeader}>
            <span className={styles.badge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 21h18M5 21V7l8-4v18M19 21V10l-6-3M9 9v.01M9 12v.01M9 15v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Trusted Partners
            </span>
            <h3 className={styles.companiesTitle}>Where Our Professionals Work</h3>
            <p className={styles.companiesSubtitle}>
              Join talent working at the world's most innovative companies
            </p>
          </motion.div>
          
          <motion.div className={styles.companiesGrid} variants={containerVariants}>
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className={styles.companyCard}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={styles.companyLogo}>
                  <img src={company.logo} alt={company.name} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className={styles.ctaSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Elevate Your Career?</h3>
            <p className={styles.ctaDescription}>
              Join thousands of African professionals who have unlocked global opportunities
            </p>
            <div className={styles.ctaButtons}>
              <motion.a 
                href="/signup" 
                className={`${styles.ctaButton} ${styles.primary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              <motion.a 
                href="/demo" 
                className={`${styles.ctaButton} ${styles.secondary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 