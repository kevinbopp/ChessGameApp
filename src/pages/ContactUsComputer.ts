import { useState, useCallback } from "react";
import PopupLoginLarge from "../components/PopupLoginLarge";
import PortalPopup from "../components/PortalPopup";
import PopupSignUpLarge from "../components/PopupSignUpLarge";
import { useNavigate } from "react-router-dom";
import styles from "./ContactUsComputer.module.css";
const ContactUsComputer = () => {
  const [isPopupLoginLargeOpen, setPopupLoginLargeOpen] = useState(false);
  const [isPopupSignUpLargeOpen, setPopupSignUpLargeOpen] = useState(false);
  const navigate = useNavigate();

  const onContent1ButtonSendClick = useCallback(() => {
    window.open(
      "https://miami.craigslist.org/search/sss?query=pigeon#search=1~gallery~0~0"
    );
  }, []);

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
    const anchor = document.querySelector("[data-scroll-to='headerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavHowTextClick = useCallback(() => {
    navigate("/howtoplay");
  }, [navigate]);

  const onNavAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onNavLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.contactuscomputer}>
        <div className={styles.header} data-scroll-to="headerContainer">
          <b className={styles.headertexttitle}>Contact Us</b>
        </div>
        <div className={styles.content1}>
          <img
            className={styles.content1imgIcon}
            alt=""
            src="/content1img@2x.png"
          />
          <button
            className={styles.content1buttonsend}
            onClick={onContent1ButtonSendClick}
          >
            <b className={styles.content2buttontext}>Send a Carrier Pigeon</b>
          </button>
          <div className={styles.content1text}>
            Contacting us is simple! Just send a single-stamped carrier pigeon
            to the UCF Mail Center.
          </div>
          <b className={styles.content1texttitle}>Need to Reach Us?</b>
        </div>
        <div className={styles.content2} />
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

export default ContactUsComputer;
