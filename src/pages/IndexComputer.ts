import { useState, useCallback } from "react";
import PopupLoginLarge from "../components/PopupLoginLarge";
import PortalPopup from "../components/PortalPopup";
import PopupSignUpLarge from "../components/PopupSignUpLarge";
import { useNavigate } from "react-router-dom";
import styles from "./IndexComputer.module.css";
const IndexComputer = () => {
  const [isPopupLoginLargeOpen, setPopupLoginLargeOpen] = useState(false);
  const [isPopupLoginLarge1Open, setPopupLoginLarge1Open] = useState(false);
  const [isPopupSignUpLargeOpen, setPopupSignUpLargeOpen] = useState(false);
  const navigate = useNavigate();

  const openPopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(true);
  }, []);

  const closePopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(false);
  }, []);

  const onContent2ButtonHowClick = useCallback(() => {
    navigate("/howtoplay");
  }, [navigate]);

  const onContent3ButtonMeetClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onFooterImgGitHubClick = useCallback(() => {
    window.open("https://github.com/Srignan/ChessGameApp");
  }, []);

  const onFooterButtonBackClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navComputerSO']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFooterImgDiscordClick = useCallback(() => {
    window.open("https://discord.gg/by5ThVTN");
  }, []);

  const openPopupLoginLarge1 = useCallback(() => {
    setPopupLoginLarge1Open(true);
  }, []);

  const closePopupLoginLarge1 = useCallback(() => {
    setPopupLoginLarge1Open(false);
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
    const anchor = document.querySelector("[data-scroll-to='navComputerSO']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className={styles.indexcomputer}>
        <div className={styles.herosection}>
          <div className={styles.chessboardbutton}>
            <img
              className={styles.imgchessboardIcon}
              alt=""
              src="/imgchessboard@2x.png"
            />
            <button
              className={`${styles.buttonplay} ${styles.grow}`}
              id="heroButtonLogin"
              onClick={openPopupLoginLarge}
            >
              <b className={styles.textplay}>Play Now!</b>
            </button>
          </div>
          <div className={styles.textcalltoaction}>Play. Strategize. Triumph!</div>
          <div className={styles.sitelogo}>
            <b className={styles.textlogoright}>Chess</b>
            <b className={styles.textlogoleft}>Tactic</b>
          </div>
          <img
            className={styles.imglogomainIcon}
            alt=""
            src="/imglogomain@2x.png"
          />
        </div>
        <div className={styles.content1}>
          <img
            className={styles.content1imgaiIcon}
            alt=""
            src="/content1imgai@2x.png"
          />
          <div className={styles.content1textai}>Play Against AI</div>
          <img
            className={styles.content1imgrankingIcon}
            alt=""
            src="/content1imgranking@2x.png"
          />
          <div className={styles.content1textranking}>Build Your Ranking</div>
          <img
            className={styles.content1imgfriendsIcon}
            alt=""
            src="/content1imgfriends@2x.png"
          />
          <div className={styles.content1textfriends}>
            Add and Challenge Friends
          </div>
        </div>
        <div className={styles.content2}>
          <img
            className={styles.content2imghowIcon}
            alt=""
            src="/content2imghow1@2x.png"
          />
          <button
            className={`${styles.content2buttonhow} ${styles.grow}`}
            onClick={onContent2ButtonHowClick}
          >
            <span className={styles.content2buttontext}>
              Learn How to Play
            </span>
          </button>
          <div className={styles.content2textwe}>We can help.</div>
          <b className={styles.content2textnew}>New to Chess?</b>
        </div>
        <div className={styles.content3}>
          <button
            className={`${styles.content3buttonmeet} ${styles.grow}`}
            onClick={onContent3ButtonMeetClick}
          >
            <b className={styles.content3buttontext}>Meet the Team</b>
          </button>
          <b className={styles.content3textwho}>Who Are We?</b>
          <img
            className={styles.content3imgfsblogoIcon}
            alt=""
            src="/content3imgfsblogo@2x.png"
          />
        </div>
        <div className={styles.content4}>
          <div className={styles.content4texttreview3}>
            “Why is my ELO negative?!”
          </div>
          <div className={styles.content4rating3}>
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-2.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-2.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-2.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-2.svg"
            />
          </div>
          <div className={styles.content4texttname3}>Loser Barista</div>
          <img
            className={styles.content4imgtest3Icon}
            alt=""
            src="/content4imgtest3@2x.png"
          />
          <div className={styles.content4texttreview2}>
            “It was either this or checkers.”
          </div>
          <div className={styles.content4rating2}>
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-2.svg"
            />
          </div>
          <div className={styles.content4texttname2}>Business Major</div>
          <img
            className={styles.content4imgtest2Icon}
            alt=""
            src="/content4imgtest3@2x.png"
          />
          <div className={styles.content4texttreview1}>
            “It’s definitely better than that other chess website.”
          </div>
          <div className={styles.content4rating1}>
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
            <img
              className={styles.content4rating3Child}
              alt=""
              src="/star-1.svg"
            />
          </div>
          <div className={styles.content4texttname1}>CS Major</div>
          <img
            className={styles.content4imgtest1Icon}
            alt=""
            src="/content4imgtest3@2x.png"
          />
          <b className={styles.content4texttesttitle}>Testimonials</b>
        </div>
        <div className={styles.footer}>
          <button
            className={`${styles.footerimggithub} ${styles.grow}`}
            onClick={onFooterImgGitHubClick}
          />
          <div className={styles.footertextcopyright}>
            © 2023 FullStack Bros. All rights reserved.
          </div>
          <button
            className={`${styles.footerbuttonback} ${styles.grow}`}
            onClick={onFooterButtonBackClick}
          >
            <b className={styles.footerbuttontext}>Back to Top</b>
          </button>
          <button
            className={`${styles.footerimgdiscord} ${styles.grow}`}
            onClick={onFooterImgDiscordClick}
          />
        </div>
        <nav className={styles.navcomputerso} data-scroll-to="navComputerSO">
          <div className={styles.navbarbackground} />
          <button
            className={`${styles.navbuttonplay} ${styles.grow}`}
            id="navButtonLogin"
            onClick={openPopupLoginLarge1}
          >
            <b className={styles.navplaytext}>Play Now!</b>
          </button>
          <button
            className={`${styles.navbuttonsign} ${styles.grow}`}
            id="navButtonSignUp"
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
            className={`${styles.navlogoIcon} ${styles.shrink}`}
            alt=""
            src="/navlogo2@2x.png"
            onClick={onNavLogoImageClick}
          />
        </nav>
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
      {isPopupLoginLarge1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLoginLarge1}
        >
          <PopupLoginLarge onClose={closePopupLoginLarge1} />
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

export default IndexComputer;
