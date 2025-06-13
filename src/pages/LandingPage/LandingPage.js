import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import ChallengeTracking from '../../components/ChallengeTracking/ChallengeTracking';
import Footer from '../../components/Footer/Footer';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Features />
        <ChallengeTracking />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage; 