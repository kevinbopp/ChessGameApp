import { useState, useCallback } from "react";
import PopupLoginMedium from "./PopupLoginMedium";
import PortalPopup from "./PortalPopup";
import PopupNoAPI from "./PopupNoAPI";
import styles from "./PopupForgotMedium.module.css";
const PopupForgotMedium = ({ onClose }) => {
  const [isPopupLoginMediumOpen, setPopupLoginMediumOpen] = useState(false);
  const [isPopupNoAPIOpen, setPopupNoAPIOpen] = useState(false);

  const openPopupLoginMedium = useCallback(() => {
    setPopupLoginMediumOpen(true);
  }, []);

  const closePopupLoginMedium = useCallback(() => {
    setPopupLoginMediumOpen(false);
  }, []);

  const openPopupNoAPI = useCallback(() => {
    setPopupNoAPIOpen(true);
  }, []);

  const closePopupNoAPI = useCallback(() => {
    setPopupNoAPIOpen(false);
  }, []);

  return (
    <>
      <div className={styles.popupforgotmedium}>
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
            onClick={openPopupLoginMedium}
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
      {isPopupLoginMediumOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopupLoginMedium}
        >
          <PopupLoginMedium onClose={closePopupLoginMedium} />
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

export default PopupForgotMedium;
