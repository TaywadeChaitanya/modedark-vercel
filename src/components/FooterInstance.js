import styles from "./FooterInstance.module.css";

const FooterInstance = () => {
  return (
    <section className={styles.footerInstance}>
      <div className={styles.companyTagInstanceParent}>
        <div className={styles.companyTagInstance}>
          <div className={styles.h2Parent}>
            <h1 className={styles.h2}>Get instant access</h1>
            <div className={styles.body}>
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </div>
          </div>
          <div className={styles.form}>
            <input
              className={styles.form1}
              placeholder="name@email.com"
              type="text"
            />
            <button className={styles.buttons}>
              <div className={styles.getForFree}>Get access</div>
            </button>
          </div>
        </div>
        <img
          className={styles.emojistar1Icon}
          loading="lazy"
          alt=""
          src="../media/emojistar 1.svg"
        />
        <img
          className={styles.helix21Icon}
          loading="lazy"
          alt=""
          src="../media/helix2 1.svg"
        />
      </div>
    </section>
  );
};

export default FooterInstance;
