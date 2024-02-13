import { useState, useCallback } from "react";
import PopupLoginSmall from "./PopupLoginSmall";
import PortalPopup from "./PortalPopup";
import PopupNoAPI from "./PopupNoAPI";
import styles from "./PopupForgotSmall.module.css";
const PopupForgotSmall = ({ onClose }) => {
  const [isPopupLoginSmallOpen, setPopupLoginSmallOpen] = useState(false);
  const [isPopupNoAPIOpen, setPopupNoAPIOpen] = useState(false);

  const openPopupLoginSmall = useCallback(() => {
    setPopupLoginSmallOpen(true);
  }, []);

  const closePopupLoginSmall = useCallback(() => {
    setPopupLoginSmallOpen(false);
  }, []);

  const openPopupNoAPI = useCallback(() => {
    setPopupNoAPIOpen(true);
  }, []);

  const closePopupNoAPI = useCallback(() => {
    setPopupNoAPIOpen(false);
  }, []);

  return (
    <>
      <div className={styles.popupforgotsmall}>
        <div className={styles.popupheader}>
          <div className={styles.popuptextnoworries}>No worries!</div>
          <b className={styles.popuptexttitleforgot}>Forgot Password?</b>
        </div>
        <button
          className={styles.popupimgclosebutton}
          id="closeButton"
          onClick={onClose}
        />
        <div className={styles.popupinformation}>
          <div className={styles.popuptexterrors}>
            <span className={styles.popuptexterrorsTxt}>
              <span>{`Errors and `}</span>
              <span className={styles.alerts}>alerts</span>
              <span> appear here.</span>
            </span>
          </div>
          <div className={styles.popuptextinstructions}>
            Enter your email below and we’ll send you a link to reset it.
          </div>
        </div>
        <div className={styles.popupforms}>
          <input
            className={styles.popupinputformemailforgot}
            type="email"
            placeholder="example@email.com"
            minLength={3}
            required
            id="inputEmail"
          />
          <b className={styles.popuptextlabelemailforgot}>Enter your email:</b>
        </div>
        <div className={styles.popupforgotbuttons}>
          <button
            className={styles.popupbuttonforgotback}
            id="buttonGoBack"
            onClick={openPopupLoginSmall}
          >
            <b className={styles.popupbuttongobacktext}>Go Back</b>
          </button>
          <button
            className={styles.popupbuttonforgotsend}
            id="buttonSendEmail"
            onClick={openPopupNoAPI}
          >
            <b className={styles.popupbuttonsendemailtext}>Send Email</b>
          </button>
        </div>
      </div>
      {isPopupLoginSmallOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closePopupLoginSmall}>
          <PopupLoginSmall onClose={closePopupLoginSmall} />
        </PortalPopup>
      )}
      {isPopupNoAPIOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closePopupNoAPI}>
          <PopupNoAPI onClose={closePopupNoAPI} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopupForgotSmall;
