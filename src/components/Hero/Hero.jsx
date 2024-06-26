// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I&apos;m Elangovan</h1>
            <p className={styles.description}>I&apos;m a AI/ML Enthusiast, applying diverse skills and tech passion to drive impactful solutions. Reach out if you wanna know more. 
            </p>
            <a href="mailto:sec22ad028@sairamtap.edu.in" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/AIpropic.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomblur} />
    </section>
  );
};
