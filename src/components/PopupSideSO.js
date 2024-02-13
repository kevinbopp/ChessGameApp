import { useState, useCallback, useEffect } from "react";
import PopupSignUpMedium from "./PopupSignUpMedium";
import PortalPopup from "./PortalPopup";
import PopupLoginMedium from "./PopupLoginMedium";
import { useNavigate } from "react-router-dom";
import styles from "./PopupSideSO.module.css";
const PopupSideSO = ({ onClose }) => {
  const [isPopupSignUpMediumOpen, setPopupSignUpMediumOpen] = useState(false);
  const [isPopupLoginMediumOpen, setPopupLoginMediumOpen] = useState(false);
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

  const openPopupSignUpMedium = useCallback(() => {
    setPopupSignUpMediumOpen(true);
  }, []);

  const closePopupSignUpMedium = useCallback(() => {
    setPopupSignUpMediumOpen(false);
  }, []);

  const openPopupLoginMedium = useCallback(() => {
    setPopupLoginMediumOpen(true);
  }, []);

  const closePopupLoginMedium = useCallback(() => {
    setPopupLoginMediumOpen(false);
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
      <div className={styles.popupsidesotablet} data-animate-on-scroll>
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
            <b className={styles.dropsignup} onClick={openPopupSignUpMedium}>
              Sign Up
            </b>
          </div>
          <div className={styles.login}>
            <b className={styles.droplogin} onClick={openPopupLoginMedium}>
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
      {isPopupSignUpMediumOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupSignUpMedium}
        >
          <PopupSignUpMedium onClose={closePopupSignUpMedium} />
        </PortalPopup>
      )}
      {isPopupLoginMediumOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLoginMedium}
        >
          <PopupLoginMedium onClose={closePopupLoginMedium} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopupSideSO;
