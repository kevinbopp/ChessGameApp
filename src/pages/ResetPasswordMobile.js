import { useState, useCallback } from "react";
import PopupNoAPI from "../components/PopupNoAPI";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import PopupSideSOMobile from "../components/PopupSideSOMobile";
import PortalDrawer from "../components/PortalDrawer";
import PopupSideSO from "../components/PopupSideSO";
import styles from "./ResetPasswordMobile.module.css";
const ResetPasswordMobile = () => {
  const [isPopupNoAPIOpen, setPopupNoAPIOpen] = useState(false);
  const navigate = useNavigate();
  const [isPopupSideSOMobileOpen, setPopupSideSOMobileOpen] = useState(false);
  const [isPopupSideSOOpen, setPopupSideSOOpen] = useState(false);

  const onContent1ButtonCancelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openPopupNoAPI = useCallback(() => {
    setPopupNoAPIOpen(true);
  }, []);

  const closePopupNoAPI = useCallback(() => {
    setPopupNoAPIOpen(false);
  }, []);

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
      "[data-scroll-to='navMobileContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFooterImgDiscordClick = useCallback(() => {
    window.open("https://www.google.com/search?q=discord");
  }, []);

  const openPopupSideSOMobile = useCallback(() => {
    setPopupSideSOMobileOpen(true);
  }, []);

  const closePopupSideSOMobile = useCallback(() => {
    setPopupSideSOMobileOpen(false);
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
      <div className={styles.resetpasswordmobile}>
        <div className={styles.header}>
          <b className={styles.headertexttitle}>Reset Password</b>
        </div>
        <div className={styles.content1}>
          <button
            className={styles.content1buttoncancel}
            onClick={onContent1ButtonCancelClick}
          >
            <b className={styles.content1buttontext}>Cancel</b>
          </button>
          <button
            className={styles.content1buttonresetpassword}
            onClick={openPopupNoAPI}
          >
            <b className={styles.content1buttontext1}>Reset Password</b>
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
        <div className={styles.content2}>
          <div className={styles.content2divider} />
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
        <div className={styles.navmobile} data-scroll-to="navMobileContainer">
          <div className={styles.navbarbackground} />
          <button
            className={styles.hamburgermenubutton}
            id="navButtonMenu"
            onClick={openPopupSideSOMobile}
          >
            <img
              className={styles.menubuttonicon}
              alt=""
              src="/menubuttonicon2.svg"
              onClick={openPopupSideSO}
            />
          </button>
          <div className={styles.pageselectlogo} />
          <img
            className={styles.navlogoIcon}
            alt=""
            src="/navlogo1@2x.png"
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
      {isPopupSideSOMobileOpen && (
        <PortalDrawer
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Right"
          onOutsideClick={closePopupSideSOMobile}
        >
          <PopupSideSOMobile onClose={closePopupSideSOMobile} />
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

export default ResetPasswordMobile;
