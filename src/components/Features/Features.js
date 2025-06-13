import React from 'react';
import { motion } from 'framer-motion';
import styles from './Features.module.css';

const Features = () => {
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

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
          <path d="M19 15L19.74 17.74L22.5 18.5L19.74 19.26L19 22L18.26 19.26L15.5 18.5L18.26 17.74L19 15Z" fill="currentColor"/>
          <path d="M5 15L5.74 17.74L8.5 18.5L5.74 19.26L5 22L4.26 19.26L1.5 18.5L4.26 17.74L5 15Z" fill="currentColor"/>
        </svg>
      ),
      title: "AI-Powered Matching",
      description: "Our intelligent algorithm connects you with the perfect opportunities based on your skills, experience, and career goals."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
        </svg>
      ),
      title: "Lightning Fast Applications",
      description: "Apply to multiple positions with one click. Our streamlined process gets you noticed by employers in 24-48 hours."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Verified Opportunities",
      description: "Every job posting is verified and vetted. Work with legitimate companies offering real career advancement opportunities."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" fill="currentColor"/>
          <path d="M21 9H3L5 7H19L21 9Z" fill="currentColor"/>
          <path d="M19.5 10.5L18.5 21.5H5.5L4.5 10.5H19.5Z" fill="currentColor"/>
          <circle cx="9" cy="9" r="1" fill="#FAF7F2"/>
          <circle cx="15" cy="9" r="1" fill="#FAF7F2"/>
          <circle cx="12" cy="12" r="1" fill="#FAF7F2"/>
        </svg>
      ),
      title: "Global Network",
      description: "Connect with companies worldwide seeking African talent. Access opportunities from startups to Fortune 500 companies."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21V3H3ZM19 19H5V5H19V19Z" fill="currentColor"/>
          <path d="M7 7H17V9H7V7Z" fill="currentColor"/>
          <path d="M7 11H17V13H7V11Z" fill="currentColor"/>
          <path d="M7 15H13V17H7V15Z" fill="currentColor"/>
          <circle cx="16" cy="16" r="1" fill="currentColor"/>
        </svg>
      ),
      title: "Career Analytics",
      description: "Track your application progress, get insights on market trends, and receive personalized career advancement recommendations."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C13.1046 2 14 2.89543 14 4V6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 4V6C10 7.10457 10.8954 8 12 8Z" fill="currentColor"/>
          <path d="M12 8C8.68629 8 6 10.6863 6 14V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V14C18 10.6863 15.3137 8 12 8Z" fill="currentColor"/>
          <circle cx="10" cy="14" r="1" fill="#FAF7F2"/>
          <circle cx="14" cy="14" r="1" fill="#FAF7F2"/>
          <path d="M10 16H14V17H10V16Z" fill="#FAF7F2"/>
        </svg>
      ),
      title: "Dedicated Support",
      description: "Get personalized career coaching, interview preparation, and ongoing support to help you land your dream job."
    }
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        {/* Stats Section - Moved from Hero */}
        <motion.div 
          className={styles.statsSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className={styles.statsContent}>
            <h3 className={styles.statsTitle}>Trusted by Professionals Worldwide</h3>
            <p className={styles.statsSubtitle}>
              Join thousands of African professionals who have found their dream careers through Tumoro
            </p>
            
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>12,000+</div>
                <div className={styles.statLabel}>Active Professionals</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Partner Companies</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>2,800+</div>
                <div className={styles.statLabel}>Successful Placements</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>96%</div>
                <div className={styles.statLabel}>Success Rate</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className={styles.featuresHeader}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className={styles.sectionBadge}>
            <span className={styles.badgeIcon}>⚡</span>
            Why Choose Tumoro
          </motion.div>
          
          <motion.h2 variants={itemVariants} className={styles.featuresTitle}>
            Everything You Need to
            <span className={styles.highlightText}> Advance Your Career</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className={styles.featuresSubtitle}>
            From AI-powered job matching to dedicated career support, we provide all the tools 
            and services you need to find your next opportunity and grow professionally.
          </motion.p>
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
              className={styles.featureCard}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos Section */}
        <motion.div 
          className={styles.companiesSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className={styles.companiesContent}>
            <h3 className={styles.companiesTitle}>Trusted by Leading Companies</h3>
            <p className={styles.companiesSubtitle}>
              Our professionals work with industry leaders across the globe
            </p>
            
            <div className={styles.companiesGrid}>
              <div className={styles.companyLogo}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
              </div>
              <div className={styles.companyLogo}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" alt="Microsoft" />
              </div>
              <div className={styles.companyLogo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
              </div>
              <div className={styles.companyLogo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Shopify_logo.svg" alt="Shopify" />
              </div>
              <div className={styles.companyLogo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" />
              </div>
              <div className={styles.companyLogo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" />
              </div>
            </div>
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
          <div className={styles.ctaBackground}>
            <motion.div 
              className={styles.ctaOrb1}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className={styles.ctaOrb2}
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <motion.div variants={itemVariants} className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Take Your Career to the Next Level?</h3>
            <p className={styles.ctaSubtitle}>
              Join thousands of African professionals who have found their dream careers through Tumoro
            </p>
            <div className={styles.ctaActions}>
              <a href="/signup" className={styles.primaryBtn}>
                <span>Create Your Profile</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/browse-jobs" className={styles.secondaryBtn}>
                <span>Browse Opportunities</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 