import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.socialsContainerWrapper}>
      <div className={styles.socialsContainer}>
        <div className={styles.logoContainerFooter}>
          <div className={styles.trustedByThe}>
            Trusted by the world’s most innovative teams
          </div>
        </div>
        <div className={styles.button}>
          <img
            className={styles.acme1Icon}
            loading="lazy"
            alt=""
            src="../media/acme 1.svg"
          />
          <img
            className={styles.quantum1Icon}
            loading="lazy"
            alt=""
            src="../media/quantum 1.svg"
          />
          <div className={styles.helixShapeInstance}>
            <img
              className={styles.echo1Icon}
              loading="lazy"
              alt=""
              src="../media/echo 1.svg"
            />
          </div>
          <div className={styles.helixShapeInstance1}>
            <img
              className={styles.celestia1Icon}
              loading="lazy"
              alt=""
              src="../media/celestia 1.svg"
            />
          </div>
          <div className={styles.navBarSocialsFooter}>
            <img
              className={styles.pulse1Icon}
              loading="lazy"
              alt=""
              src="../media/pulse 1.svg"
            />
          </div>
          <div className={styles.apex1Wrapper}>
            <img
              className={styles.apex1Icon}
              loading="lazy"
              alt=""
              src="../media/apex 1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
