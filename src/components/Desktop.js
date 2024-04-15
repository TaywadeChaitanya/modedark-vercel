import NavBarDesktop from "../components/NavBarDesktop";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterSocialLinks from "../components/FooterSocialLinks";
import FooterInstance from "../components/FooterInstance";
import FooterS from "../components/FooterS";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.bar}>
        <div className={styles.thisPageIsIncludedInAFreParent}>
          <div className={styles.thisPageIs}>
            This page is included in a free SaaS Website Kit.
          </div>
          <div className={styles.tagArea}>
            <div className={styles.viewTheComplete}>View the complete Kit</div>
            <img className={styles.icons} alt="" src="../media/VectorArrow.svg" />
          </div>
        </div>
      </div>
      <NavBarDesktop />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <FooterSocialLinks />
      <FooterInstance />
      <FooterS />
    </div>
  );
};

export default Desktop;
