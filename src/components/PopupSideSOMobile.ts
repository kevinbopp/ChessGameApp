import { useState, useCallback, useEffect } from "react";
import PopupSignUpSmall from "./PopupSignUpSmall";
import PortalPopup from "./PortalPopup";
import PopupLoginSmall from "./PopupLoginSmall";
import { useNavigate } from "react-router-dom";
import styles from "./PopupSideSOMobile.module.css";
const PopupSideSOMobile = ({ onClose }) => {
  const [isPopupSignUpSmallOpen, setPopupSignUpSmallOpen] = useState(false);
  const [isPopupLoginSmallOpen, setPopupLoginSmallOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const openPopupSignUpSmall = useCallback(() => {
    setPopupSignUpSmallOpen(true);
  }, []);

  const closePopupSignUpSmall = useCallback(() => {
    setPopupSignUpSmallOpen(false);
  }, []);

  const openPopupLoginSmall = useCallback(() => {
    setPopupLoginSmallOpen(true);
  }, []);

  const closePopupLoginSmall = useCallback(() => {
    setPopupLoginSmallOpen(false);
  }, []);

  const onDropAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onDrophowToPlayTextClick = useCallback(() => {
    navigate("/howtoplay");
  }, [navigate]);

  const onDropContactUsTextClick = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  return (
    <>
      <div className={styles.popupsidesomobile} data-animate-on-scroll>
        <div className={styles.closespacer} />
        <img
          className={styles.closebuttonicon}
          alt=""
          src="/closebuttonicon.svg"
          onClick={onClose}
        />
        <div className={styles.welcome}>
          <b className={styles.welcomeheader}>Welcome!</b>
        </div>
        <div className={styles.sobuttons}>
          <div className={styles.signup}>
            <b className={styles.dropsignup} onClick={openPopupSignUpSmall}>
              Sign Up
            </b>
          </div>
          <div className={styles.login}>
            <b className={styles.droplogin} onClick={openPopupLoginSmall}>
              Login
            </b>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.about}>
          <b className={styles.dropabout} onClick={onDropAboutTextClick}>
            About
          </b>
        </div>
        <div className={styles.howtoplay}>
          <b
            className={styles.drophowtoplay}
            onClick={onDrophowToPlayTextClick}
          >
            How to Play
          </b>
        </div>
        <div className={styles.contactus}>
          <b
            className={styles.dropcontactus}
            onClick={onDropContactUsTextClick}
          >
            Contact Us
          </b>
        </div>
      </div>
      {isPopupSignUpSmallOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupSignUpSmall}
        >
          <PopupSignUpSmall onClose={closePopupSignUpSmall} />
        </PortalPopup>
      )}
      {isPopupLoginSmallOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLoginSmall}
        >
          <PopupLoginSmall onClose={closePopupLoginSmall} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopupSideSOMobile;
