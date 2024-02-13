import { useState, useCallback } from "react";
import PopupLoginLarge from "../components/PopupLoginLarge";
import PortalPopup from "../components/PortalPopup";
import PopupSignUpLarge from "../components/PopupSignUpLarge";
import { useNavigate } from "react-router-dom";
import styles from "./HowToPlayComputer.module.css";
const HowToPlayComputer = () => {
  const [isPopupLoginLargeOpen, setPopupLoginLargeOpen] = useState(false);
  const [isPopupSignUpLargeOpen, setPopupSignUpLargeOpen] = useState(false);
  const navigate = useNavigate();

  const onFooterImgGitHubClick = useCallback(() => {
    window.open("https://www.google.com/search?q=github");
  }, []);

  const onFooterButtonBackClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='navComputerSOContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFooterImgDiscordClick = useCallback(() => {
    window.open("https://www.google.com/search?q=discord");
  }, []);

  const openPopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(true);
  }, []);

  const closePopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(false);
  }, []);

  const openPopupSignUpLarge = useCallback(() => {
    setPopupSignUpLargeOpen(true);
  }, []);

  const closePopupSignUpLarge = useCallback(() => {
    setPopupSignUpLargeOpen(false);
  }, []);

  const onNavContactTextClick = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onNavHowTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='headerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onNavLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.howtoplaycomputer}>
        <div className={styles.header} data-scroll-to="headerContainer">
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
            src="/content1imghtp@2x.png"
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
        <div
          className={styles.navcomputerso}
          data-scroll-to="navComputerSOContainer"
        >
          <div className={styles.navbarbackground} />
          <button
            className={styles.navbuttonplay}
            onClick={openPopupLoginLarge}
          >
            <b className={styles.navplaytext}>Play Now!</b>
          </button>
          <button
            className={styles.navbuttonsign}
            onClick={openPopupSignUpLarge}
          >
            <b className={styles.navsigntext}>Sign Up</b>
          </button>
          <div className={styles.pageselectcontact} />
          <b className={styles.navcontact} onClick={onNavContactTextClick}>
            Contact Us
          </b>
          <div className={styles.pageselecthow} />
          <b className={styles.navhow} onClick={onNavHowTextClick}>
            How to Play
          </b>
          <div className={styles.pageselectabout} />
          <b className={styles.navabout} onClick={onNavAboutTextClick}>
            About
          </b>
          <div className={styles.pageselectlogo} />
          <img
            className={styles.navlogoIcon}
            alt=""
            src="/navlogo@2x.png"
            onClick={onNavLogoImageClick}
          />
        </div>
      </div>
      {isPopupLoginLargeOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLoginLarge}
        >
          <PopupLoginLarge onClose={closePopupLoginLarge} />
        </PortalPopup>
      )}
      {isPopupSignUpLargeOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupSignUpLarge}
        >
          <PopupSignUpLarge onClose={closePopupSignUpLarge} />
        </PortalPopup>
      )}
    </>
  );
};

export default HowToPlayComputer;
