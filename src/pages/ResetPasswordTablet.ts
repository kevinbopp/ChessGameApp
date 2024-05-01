import { useState, useCallback } from "react";
import PopupNoAPI from "../components/PopupNoAPI";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import PopupSideSO from "../components/PopupSideSO";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./ResetPasswordTablet.module.css";
const ResetPasswordTablet = () => {
  const [isPopupNoAPIOpen, setPopupNoAPIOpen] = useState(false);
  const navigate = useNavigate();
  const [isPopupSideSO1Open, setPopupSideSO1Open] = useState(false);
  const [isPopupSideSOOpen, setPopupSideSOOpen] = useState(false);

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
      "[data-scroll-to='navTabletContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFooterImgDiscordClick = useCallback(() => {
    window.open("https://www.google.com/search?q=discord");
  }, []);

  const openPopupSideSO1 = useCallback(() => {
    setPopupSideSO1Open(true);
  }, []);

  const closePopupSideSO1 = useCallback(() => {
    setPopupSideSO1Open(false);
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
      <div className={styles.resetpasswordtablet}>
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
        <div className={styles.navtablet} data-scroll-to="navTabletContainer">
          <div className={styles.navbarbackground} />
          <button
            className={styles.hamburgermenubutton}
            id="navButtonMenu"
            onClick={openPopupSideSO1}
          >
            <img
              className={styles.menubuttonicon}
              alt=""
              src="/menubuttonicon1.svg"
              onClick={openPopupSideSO}
            />
          </button>
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
      {isPopupSideSO1Open && (
        <PortalDrawer
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Right"
          onOutsideClick={closePopupSideSO1}
        >
          <PopupSideSO onClose={closePopupSideSO1} />
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

export default ResetPasswordTablet;
