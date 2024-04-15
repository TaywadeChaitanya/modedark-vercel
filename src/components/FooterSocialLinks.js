import styles from "./FooterSocialLinks.module.css";

const FooterSocialLinks = () => {
  return (
    <section className={styles.footerSocialLinks}>
      <div className={styles.footerSocialLinksChild} />
      <div className={styles.cardElements}>
        <div className={styles.cardElements1}>
          <div className={styles.cardElements2}>
            <h1 className={styles.h2}>Intuitive interface</h1>
            <h3 className={styles.body}>
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes, one task at a time.
            </h3>
          </div>
        </div>
        <div className={styles.wrapperAppNight}>
          <img
            className={styles.appNightIcon}
            loading="lazy"
            alt=""
            src="../media/App Night.svg"
          />
        </div>
      </div>
      <div className={styles.navBarDesktopInstance}>
        <div className={styles.frameParent}>
          <div className={styles.h2Wrapper}>
            <h1 className={styles.h21}>Frequently asked questions</h1>
          </div>
          <div className={styles.faqs}>
            <div className={styles.formfaq}>
              <b className={styles.howDoesThe}>
                How does the pricing work for teams
              </b>
              <div className={styles.howPricingWorksLabel}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="../media/Picon.svg"
                />
              </div>
            </div>
            <div className={styles.formfaqParent}>
              <div className={styles.formfaq1}>
                <b className={styles.howDoesThe1}>
                  How does the pricing work for teams
                </b>
                <div className={styles.frame}>
                  <img
                    className={styles.vectorIcon1}
                    loading="lazy"
                    alt=""
                    src="../media/Picon.svg"
                  />
                </div>
              </div>
              <div className={styles.formfaq2}>
                <b className={styles.howDoesThe2}>
                  How does the pricing work for teams
                </b>
                <div className={styles.frame1}>
                  <img
                    className={styles.vectorIcon2}
                    loading="lazy"
                    alt=""
                    src="../media/Picon.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.formfaq3}>
              <b className={styles.howDoesThe3}>
                How does the pricing work for teams
              </b>
              <div className={styles.frame2}>
                <img className={styles.vectorIcon3} alt="" src="../media/Picon.svg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSocialLinks;
