
// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>AI & ML Innovator</h3>
              <p>
              Passionate about AI/ML, driving innovation through advanced model training and cutting-edge technology
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Technical Support Specialist</h3>
              <p>
                Experienced technical support specialist adept at efficiently resolving 
                complex technical issues with a customer-focused approach.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/Bulb.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Summary</h3>
              <p>
                I&apos;m dedicated to leveraging technology for positive change, applying 
                creativity and attention to detail in developing innovative solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
