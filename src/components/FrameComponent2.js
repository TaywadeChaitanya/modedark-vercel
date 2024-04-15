import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.hero}>
        <div className={styles.heroChild} />
        <div className={styles.heroItem} />
        <div className={styles.heroContent}>
          <div className={styles.tag}>
            <div className={styles.version20IsHereParent}>
              <input
                className={styles.version20Is}
                placeholder="Version 2.0 is here"
                type="text"
              />
              <div className={styles.readMoreParent}>
                <div className={styles.readMore}>Read more</div>
                <img className={styles.icons} alt="" src="../media/VectorArrow.svg" />
              </div>
            </div>
          </div>
          <h1 className={styles.h1}>
            <p className={styles.oneTask}>One Task</p>
            <p className={styles.atATime}>at a Time</p>
          </h1>
          <h3 className={styles.body}>
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </h3>
          <button className={styles.buttons}>
            <div className={styles.getForFree}>Get for free</div>
          </button>
          <div className={styles.formContainer}>
            <div className={styles.wrapperCursor1}>
              <img
                className={styles.cursor1Icon}
                loading="lazy"
                alt=""
                src="../media/cursor 2.svg"
              />
            </div>
            <img className={styles.cursor2Icon} alt="" src="../media/cursor 2.svg" />
          </div>
          <div className={styles.wrapperMessage2Parent}>
            <div className={styles.wrapperMessage2}>
              <img
                className={styles.message2Icon}
                alt=""
                src="../media/message 1.svg"
              />
            </div>
            <img
              className={styles.message1Icon}
              loading="lazy"
              alt=""
              src="../media/message 1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
