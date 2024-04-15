import FeatureCards from "./FeatureCards";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.desktopInner}>
      <div className={styles.codingHustlersParent}>
        <div className={styles.codingHustlers}>
          <div className={styles.cardElements}>
            <b className={styles.h2}>Everything you need</b>
            <div className={styles.body}>
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </div>
          </div>
        </div>
        <div className={styles.cardElements1}>
          <FeatureCards
            integrationEcosystem="Integration ecosystem"
            body="Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
          />
          <FeatureCards
            integrationEcosystem="Goal setting and tracking"
            body="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
            propWidth="210px"
          />
          <FeatureCards
            integrationEcosystem="Secure data encryption"
            body="With end-to-end encryption, your data is securely stored and protected from unauthorized access."
            propWidth="197px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
