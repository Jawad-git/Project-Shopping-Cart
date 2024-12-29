import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.license}>
        &copy; 2024 The Odin Merchandise. All rights are reserved
      </div>
      <ul className={styles.contactLinks}>
        <li>
          <a href="https://github.com/Jawad-git">
            <img
              src="github-light.png"
              alt="github logo"
              className={`${styles.github} ${styles.logo}`}
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/theodinproject/">
            <img
              src="instagram-light.png"
              alt="instagram logo"
              className={`${styles.instagram} ${styles.logo}`}
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mohammad-jawad-2ba72a283/">
            <img
              src="linkedin-light.png"
              alt="linkedin logo"
              className={`${styles.linkedin} ${styles.logo}`}
            />
          </a>
        </li>
        <li>
          <a href="https://x.com/theodinproject?lang=en">
            <img
              src="twitter-light.png"
              alt="twitter logo"
              className={`${styles.twitter} ${styles.logo}`}
            />
          </a>
        </li>
      </ul>
      <div className={styles.email}>
        Mail our developer!&nbsp;
        <a
          href="mailto:mohammed.aljawadd@gmail.com?subject=Hello%20from%20The%20Odin%20Merchandise"
          className={styles.mail}
        >
          Mohammed.aljawadd@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
