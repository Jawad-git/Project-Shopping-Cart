import styles from "./aboutPage.module.css";
const AboutPage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.introduction}>
        <h1 className={styles.h1}>Who We Are</h1>
        <p className={styles.p}>
          At Norse Merchandise, we are a team of dedicated individuals who share
          a deep appreciation for the history, myths, and traditions of the
          Norse people. We are passionate about connecting with like-minded
          individuals who value the strength, wisdom, and artistry of the Viking
          culture.
        </p>
        <h1 className={styles.h1}>Who We Do</h1>
        <p className={styles.p}>
          At Norse Merchandise, we are passionate about bringing the rich and
          powerful heritage of the Norse culture to life through high-quality,
          carefully curated products. Our collection celebrates the legendary
          mythology, craftsmanship, and history of the Vikings, offering
          everything from intricately designed jewelry and apparel to home decor
          and collectibles. Whether you&apos;re a history enthusiast, a fan of
          Norse mythology, or someone who simply admires the strength and spirit
          of the Viking age, we aim to provide items that reflect the boldness
          and beauty of this ancient culture. Every product we offer is crafted
          with care, inspired by the timeless symbols and stories of the Norse
          world, and designed for those who carry the Viking spirit in their
          hearts.
        </p>
        <h1 className={styles.h1}>Address</h1>
        <ul className={styles.ul}>
          <li className={styles.li}>Valhalla Plaza,</li>
          <li className={styles.li}>Asgard, 0025</li>
          <li className={styles.li}>Realm of the Aesir</li>
          <li className={styles.li}>Yggdrasil, Nine Realms</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
