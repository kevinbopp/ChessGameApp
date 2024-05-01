import { useState, useCallback } from "react";
import PopupSideSO from "../components/PopupSideSO";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import styles from "./HowToPlayTablet.module.css";
const HowToPlayTablet = () => {
  const [isPopupSideSOTabletOpen, setPopupSideSOTabletOpen] = useState(false);
  const [isPopupSideSOOpen, setPopupSideSOOpen] = useState(false);
  const navigate = useNavigate();

  const onFooterImgGitHubClick = useCallback(() => {
    window.open("https://www.google.com/search?q=github");
  }, []);

  const onFooterButtonBackClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='navTabletContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFooterImgDiscordClick = useCallback(() => {
    window.open("https://www.google.com/search?q=discord");
  }, []);

  const openPopupSideSOTablet = useCallback(() => {
    setPopupSideSOTabletOpen(true);
  }, []);

  const closePopupSideSOTablet = useCallback(() => {
    setPopupSideSOTabletOpen(false);
  }, []);

  const openPopupSideSO = useCallback(() => {
    setPopupSideSOOpen(true);
  }, []);

  const closePopupSideSO = useCallback(() => {
    setPopupSideSOOpen(false);
  }, []);

  const onNavLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.howtoplaytablet}>
        <div className={styles.header}>
          <b className={styles.headertexttitle}>How to Play</b>
        </div>
        <div className={styles.content1}>
          <div className={styles.content1text}>
            Learning is easy! Start by following along with some of our
            hand-picked tutorials below.
          </div>
          <b className={styles.content1texttitle}>New to Chess?</b>
          <img
            className={styles.content1imghtpIcon}
            alt=""
            src="/content1imghtp1@2x.png"
          />
        </div>
        <div className={styles.content2}>
          <iframe
            className={styles.content2vid3}
            src="https://www.youtube.com/embed/6Pqd7UFWr7M?rel=0"
            frameBorder="0"
            allowFullScreen
          />
          <div className={styles.content2textvid3}>Embed a Video Here</div>
          <iframe
            className={styles.content2vid2}
            src="https://www.youtube.com/embed/6Pqd7UFWr7M?rel=0"
            frameBorder="0"
            allowFullScreen
          />
          <div className={styles.content2textvid2}>Embed a Video Here</div>
          <iframe
            className={styles.content2vid1}
            src="https://www.youtube.com/embed/6Pqd7UFWr7M?rel=0"
            frameBorder="0"
            allowFullScreen
          />
          <div className={styles.content2textvid1}>Embed a Video Here</div>
        </div>
        <div className={styles.footer}>
          <button
            className={styles.footerimggithub}
            onClick={onFooterImgGitHubClick}
          />
          <div className={styles.footertextcopyright}>
            © 2023 FullStack Bros. All rights reserved.
          </div>
          <button
            className={styles.footerbuttonback}
            onClick={onFooterButtonBackClick}
          >
            <b className={styles.footerbuttontext}>Back to Top</b>
          </button>
          <button
            className={styles.footerimgdiscord}
            onClick={onFooterImgDiscordClick}
          />
        </div>
        <div className={styles.navtablet} data-scroll-to="navTabletContainer">
          <div className={styles.navbarbackground} />
          <button
            className={styles.hamburgermenubutton}
            id="navButtonMenu"
            onClick={openPopupSideSOTablet}
          >
            <img
              className={styles.menubuttonicon}
              alt=""
              src="/menubuttonicon7.svg"
              onClick={openPopupSideSO}
            />
          </button>
          <div className={styles.pageselectlogo} />
          <img
            className={styles.navlogoIcon}
            alt=""
            src="/navlogo@2x.png"
            onClick={onNavLogoImageClick}
          />
        </div>
      </div>
      {isPopupSideSOTabletOpen && (
        <PortalDrawer
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Right"
          onOutsideClick={closePopupSideSOTablet}
        >
          <PopupSideSO onClose={closePopupSideSOTablet} />
        </PortalDrawer>
      )}
      {isPopupSideSOOpen && (
        <PortalDrawer
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Right"
          onOutsideClick={closePopupSideSO}
        >
          <PopupSideSO onClose={closePopupSideSO} />
        </PortalDrawer>
      )}
    </>
  );
};

export default HowToPlayTablet;
