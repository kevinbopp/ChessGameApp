import { useState, useCallback } from "react";
import PopupSignUpSmall from "./PopupSignUpSmall";
import PortalPopup from "./PortalPopup";
import PopupForgotSmall from "./PopupForgotSmall";
import { useNavigate } from "react-router-dom";
import styles from "./PopupLoginSmall.module.css";
const PopupLoginSmall = ({ onClose }) => {
  const [isPopupSignUpSmallOpen, setPopupSignUpSmallOpen] = useState(false);
  const [isPopupForgotSmallOpen, setPopupForgotSmallOpen] = useState(false);
  const navigate = useNavigate();

  const openPopupSignUpSmall = useCallback(() => {
    setPopupSignUpSmallOpen(true);
  }, []);

  const closePopupSignUpSmall = useCallback(() => {
    setPopupSignUpSmallOpen(false);
  }, []);

  const onPopupImgHidePasswordClick = useCallback(() => {
    window.open("Call togglePassword(); here.");
  }, []);

  const onPopupButtonLoginClick = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

  const openPopupForgotSmall = useCallback(() => {
    setPopupForgotSmallOpen(true);
  }, []);

  const closePopupForgotSmall = useCallback(() => {
    setPopupForgotSmallOpen(false);
  }, []);

  return (
    <>
      <div className={styles.popuploginsmall}>
        <div className={styles.popupswap}>
          <div className={styles.popupswapbackground} />
          <div className={styles.popupswapbuttonlogin}>
            <b className={styles.swapbuttonlogintext}>Login</b>
          </div>
          <button
            className={styles.popupswapbuttonsignup}
            id="swapButtonSignUp"
            onClick={openPopupSignUpSmall}
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
          onClick={openPopupForgotSmall}
        >
          <span className={styles.popuptexterrorsTxt}>
            <span>{`Forgot your password? Click `}</span>
            <span className={styles.here}>here</span>
            <span>.</span>
          </span>
        </b>
      </div>
      {isPopupSignUpSmallOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopupSignUpSmall}
        >
          <PopupSignUpSmall onClose={closePopupSignUpSmall} />
        </PortalPopup>
      )}
      {isPopupForgotSmallOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopupForgotSmall}
        >
          <PopupForgotSmall onClose={closePopupForgotSmall} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopupLoginSmall;
