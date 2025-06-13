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

  const testimonials = [
    {
      id: 1,
      name: "Adaora Okafor",
      role: "Senior Software Engineer",
      company: "Microsoft",
      location: "Lagos, Nigeria → Seattle, USA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      testimonial: "Tumoro's ELO rating system helped me showcase my true potential. The platform's vetting process gave me credibility that traditional resumes couldn't. Within 3 months, I landed my dream role at Microsoft with a 40% salary increase.",
      rating: 5,
      type: "talent",
      highlight: "40% salary increase",
      color: "#2568FB",
      bgColor: "#F0F4FF"
    },
    {
      id: 2,
      name: "James Mitchell",
      role: "CTO & Co-Founder",
      company: "FinTech Innovations",
      location: "London, UK",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      testimonial: "The vetting process is incredible. Every talent is vetted, every hire is reliable. We've scaled our engineering team from 5 to 50 professionals with zero bad hires. The quality is consistently exceptional.",
      rating: 5,
      type: "employer",
      highlight: "Zero bad hires",
      color: "#10B981",
      bgColor: "#F0FDF4"
    },
    {
      id: 3,
      name: "Kwame Asante",
      role: "Lead UX Designer",
      company: "Shopify",
      location: "Accra, Ghana → Toronto, Canada",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      testimonial: "The Tree Score feature celebrating my heritage made me stand out authentically. Employers love the cultural diversity and unique perspective it brings to their teams. It's not just a job platform, it's a cultural bridge.",
      rating: 5,
      type: "talent",
      highlight: "Cultural authenticity",
      color: "#F59E0B",
      bgColor: "#FFFBEB"
    },
    {
      id: 4,
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "Stripe",
      location: "San Francisco, USA",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      testimonial: "Tumoro has revolutionized our hiring process. The AI-powered matching and comprehensive vetting saves us months of screening. We've hired 15 exceptional African professionals who've become our top performers.",
      rating: 5,
      type: "employer",
      highlight: "Top performers",
      color: "#8B5CF6",
      bgColor: "#FAF5FF"
    }
  ];

  const metrics = [
    { number: "98%", label: "Success Rate", icon: "🎯", color: "#2568FB" },
    { number: "2.5x", label: "Faster Hiring", icon: "⚡", color: "#10B981" },
    { number: "45%", label: "Avg Salary Increase", icon: "📈", color: "#F59E0B" },
    { number: "50+", label: "Countries Reached", icon: "🌍", color: "#8B5CF6" }
  ];

  const achievements = [
    { icon: "🏆", title: "Industry Recognition", description: "Featured in TechCrunch, Forbes, and Wired" },
    { icon: "🌟", title: "5-Star Platform", description: "Rated 4.9/5 by 12,000+ professionals" },
    { icon: "🚀", title: "Rapid Growth", description: "300% year-over-year growth in placements" },
    { icon: "🌍", title: "Global Reach", description: "Connecting talent across 50+ countries" }
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
            <span className={styles.badgeIcon}>✨</span>
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
                <div className={styles.metricIcon}>{metric.icon}</div>
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
                  <img src={testimonials[activeTestimonial].avatar} alt={testimonials[activeTestimonial].name} />
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
                    <span key={i} className={styles.star}>⭐</span>
                  ))}
                </div>
                <div className={styles.userType} style={{ backgroundColor: testimonials[activeTestimonial].bgColor, color: testimonials[activeTestimonial].color }}>
                  {testimonials[activeTestimonial].type === 'talent' ? '👨‍💻 Talent' : '🏢 Employer'}
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
              />
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className={styles.achievementsSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className={styles.achievementsHeader}>
            <span className={styles.achievementsBadge}>
              <span className={styles.badgeIcon}>🏆</span>
              Recognition
            </span>
            <h3 className={styles.achievementsTitle}>Trusted & Recognized Globally</h3>
          </motion.div>
          
          <motion.div className={styles.achievementsGrid} variants={containerVariants}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={styles.achievementCard}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className={styles.achievementIcon}>{achievement.icon}</div>
                <h4 className={styles.achievementTitle}>{achievement.title}</h4>
                <p className={styles.achievementDescription}>{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
            <motion.div
              key={testimonial.id}
              className={`${styles.testimonialCard} ${styles[testimonial.type]}`}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardAvatar}>
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <div className={styles.cardInfo}>
                  <h4 className={styles.cardName}>{testimonial.name}</h4>
                  <p className={styles.cardRole}>{testimonial.role}</p>
                  <p className={styles.cardCompany}>{testimonial.company}</p>
                </div>
                <div className={styles.cardHighlight} style={{ backgroundColor: testimonial.color }}>
                  {testimonial.highlight}
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <p className={styles.cardTestimonial}>
                  "{testimonial.testimonial.substring(0, 120)}..."
                </p>
              </div>
              
              <div className={styles.cardFooter}>
                <div className={styles.cardRating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className={styles.cardStar}>⭐</span>
                  ))}
                </div>
                <div className={styles.cardType} style={{ backgroundColor: testimonial.bgColor, color: testimonial.color }}>
                  {testimonial.type === 'talent' ? 'Talent' : 'Employer'}
                </div>
              </div>
              
              <div className={styles.cardAccent} style={{ backgroundColor: testimonial.color }}></div>
            </motion.div>
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
            <div className={styles.ctaIcon}>🚀</div>
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