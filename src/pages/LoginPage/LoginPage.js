import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const [activeRole, setActiveRole] = useState(searchParams.get('role') || 'talent');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login data:', { ...formData, role: activeRole });
      // Handle successful login
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login for:', activeRole);
    // Handle Google OAuth
  };

  const roleConfig = {
    talent: {
      title: 'Welcome Back',
      subtitle: 'Sign in to access your profile and discover opportunities',
      color: '#6366f1',
      lightColor: '#8b5cf6'
    },
    recruiter: {
      title: 'Welcome Back',
      subtitle: 'Sign in to access top talent and manage your hiring',
      color: '#10b981',
      lightColor: '#059669'
    }
  };

  const currentConfig = roleConfig[activeRole];

  return (
    <div className={styles.loginPage}>
      <Header />
      
      {/* Animated Background */}
      <div className={styles.backgroundElements}>
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
      </div>

      <main className={styles.main}>
        <div className={styles.container}>
          <motion.div 
            className={styles.loginContainer}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Role Selection */}
            <motion.div variants={itemVariants} className={styles.roleSelection}>
              <div className={styles.roleToggle}>
                <motion.button
                  className={`${styles.roleButton} ${activeRole === 'talent' ? styles.active : ''}`}
                  onClick={() => setActiveRole('talent')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ 
                    background: activeRole === 'talent' 
                      ? `linear-gradient(135deg, ${roleConfig.talent.color} 0%, ${roleConfig.talent.lightColor} 100%)`
                      : 'rgba(255, 255, 255, 0.8)',
                    color: activeRole === 'talent' ? 'white' : '#6b7280',
                    boxShadow: activeRole === 'talent' 
                      ? `0 8px 25px ${roleConfig.talent.color}30`
                      : '0 4px 15px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  I'm a Talent
                </motion.button>
                <motion.button
                  className={`${styles.roleButton} ${activeRole === 'recruiter' ? styles.active : ''}`}
                  onClick={() => setActiveRole('recruiter')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ 
                    background: activeRole === 'recruiter' 
                      ? `linear-gradient(135deg, ${roleConfig.recruiter.color} 0%, ${roleConfig.recruiter.lightColor} 100%)`
                      : 'rgba(255, 255, 255, 0.8)',
                    color: activeRole === 'recruiter' ? 'white' : '#6b7280',
                    boxShadow: activeRole === 'recruiter' 
                      ? `0 8px 25px ${roleConfig.recruiter.color}30`
                      : '0 4px 15px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21H21L18 8H6L3 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8V6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6V8" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  I'm a Recruiter
                </motion.button>
              </div>
            </motion.div>

            <div className={styles.contentWrapper}>
              {/* Form Section */}
              <motion.div variants={itemVariants} className={styles.formSection}>
                <div className={styles.loginHeader}>
                  <motion.div 
                    className={styles.headerIcon} 
                    style={{ 
                      background: `linear-gradient(135deg, ${currentConfig.color} 0%, ${currentConfig.lightColor} 100%)`,
                      boxShadow: `0 8px 25px ${currentConfig.color}30`
                    }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15M10 17L15 12L10 7M15 12H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <h1 className={styles.title}>{currentConfig.title}</h1>
                  <p className={styles.subtitle}>{currentConfig.subtitle}</p>
                </div>

                <div className={styles.formContainer}>
                  {/* Google OAuth Button */}
                  <motion.button
                    type="button"
                    onClick={handleGoogleLogin}
                    className={styles.googleBtn}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className={styles.googleIcon} viewBox="0 0 24 24" width="20" height="20">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </motion.button>

                  <div className={styles.divider}>
                    <span>or sign in with email</span>
                  </div>

                  {/* Login Form */}
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Email Address *
                      </label>
                      <div className={styles.inputWrapper}>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`${styles.input} ${errors.email ? styles.error : ''}`}
                          placeholder="Enter your email address"
                          required
                        />
                        <div className={styles.inputIcon}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Password *
                      </label>
                      <div className={styles.inputWrapper}>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className={`${styles.input} ${errors.password ? styles.error : ''}`}
                          placeholder="Enter your password"
                          required
                        />
                        <div className={styles.inputIcon}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="16" r="1" fill="currentColor"/>
                            <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
                        <button
                          type="button"
                          className={styles.passwordToggle}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 4.028 7.66607 6.17 6.17M9.9 4.24C10.5883 4.0789 11.2931 3.99836 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51900 13.9113 9.29449 13.5719 9.14359 13.1984C8.99269 12.8248 8.91855 12.4247 8.92563 12.0219C8.93271 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4858 9.58525 10.1546 9.88 9.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M1 1L23 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          )}
                        </button>
                      </div>
                      {errors.password && <span className={styles.errorText}>{errors.password}</span>}
                    </div>

                    <div className={styles.formOptions}>
                      <label className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleInputChange}
                          className={styles.checkbox}
                        />
                        <span className={styles.checkboxText}>Keep me logged in</span>
                      </label>
                      <Link to="/forgot-password" className={styles.forgotLink}>
                        Forgot password?
                      </Link>
                    </div>

                    <motion.button 
                      type="submit" 
                      className={styles.submitBtn}
                      style={{ 
                        background: `linear-gradient(135deg, ${currentConfig.color} 0%, ${currentConfig.lightColor} 100%)`,
                        boxShadow: `0 8px 25px ${currentConfig.color}30`
                      }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className={styles.loadingSpinner}></div>
                      ) : (
                        <>
                          Sign In
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </form>

                  <div className={styles.signupPrompt}>
                    <p>Don't have an account? <Link to={`/signup?role=${activeRole}`} className={styles.signupLink}>Sign up here</Link></p>
                  </div>
                </div>
              </motion.div>

              {/* Benefits Section */}
              <motion.div variants={itemVariants} className={styles.benefitsSection}>
                <div className={styles.benefitsContent}>
                  <div className={styles.benefitsHeader}>
                    <h3 className={styles.benefitsTitle}>
                      Join 12,000+ Professionals
                    </h3>
                    <p className={styles.benefitsSubtitle}>
                      Connect with opportunities that match your expertise
                    </p>
                  </div>

                  <div className={styles.statsSection}>
                    <div className={styles.statsGrid}>
                      <div className={styles.statItem}>
                        <div className={styles.statNumber}>12K+</div>
                        <div className={styles.statLabel}>Professionals</div>
                      </div>
                      <div className={styles.statItem}>
                        <div className={styles.statNumber}>500+</div>
                        <div className={styles.statLabel}>Companies</div>
                      </div>
                      <div className={styles.statItem}>
                        <div className={styles.statNumber}>96%</div>
                        <div className={styles.statLabel}>Success Rate</div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.testimonial}>
                    <div className={styles.testimonialContent}>
                      <p>"Tumoro connected me with my dream job at a Fortune 500 company. The platform's quality is unmatched."</p>
                      <div className={styles.testimonialAuthor}>
                        <img 
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face&auto=format&q=80" 
                          alt="Professional" 
                          className={styles.authorAvatar}
                        />
                        <div>
                          <div className={styles.authorName}>Sarah Okafor</div>
                          <div className={styles.authorTitle}>Software Engineer at Microsoft</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage; 