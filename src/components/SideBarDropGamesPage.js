import { useState, useCallback, useEffect } from "react";
import PopupLeaveLarge from "./PopupLeaveLarge";
import PortalPopup from "./PortalPopup";
import styles from "./SideBarDropGamesPage.module.css";
const SideBarDropGamesPage = ({ onClose }) => {
  const [isPopupLeaveLargeOpen, setPopupLeaveLargeOpen] = useState(false);
  const [isPopupLeaveLarge1Open, setPopupLeaveLarge1Open] = useState(false);
  const [isPopupLeaveLarge2Open, setPopupLeaveLarge2Open] = useState(false);
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

  const openPopupLeaveLarge = useCallback(() => {
    setPopupLeaveLargeOpen(true);
  }, []);

  const closePopupLeaveLarge = useCallback(() => {
    setPopupLeaveLargeOpen(false);
  }, []);

  const openPopupLeaveLarge1 = useCallback(() => {
    setPopupLeaveLarge1Open(true);
  }, []);

  const closePopupLeaveLarge1 = useCallback(() => {
    setPopupLeaveLarge1Open(false);
  }, []);

  const openPopupLeaveLarge2 = useCallback(() => {
    setPopupLeaveLarge2Open(true);
  }, []);

  const closePopupLeaveLarge2 = useCallback(() => {
    setPopupLeaveLarge2Open(false);
  }, []);

  return (
    <>
      <div className={styles.sidebardropgamespage} data-animate-on-scroll>
        <div className={styles.closespacer} />
        <img
          className={styles.closebuttonicon}
          alt=""
          src="/closebuttonicon.svg"
          onClick={onClose}
        />
        <div className={styles.profile}>
          <b className={styles.dropprofile} onClick={openPopupLeaveLarge}>
            Profile
          </b>
        </div>
        <div className={styles.friends}>
          <b className={styles.dropfriends} onClick={openPopupLeaveLarge1}>
            Friends
          </b>
        </div>
        <div className={styles.logout}>
          <b className={styles.droplogout} onClick={openPopupLeaveLarge2}>
            Log Out
          </b>
        </div>
      </div>
      {isPopupLeaveLargeOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge} />
        </PortalPopup>
      )}
      {isPopupLeaveLarge1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge1}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge1} />
        </PortalPopup>
      )}
      {isPopupLeaveLarge2Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge2}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge2} />
        </PortalPopup>
      )}
    </>
  );
};

export default SideBarDropGamesPage;
