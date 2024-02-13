import { useState, useCallback } from "react";
import PopupNoAPI from "../components/PopupNoAPI";
import PortalPopup from "../components/PortalPopup";
import PopupLoginLarge from "../components/PopupLoginLarge";
import PopupSignUpLarge from "../components/PopupSignUpLarge";
import { useNavigate } from "react-router-dom";
import styles from "./ResetPasswordComputer.module.css";
const ResetPasswordComputer = () => {
  const [isPopupNoAPIOpen, setPopupNoAPIOpen] = useState(false);
  const [isPopupLoginLargeOpen, setPopupLoginLargeOpen] = useState(false);
  const [isPopupSignUpLargeOpen, setPopupSignUpLargeOpen] = useState(false);
  const navigate = useNavigate();

  const openPopupNoAPI = useCallback(() => {
    setPopupNoAPIOpen(true);
  }, []);

  const closePopupNoAPI = useCallback(() => {
    setPopupNoAPIOpen(false);
  }, []);

  const onContent1ButtonCancelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onImgHideConfirmPasswordClick = useCallback(() => {
    window.open("Call toggleConfirmPassword(); here.");
  }, []);

  const onImgHidePasswordClick = useCallback(() => {
    window.open("Call togglePassword(); here.");
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
    navigate("/contactus");
  }, [navigate]);

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
      <div className={styles.resetpasswordcomputer}>
        <div className={styles.header}>
          <b className={styles.headertexttitle}>Reset Password</b>
        </div>
        <div className={styles.content1}>
          <button
            className={styles.content1buttonresetpassword}
            onClick={openPopupNoAPI}
          >
            <b className={styles.content1buttontext}>Reset Password</b>
          </button>
          <button
            className={styles.content1buttoncancel}
            onClick={onContent1ButtonCancelClick}
          >
            <b className={styles.content1buttontext1}>Cancel</b>
          </button>
          <input
            className={styles.inputformconfirmpassword}
            type="password"
            placeholder="Confirm Password"
            minLength={8}
            required
            id="inputPass"
          />
          <button
            className={styles.imghideconfirmpassword}
            id="viewPassButton"
            onClick={onImgHideConfirmPasswordClick}
          />
          <b className={styles.textlabelconfirmpassword}>
            Confirm your password:
          </b>
          <input
            className={styles.inputformpassword}
            type="password"
            placeholder="New Password"
            minLength={8}
            required
            id="inputPass"
          />
          <button
            className={styles.imghidepassword}
            id="viewPassButton"
            onClick={onImgHidePasswordClick}
          />
          <b className={styles.textlabelpassword}>Enter a new password:</b>
          <div className={styles.content1textinstructions}>
            To reset your password, enter a new password in the form and confirm
            it by entering it again. Then, press the submit button.
          </div>
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
            src="/navlogo4@2x.png"
            onClick={onNavLogoImageClick}
          />
        </div>
      </div>
      {isPopupNoAPIOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupNoAPI}
        >
          <PopupNoAPI onClose={closePopupNoAPI} />
        </PortalPopup>
      )}
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

export default ResetPasswordComputer;
