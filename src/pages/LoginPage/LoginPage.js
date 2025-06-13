import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Handle form submission
  };

  const handleGoogleLogin = () => {
    console.log('Google login');
    // Handle Google OAuth
  };

  return (
    <div className={styles.loginPage}>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.loginContainer}>
            <div className={styles.loginHeader}>
              <h1 className={styles.title}>Welcome Back</h1>
              <p className={styles.subtitle}>
                Sign in to your Tumoro account
              </p>
            </div>

            <div className={styles.formContainer}>
              {/* Google OAuth Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className={styles.googleBtn}
              >
                <span className={styles.googleIcon}>🔍</span>
                Continue with Google
              </button>

              <div className={styles.divider}>
                <span>or</span>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formOptions}>
                  <div className={styles.checkboxGroup}>
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className={styles.checkbox}
                    />
                    <label htmlFor="rememberMe" className={styles.checkboxLabel}>
                      Remember me
                    </label>
                  </div>
                  
                  <Link to="/forgot-password" className={styles.forgotLink}>
                    Forgot password?
                  </Link>
                </div>

                <button type="submit" className={`${styles.submitBtn} btn btn-primary`}>
                  Sign In
                </button>
              </form>

              <div className={styles.signupLink}>
                <p>
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage; 