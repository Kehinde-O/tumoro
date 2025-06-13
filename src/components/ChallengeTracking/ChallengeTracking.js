import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ChallengeTracking.module.css';

const ChallengeTracking = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Streamlined testimonials - focused on impact with reliable avatars
  const testimonials = [
    {
      id: 1,
      name: "Adaora Okafor",
      role: "Senior Software Engineer",
      company: "Microsoft",
      location: "Lagos → Seattle",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      testimonial: "Tumoro's ELO rating system helped me showcase my true potential. Within 3 months, I landed my dream role at Microsoft with a 40% salary increase.",
      rating: 5,
      type: "talent",
      highlight: "40% salary increase",
      color: "#6366f1"
    },
    {
      id: 2,
      name: "James Mitchell",
      role: "CTO & Co-Founder",
      company: "FinTech Innovations",
      location: "London, UK",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      testimonial: "The vetting process is incredible. We've scaled our engineering team from 5 to 50 professionals with zero bad hires. The quality is consistently exceptional.",
      rating: 5,
      type: "employer",
      highlight: "Zero bad hires",
      color: "#10b981"
    },
    {
      id: 3,
      name: "Kwame Asante",
      role: "Lead UX Designer",
      company: "Shopify",
      location: "Accra → Toronto",
      avatar: "https://randomuser.me/api/portraits/men/68.jpg",
      testimonial: "The Tree Score feature celebrating my heritage made me stand out authentically. It's not just a job platform, it's a cultural bridge.",
      rating: 5,
      type: "talent",
      highlight: "Cultural authenticity",
      color: "#f59e0b"
    },
    {
      id: 4,
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "Stripe",
      location: "San Francisco, USA",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      testimonial: "Tumoro has revolutionized our hiring process. We've hired 15 exceptional African professionals who've become our top performers.",
      rating: 5,
      type: "employer",
      highlight: "Top performers",
      color: "#8b5cf6"
    },
    {
      id: 5,
      name: "Amara Diallo",
      role: "Data Scientist",
      company: "Google",
      location: "Dakar → Mountain View",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      testimonial: "The AI-powered matching connected me with opportunities I never knew existed. My career trajectory changed completely.",
      rating: 5,
      type: "talent",
      highlight: "Career transformation",
      color: "#ec4899"
    },
    {
      id: 6,
      name: "David Thompson",
      role: "Head of Talent",
      company: "Meta",
      location: "Austin, USA",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      testimonial: "Tumoro has become our go-to platform for finding exceptional African talent. The quality and cultural fit are unmatched.",
      rating: 5,
      type: "employer",
      highlight: "Unmatched quality",
      color: "#06b6d4"
    }
  ];

  // Key metrics - no repetition with Features
  const metrics = [
    { number: "98%", label: "Success Rate", color: "#6366f1" },
    { number: "2.5x", label: "Faster Hiring", color: "#10b981" },
    { number: "45%", label: "Avg Salary Increase", color: "#f59e0b" },
    { number: "50+", label: "Countries", color: "#8b5cf6" }
  ];

  // Auto-play testimonials
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  return (
    <section className={styles.challengeTracking}>
      <div className={styles.container}>
        {/* Header Section */}
        <motion.div 
          className={styles.header}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={itemVariants} className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Success Stories
          </motion.span>
          
          <motion.h2 variants={itemVariants} className={styles.title}>
            Real People, Real Success,
            <span className={styles.highlightText}> Real Impact</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className={styles.subtitle}>
            From Lagos to Silicon Valley, from Accra to London - discover how Tumoro 
            is transforming careers and connecting African excellence with global opportunities.
          </motion.p>
        </motion.div>

        {/* Metrics Section */}
        <motion.div 
          className={styles.metricsSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.metricsGrid}>
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className={styles.metricCard}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={styles.metricNumber} style={{ color: metric.color }}>{metric.number}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
                <div className={styles.metricAccent} style={{ backgroundColor: metric.color }}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div 
          className={styles.featuredSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className={styles.featuredCard}>
            <div className={styles.featuredContent}>
              <div className={styles.featuredHeader}>
                <div className={styles.featuredAvatar}>
                  <img 
                    src={testimonials[activeTestimonial].avatar} 
                    alt={testimonials[activeTestimonial].name}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[activeTestimonial].name)}&background=6366f1&color=fff&size=150`;
                    }}
                  />
                </div>
                <div className={styles.featuredInfo}>
                  <h3 className={styles.featuredName}>{testimonials[activeTestimonial].name}</h3>
                  <p className={styles.featuredRole}>{testimonials[activeTestimonial].role}</p>
                  <p className={styles.featuredCompany}>{testimonials[activeTestimonial].company}</p>
                  <p className={styles.featuredLocation}>{testimonials[activeTestimonial].location}</p>
                </div>
                <div className={styles.featuredHighlight} style={{ backgroundColor: testimonials[activeTestimonial].color }}>
                  {testimonials[activeTestimonial].highlight}
                </div>
              </div>
              
              <div className={styles.featuredTestimonial}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.testimonialText}>
                  {testimonials[activeTestimonial].testimonial}
                </p>
              </div>
              
              <div className={styles.featuredFooter}>
                <div className={styles.rating}>
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <svg key={i} className={styles.star} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <div className={styles.userType} style={{ color: testimonials[activeTestimonial].color }}>
                  {testimonials[activeTestimonial].type === 'talent' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Talent
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M3 21h18M5 21V7l8-4v18M19 21V10l-6-3M9 9v.01M9 12v.01M9 15v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Employer
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Navigation */}
          <div className={styles.testimonialNav}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.navDot} ${activeTestimonial === index ? styles.active : ''}`}
                onClick={() => {
                  setActiveTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div 
          className={styles.testimonialsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`${styles.testimonialCard} ${styles[testimonial.type]}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardAvatar}>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=ffffff&size=128&bold=true`;
                    }}
                  />
                </div>
                <div className={styles.cardInfo}>
                  <h4 className={styles.cardName}>{testimonial.name}</h4>
                  <p className={styles.cardRole}>{testimonial.role}</p>
                  <p className={styles.cardCompany}>{testimonial.company}</p>
                </div>
              </div>
              
              <div className={styles.cardHighlight}>
                {testimonial.highlight}
              </div>
              
              <div className={styles.cardContent}>
                <blockquote className={styles.cardTestimonial}>
                  {testimonial.testimonial.length > 120 
                    ? `${testimonial.testimonial.substring(0, 120)}...` 
                    : testimonial.testimonial
                  }
                </blockquote>
              </div>
              
              <div className={styles.cardFooter}>
                <div className={styles.cardRating}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={styles.cardStar}>★</span>
                  ))}
                </div>
                <div className={styles.cardType}>
                  {testimonial.type === 'talent' ? (
                    <>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      Talent
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
                      </svg>
                      Employer
                    </>
                  )}
                </div>
              </div>
              
              <div className={styles.cardAccent}></div>
            </div>
          ))}
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
            <h3 className={styles.ctaTitle}>Ready to Write Your Success Story?</h3>
            <p className={styles.ctaDescription}>
              Join thousands of African professionals who have transformed their careers 
              and connected with global opportunities through Tumoro.
            </p>
            <div className={styles.ctaButtons}>
              <motion.a 
                href="/signup?role=talent" 
                className={`${styles.ctaButton} ${styles.primary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              <motion.a 
                href="/hire-talent" 
                className={`${styles.ctaButton} ${styles.secondary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Top Talent
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengeTracking; 