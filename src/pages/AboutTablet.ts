import { useState, useCallback } from "react";
import PopupSideSO from "../components/PopupSideSO";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import styles from "./AboutTablet.module.css";
const AboutTablet = () => {
  const [isPopupSideSO1Open, setPopupSideSO1Open] = useState(false);
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
      <div className={styles.abouttablet}>
        <div className={styles.header}>
          <div className={styles.headertextmeet}>Meet the Team</div>
          <b className={styles.headertexttitle}>About Us</b>
        </div>
        <div className={styles.content1}>
          <div className={styles.content1divider} />
          <div className={styles.content1textgrouptitle}>
            Group 17’s Large Project for the University of Central Florida’s
            software development course, Processes of Object-Oriented Software
            Development.
          </div>
          <b className={styles.content1textgrouptitle1}>The FullStack Bros.</b>
          <img
            className={styles.content1imgfsblogoIcon}
            alt=""
            src="/content1imgfsblogo1@2x.png"
          />
        </div>
        <div className={styles.content2}>
          <div className={styles.content2role5}>Database Administrator</div>
          <div className={styles.content2textname5}>Srignan Paruchuru</div>
          <img
            className={styles.content2img5Icon}
            alt=""
            src="/content2img51@2x.png"
          />
          <div className={styles.content2role4}>Back-End Developer</div>
          <div className={styles.content2textname4}>Clayton Gordon</div>
          <img
            className={styles.content2img4Icon}
            alt=""
            src="/content2img51@2x.png"
          />
          <div className={styles.content2role3}>Back-End Developer</div>
          <div className={styles.content2textname3}>Tianci Liu</div>
          <img
            className={styles.content2img3Icon}
            alt=""
            src="/content2img51@2x.png"
          />
          <div className={styles.content2role2}>
            Website and Mobile Front-End Developer and Designer
          </div>
          <div className={styles.content2textname2}>Kevin Bopp</div>
          <img
            className={styles.content2img2Icon}
            alt=""
            src="/content2img51@2x.png"
          />
          <div className={styles.content2role1}>
            Project Manager, Front-End Mobile Developer
          </div>
          <div className={styles.content2textname1}>Logan Wilson</div>
          <img
            className={styles.content2img1Icon}
            alt=""
            src="/content2img51@2x.png"
          />
        </div>
        <div className={styles.content3}>
          <img
            className={styles.content3imgmernIcon}
            alt=""
            src="/content3imgmern1@2x.png"
          />
          <div className={styles.content3textdesc}>
            Our team implemented this website and accompanying mobile app using
            a MERN stack. We deployed our project through Heroku and purchased a
            domain from GoDaddy.
          </div>
          <b className={styles.content3texttitle}>Technology Used</b>
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
            onClick={openPopupSideSO1}
          >
            <img
              className={styles.menubuttonicon}
              alt=""
              src="/menubuttonicon5.svg"
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

export default AboutTablet;
