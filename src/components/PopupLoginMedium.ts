import { useState, useCallback } from "react";
import PopupSignUpMedium from "./PopupSignUpMedium";
import PortalPopup from "./PortalPopup";
import PopupForgotMedium from "./PopupForgotMedium";
import { useNavigate } from "react-router-dom";
import styles from "./PopupLoginMedium.module.css";
const PopupLoginMedium = ({ onClose }) => {
  const [isPopupSignUpMediumOpen, setPopupSignUpMediumOpen] = useState(false);
  const [isPopupForgotMediumOpen, setPopupForgotMediumOpen] = useState(false);
  const navigate = useNavigate();

  const openPopupSignUpMedium = useCallback(() => {
    setPopupSignUpMediumOpen(true);
  }, []);

  const closePopupSignUpMedium = useCallback(() => {
    setPopupSignUpMediumOpen(false);
  }, []);

  const onPopupImgHidePasswordClick = useCallback(() => {
    window.open("Call togglePassword(); here.");
  }, []);

  const onPopupButtonLoginClick = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

  const openPopupForgotMedium = useCallback(() => {
    setPopupForgotMediumOpen(true);
  }, []);

  const closePopupForgotMedium = useCallback(() => {
    setPopupForgotMediumOpen(false);
  }, []);

  return (
    <>
      <div className={styles.popuploginmedium}>
        <div className={styles.popupswap}>
          <div className={styles.popupswapbackground} />
          <div className={styles.popupswapbuttonlogin}>
            <b className={styles.swapbuttonlogintext}>Login</b>
          </div>
          <button
            className={styles.popupswapbuttonsignup}
            id="swapButtonSignUp"
            onClick={openPopupSignUpMedium}
          >
            <b className={styles.swapbuttonregistertext}>Sign Up</b>
          </button>
        </div>
        <button
          className={styles.popupimgclosebutton}
          id="closeButton"
          onClick={onClose}
        />
        <div className={styles.popupheader}>
          <div className={styles.popuptexterrors}>
            <span className={styles.popuptexterrorsTxt}>
              <span>{`Errors and `}</span>
              <span className={styles.alerts}>alerts</span>
              <span> appear here.</span>
            </span>
          </div>
          <b className={styles.popuptexttitlelogin}>Login</b>
          <b className={styles.popuptextlabelusername}>
            Enter your username or email:
          </b>
        </div>
        <div className={styles.popupforms}>
          <input
            className={styles.popupinputformpassword}
            type="password"
            placeholder="Password"
            minLength={8}
            required
            id="inputPass"
          />
          <button
            className={styles.popupimghidepassword}
            id="viewPassButton"
            onClick={onPopupImgHidePasswordClick}
          />
          <b className={styles.popuptextlabelpassword}>Enter your password:</b>
          <input
            className={styles.popupinputformusername}
            type="text"
            placeholder="Username or Email"
            minLength={3}
            required
            id="inputUserEmail"
          />
        </div>
        <button
          className={styles.popupbuttonlogin}
          id="buttonLogin"
          onClick={onPopupButtonLoginClick}
        >
          <b className={styles.popupbuttonlogintext}>Login</b>
        </button>
        <b
          className={styles.popupanchorforgotpassword}
          onClick={openPopupForgotMedium}
        >
          <span className={styles.popuptexterrorsTxt}>
            <span>{`Forgot your password? Click `}</span>
            <span className={styles.here}>here</span>
            <span>.</span>
          </span>
        </b>
      </div>
      {isPopupSignUpMediumOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopupSignUpMedium}
        >
          <PopupSignUpMedium onClose={closePopupSignUpMedium} />
        </PortalPopup>
      )}
      {isPopupForgotMediumOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopupForgotMedium}
        >
          <PopupForgotMedium onClose={closePopupForgotMedium} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopupLoginMedium;
