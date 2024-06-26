import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shoyeb</h1>
        <p className={styles.description}>
          👋 I'm a Software Engineering undergraduate, also working as a
          freelance backend developer. Eager to collaborate on exciting
          projects! Reach out to discuss potential opportunities. Let's create
          impactful software solutions together! 🚀
        </p>
        <a href="mailto:mdsoyeb@iut-dhaka.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImage.jpg')}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
