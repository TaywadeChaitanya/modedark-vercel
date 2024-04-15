import styles from "./FooterS.module.css";

const FooterS = () => {
  return (
    <footer className={styles.footerS}>
      <div className={styles.yourCompanyIncAllRightsWrapper}>
        <div className={styles.yourCompanyInc}>
          @ 2024 Your Company, Inc. All rights reserved
        </div>
      </div>
      <div className={styles.socialsParent}>
        <img
          className={styles.socialsIcon}
          loading="lazy"
          alt=""
          src="../media/Socials.svg"
        />
        <img
          className={styles.socialsIcon1}
          loading="lazy"
          alt=""
          src="../media/Socials (1).svg"
        />
        <img
          className={styles.socialsIcon2}
          loading="lazy"
          alt=""
          src="../media/Socials (2).svg"
        />
        <img
          className={styles.socialsIcon3}
          loading="lazy"
          alt=""
          src="../media/Socials (3).svg"
        />
        <img
          className={styles.socialsIcon4}
          loading="lazy"
          alt=""
          src="../media/Socials (4).svg"
        />
        <img
          className={styles.socialsIcon5}
          loading="lazy"
          alt=""
          src="../media/socials (5).svg"
        />
      </div>
    </footer>
  );
};

export default FooterS;
