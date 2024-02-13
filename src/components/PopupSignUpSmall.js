import { useState, useCallback } from "react";
import PopupLoginSmall from "./PopupLoginSmall";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./PopupSignUpSmall.module.css";
const PopupSignUpSmall = ({ onClose }) => {
  const [isPopupLoginSmallOpen, setPopupLoginSmallOpen] = useState(false);
  const navigate = useNavigate();

  const openPopupLoginSmall = useCallback(() => {
    setPopupLoginSmallOpen(true);
  }, []);

  const closePopupLoginSmall = useCallback(() => {
    setPopupLoginSmallOpen(false);
  }, []);

  const onPopupImgHideConfirmPasswordClick = useCallback(() => {
    window.open("Call toggleConfirmPassword(); here.");
  }, []);

  const onPopupImgHidePasswordClick = useCallback(() => {
    window.open("Call togglePassword(); here.");
  }, []);

  const onPopupButtonSignUpClick = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

  return (
    <>
      <div className={styles.popupsignupsmall}>
        <div className={styles.popupswap}>
          <div className={styles.popupswapbackground} />
          <button
            className={styles.popupswapbuttonlogin}
            id="swapButtonLogin"
            onClick={openPopupLoginSmall}
          >
            <b className={styles.buttoncanceltext}>Login</b>
          </button>
          <div className={styles.popupswapbuttonsignup}>
            <b className={styles.buttonsubmittext}>Sign Up</b>
          </div>
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
          <b className={styles.popuptexttitlesignup}>Sign Up</b>
        </div>
        <div className={styles.popupforms}>
          <input
            className={styles.popupinputformconfirmpassword}
            type="password"
            placeholder="Confirm Password"
            minLength={8}
            required
            id="inputPass"
          />
          <button
            className={styles.popupimghideconfirmpassword}
            id="viewPassButton"
            onClick={onPopupImgHideConfirmPasswordClick}
          />
          <b className={styles.popuptextlabelconfirmpassword}>
            Confirm your password:
          </b>
          <input
            className={styles.popupinputformpassword}
            type="password"
            placeholder="New Password"
            minLength={8}
            required
            id="inputPass"
          />
          <button
            className={styles.popupimghidepassword}
            id="viewPassButton"
            onClick={onPopupImgHidePasswordClick}
          />
          <b className={styles.popuptextlabelpassword}>Enter a new password:</b>
          <input
            className={styles.popupinputformemail}
            type="email"
            placeholder="example@email.com"
            minLength={3}
            required
            id="inputEmail"
          />
          <b className={styles.popuptextlabelemail}>Enter your email:</b>
          <input
            className={styles.popupinputformnewusername}
            type="text"
            placeholder="New Username"
            minLength={3}
            required
            id="inputUser"
          />
          <b className={styles.popuptextlabelnewusername}>
            Enter a new username:
          </b>
          <button
            className={styles.popupbuttonsignup}
            id="buttonSignUp"
            onClick={onPopupButtonSignUpClick}
          >
            <b className={styles.popupbuttonsignuptext}>Sign Up</b>
          </button>
        </div>
      </div>
      {isPopupLoginSmallOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closePopupLoginSmall}>
          <PopupLoginSmall onClose={closePopupLoginSmall} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopupSignUpSmall;
