import { useState, useCallback } from "react";
import PopupLoginLarge from "../components/PopupLoginLarge";
import PortalPopup from "../components/PortalPopup";
import PopupSignUpLarge from "../components/PopupSignUpLarge";
import { useNavigate } from "react-router-dom";
import styles from "./AboutComputer.module.css";
const AboutComputer = () => {
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
    navigate("/howtoplay");
  }, [navigate]);

  const onNavAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='headerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.aboutcomputer}>
        <div className={styles.header} data-scroll-to="headerContainer">
          <div className={styles.headertextmeet}>Meet the Team</div>
          <b className={styles.headertexttitle}>About Us</b>
        </div>
        <div className={styles.content1}>
          <div className={styles.content1textgrouptitle}>
            Group 17’s Large Project for the University of Central Florida’s
            software development course, Processes of Object-Oriented Software
            Development.
          </div>
          <b className={styles.content1textgrouptitle1}>The FullStack Bros.</b>
          <img
            className={styles.content1imgfsblogoIcon}
            alt=""
            src="/content1imgfsblogo@2x.png"
          />
        </div>
        <div className={styles.content2}>
          <div className={styles.content2role5}>Database Administrator</div>
          <div className={styles.content2textname5}>Srignan Paruchuru</div>
          <img
            className={styles.content2img5Icon}
            alt=""
            src="/content2img5@2x.png"
          />
          <div className={styles.content2role4}>Back-End Developer</div>
          <div className={styles.content2textname4}>Clayton Gordon</div>
          <img
            className={styles.content2img4Icon}
            alt=""
            src="/content2img5@2x.png"
          />
          <div className={styles.content2role3}>Back-End Developer</div>
          <div className={styles.content2textname3}>Tianci Liu</div>
          <img
            className={styles.content2img3Icon}
            alt=""
            src="/content2img5@2x.png"
          />
          <div className={styles.content2role2}>
            Website and Mobile Front-End Developer and Designer
          </div>
          <div className={styles.content2textname2}>Kevin Bopp</div>
          <img
            className={styles.content2img2Icon}
            alt=""
            src="/content2img5@2x.png"
          />
          <div className={styles.content2role1}>
            Project Manager, Chess Engine
          </div>
          <div className={styles.content2textname1}>Logan Wilson</div>
          <img
            className={styles.content2img1Icon}
            alt=""
            src="/content2img5@2x.png"
          />
        </div>
        <div className={styles.content3}>
          <img
            className={styles.content3imgmernIcon}
            alt=""
            src="/content3imgmern@2x.png"
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

export default AboutComputer;
