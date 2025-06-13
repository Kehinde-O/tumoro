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

  const features = [
    {
      icon: "🎯",
      title: "ELO Rating System",
      description: "Dynamic scoring that combines skill assessments, reviewer ratings, and Tree Score to showcase your true professional value in the global marketplace.",
      highlight: "96% accuracy rate",
      color: "#2568FB",
      bgColor: "#F0F4FF"
    },
    {
      icon: "✅",
      title: "Expert Vetting Process",
      description: "Every professional undergoes rigorous evaluation by industry experts. Comprehensive screening ensures quality and reliability for employers.",
      highlight: "Zero bad hires",
      color: "#10B981",
      bgColor: "#F0FDF4"
    },
    {
      icon: "🌳",
      title: "Tree Score Heritage",
      description: "Optional FamilySearch integration that adds community credibility to your profile, celebrating African heritage and family connections.",
      highlight: "Cultural authenticity",
      color: "#F59E0B",
      bgColor: "#FFFBEB"
    },
    {
      icon: "🎬",
      title: "Multimedia Showcasing",
      description: "Upload your '30-second intro' videos, portfolio pieces, and rich media content to stand out from traditional text-based profiles.",
      highlight: "3x more engagement",
      color: "#8B5CF6",
      bgColor: "#FAF5FF"
    },
    {
      icon: "🤖",
      title: "AI-Powered Growth",
      description: "Receive personalized recommendations for skills development, mentorship opportunities, and strategic career advancement paths.",
      highlight: "Smart matching",
      color: "#EF4444",
      bgColor: "#FEF2F2"
    },
    {
      icon: "🤝",
      title: "Community & Mentorship",
      description: "Connect with fellow African professionals, share your journey through posts, and access mentorship from industry leaders worldwide.",
      highlight: "Global network",
      color: "#06B6D4",
      bgColor: "#F0F9FF"
    }
  ];

  const stats = [
    { number: "12,000+", label: "Active Professionals", icon: "👥", color: "#2568FB" },
    { number: "500+", label: "Partner Companies", icon: "🏢", color: "#10B981" },
    { number: "2,800+", label: "Successful Placements", icon: "🎉", color: "#F59E0B" },
    { number: "96%", label: "Success Rate", icon: "📈", color: "#8B5CF6" }
  ];

  const companies = [
    { 
      name: "Microsoft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      employees: "15+ hires"
    },
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      employees: "22+ hires"
    },
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      employees: "18+ hires"
    },
    { 
      name: "Meta", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      employees: "12+ hires"
    },
    { 
      name: "Apple", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      employees: "8+ hires"
    },
    { 
      name: "Shopify", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      employees: "25+ hires"
    },
    { 
      name: "Stripe", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      employees: "14+ hires"
    },
    { 
      name: "Netflix", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      employees: "9+ hires"
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {/* Hero Stats Section */}
        <motion.div 
          className={styles.statsSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className={styles.statsHeader}>
            <span className={styles.statsBadge}>
              <span className={styles.badgeIcon}>⚡</span>
              Trusted Worldwide
            </span>
            <h2 className={styles.statsTitle}>
              Join <span className={styles.highlightNumber}>12,000+</span> African Professionals
            </h2>
            <p className={styles.statsSubtitle}>
              Who have transformed their careers through our platform
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
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statNumber} style={{ color: stat.color }}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statAccent} style={{ backgroundColor: stat.color }}></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Features Section */}
        <motion.div 
          className={styles.featuresHeader}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={itemVariants} className={styles.sectionBadge}>
            <span className={styles.badgeIcon}>🚀</span>
            Platform Features
          </motion.span>
          
          <motion.h2 variants={itemVariants} className={styles.featuresTitle}>
            Everything You Need to
            <span className={styles.highlightText}> Unlock Your Potential</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className={styles.featuresSubtitle}>
            From AI-powered matching to cultural heritage celebration, we provide comprehensive tools 
            for career advancement and professional growth.
          </motion.p>
        </motion.div>

        {/* Interactive Features Grid */}
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
                y: -12,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setActiveFeature(index)}
            >
              <div className={styles.featureHeader}>
                <div className={styles.featureIcon} style={{ backgroundColor: feature.bgColor, color: feature.color }}>
                  <span>{feature.icon}</span>
                </div>
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

        {/* Companies Section */}
        <motion.div 
          className={styles.companiesSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className={styles.companiesHeader}>
            <span className={styles.companiesBadge}>
              <span className={styles.badgeIcon}>🏆</span>
              Trusted Partners
            </span>
            <h3 className={styles.companiesTitle}>Trusted by Industry Leaders</h3>
            <p className={styles.companiesSubtitle}>
              Join professionals working at the world's most innovative companies
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
                <div className={styles.companyInfo}>
                  <div className={styles.companyName}>{company.name}</div>
                  <div className={styles.companyEmployees}>{company.employees}</div>
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
            <div className={styles.ctaIcon}>🎯</div>
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