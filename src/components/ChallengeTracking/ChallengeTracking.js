import React from 'react';
import { motion } from 'framer-motion';
import styles from './ChallengeTracking.module.css';

const ChallengeTracking = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Engineering Manager",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      testimonial: "Tumoro connected us with exceptional African talent. The developers we hired exceeded all expectations and delivered world-class results.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Founder & CEO",
      company: "StartupLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      testimonial: "The quality of professionals on Tumoro is outstanding. We've built our entire design team through their platform.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Head of Product",
      company: "InnovateCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      testimonial: "Amazing experience! The vetting process ensures we only work with top-tier talent. Highly recommend Tumoro.",
      rating: 5
    }
  ];

  return (
    <section className={styles.challengeTracking}>
      <div className={styles.backgroundElements}>
        <motion.div 
          className={styles.gradientOrb1}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={styles.gradientOrb2}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container">
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className={styles.header}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>⭐</span>
              <span>Trusted by Leading Companies</span>
            </div>
            <h2 className={styles.title}>
              What Our Clients Say About
              <span className={styles.highlightText}> African Talent</span>
            </h2>
            <p className={styles.subtitle}>
              Discover why companies worldwide choose Tumoro to find exceptional 
              African professionals who drive innovation and deliver results.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={styles.testimonialCard}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.cardContent}>
                  <div className={styles.stars}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className={styles.star}>⭐</span>
                    ))}
                  </div>
                  <p className={styles.testimonialText}>
                    "{testimonial.testimonial}"
                  </p>
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.userInfo}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className={styles.userAvatar}
                    />
                    <div className={styles.userDetails}>
                      <h4 className={styles.userName}>{testimonial.name}</h4>
                      <p className={styles.userRole}>{testimonial.role}</p>
                      <p className={styles.userCompany}>{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Ready to Find Your Next Star Hire?</h3>
              <p className={styles.ctaSubtitle}>
                Join thousands of companies discovering exceptional African talent
              </p>
              <div className={styles.ctaActions}>
                <a href="/browse-talent" className={styles.primaryBtn}>
                  <span>Browse Talent</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="/contact" className={styles.secondaryBtn}>
                  <span>Get Started Today</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengeTracking; 