import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './SignupPage.module.css';

const SignupPage = () => {
  const [activeTab, setActiveTab] = useState('talent');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    // Talent specific
    familySearchLinked: false,
    // Reviewer specific
    industry: '',
    experience: '',
    education: '',
    certifications: '',
    // Employer specific
    organizationName: ''
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
    console.log('Signup data:', { ...formData, role: activeTab });
    // Handle form submission
  };

  const handleGoogleSignup = () => {
    console.log('Google signup for:', activeTab);
    // Handle Google OAuth
  };

  return (
    <div className={styles.signupPage}>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.signupContainer}>
            <div className={styles.signupHeader}>
              <h1 className={styles.title}>Join Tumoro</h1>
              <p className={styles.subtitle}>
                Every talent is vetted. Every hire is reliable.
              </p>
            </div>

            {/* Role Selection Tabs */}
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === 'talent' ? styles.active : ''}`}
                onClick={() => setActiveTab('talent')}
              >
                Talent
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'reviewer' ? styles.active : ''}`}
                onClick={() => setActiveTab('reviewer')}
              >
                Reviewer
              </button>
              <button
                className={`${styles.tab} ${activeTab === 'employer' ? styles.active : ''}`}
                onClick={() => setActiveTab('employer')}
              >
                Employer
              </button>
            </div>

            <div className={styles.formContainer}>
              {/* Google OAuth Button */}
              <button
                type="button"
                onClick={handleGoogleSignup}
                className={styles.googleBtn}
              >
                <span className={styles.googleIcon}>🔍</span>
                Continue with Google
              </button>

              <div className={styles.divider}>
                <span>or</span>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Common Fields */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Email Address *
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
                    Password *
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

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="City, Country"
                    required
                  />
                </div>

                {/* Role-specific Fields */}
                {activeTab === 'talent' && (
                  <div className={styles.roleSpecific}>
                    <div className={styles.optionalSection}>
                      <h3 className={styles.sectionTitle}>Optional</h3>
                      <div className={styles.checkboxGroup}>
                        <input
                          type="checkbox"
                          id="familySearchLinked"
                          name="familySearchLinked"
                          checked={formData.familySearchLinked}
                          onChange={handleInputChange}
                          className={styles.checkbox}
                        />
                        <label htmlFor="familySearchLinked" className={styles.checkboxLabel}>
                          Link FamilySearch Tree
                          <span className={styles.tooltip}>
                            ℹ️ Contributes to your Tree Score and Tumoro Rating
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviewer' && (
                  <div className={styles.roleSpecific}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Industry/Field of Expertise *
                      </label>
                      <input
                        type="text"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className={styles.input}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Years of Experience *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className={styles.select}
                        required
                      >
                        <option value="">Select experience</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Highest Level of Education *
                      </label>
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        className={styles.select}
                        required
                      >
                        <option value="">Select education level</option>
                        <option value="highschool">High School</option>
                        <option value="associate">Associate Degree</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">PhD</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Certifications
                      </label>
                      <textarea
                        name="certifications"
                        value={formData.certifications}
                        onChange={handleInputChange}
                        className={styles.textarea}
                        placeholder="List your professional certifications..."
                      />
                    </div>

                    <div className={styles.reviewerNote}>
                      <p>
                        📋 Your application will be reviewed and approved by our team before you can start reviewing talent.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'employer' && (
                  <div className={styles.roleSpecific}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Organization Name *
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="Company name or personal name"
                        required
                      />
                    </div>
                    <div className={styles.employerNote}>
                      <p>
                        💼 We recommend using your business email address for added legitimacy.
                      </p>
                    </div>
                  </div>
                )}

                <button type="submit" className={`${styles.submitBtn} btn btn-primary`}>
                  Create Account
                </button>
              </form>

              <div className={styles.loginLink}>
                <p>
                  Already have an account? <Link to="/login">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignupPage; 