import { useState, useCallback } from "react";
import PopupSideSOMobile from "../components/PopupSideSOMobile";
import PortalDrawer from "../components/PortalDrawer";
import PopupSideSO from "../components/PopupSideSO";
import { useNavigate } from "react-router-dom";
import styles from "./ContactUsMobile.module.css";
const ContactUsMobile = () => {
  const [isPopupSideSOMobileOpen, setPopupSideSOMobileOpen] = useState(false);
  const [isPopupSideSOOpen, setPopupSideSOOpen] = useState(false);
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
      <div className={styles.contactusmobile}>
        <div className={styles.header}>
          <b className={styles.headertexttitle}>Contact Us</b>
        </div>
        <div className={styles.content1}>
          <img
            className={styles.content1imgIcon}
            alt=""
            src="/content1img2@2x.png"
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
              src="/menubuttonicon8.svg"
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

export default ContactUsMobile;
