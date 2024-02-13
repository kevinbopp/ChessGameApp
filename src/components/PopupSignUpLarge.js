import { useState, useCallback, useRef, useEffect } from "react";
import PopupLoginLarge from "./PopupLoginLarge";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom"; // *
import styles from "./PopupSignUpLarge.module.css";

const PopupSignUpLarge = ({ onClose }) => {
  const [isPopupLoginLargeOpen, setPopupLoginLargeOpen] = useState(false);
  const navigate = useNavigate(); // *

  const openPopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(true);
  }, []);

  const closePopupLoginLarge = useCallback(() => {
    setPopupLoginLargeOpen(false);
  }, []);

  const onPopupImgHideConfirmPasswordClick = useCallback(() => {
    window.open("Call toggleConfirmPassword(); here.");
  }, []);

  const onPopupImgHidePasswordClick = useCallback(() => {
    window.open("Call togglePassword(); here.");
  }, []);

  const onPopupButtonSignUpClick = useCallback(() => {
    signUp();
  }, []);

  // Create a ref for each input element
  const inputUserRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPassRef = useRef(null);
  const inputPassConfirmRef = useRef(null);

  // Ref for the error messages.
  const errorsRef = useRef("");

  const signUp = useCallback(() => {
    console.log("Signing up.")
    const username = inputUserRef.current.value;
    const email = inputEmailRef.current.value;
    const password = inputPassRef.current.value;
    const confirmPassword = inputPassConfirmRef.current.value;
    console.log("Username is " + username);
    console.log("Email is " + email);
    console.log("Password is " + password);
    console.log("confirmPassword is " + confirmPassword);

    // Perform all validation/error messages.
    if ((username == "") || (email == "") || (password == "") || (confirmPassword == ""))
    {
      errorsRef.current.textContent = "Fields cannot be left blank.";
      return;
    }

    // Username validation
    if (username.length < 3 || username.length > 18) {
      errorsRef.current.textContent = "Username must be between 3 and 18 characters.";
      return;
    }

    if (/[^a-zA-Z0-9]/.test(username))
    {
      errorsRef.current.textContent = "Username can't contain special symbols.";
      return;
    }
    
    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorsRef.current.textContent = "Please enter a valid email address.";
      return;
    }
    
    // Password validation
    if (password.length < 8) {
      errorsRef.current.textContent = "Password must be at least 8 characters long.";
      return;
    }
    
    if (!/[A-Z]/.test(password)) {
      errorsRef.current.textContent = "Password must contain at least one uppercase letter.";
      return;
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errorsRef.current.textContent = "Password must contain at least one special symbol.";
      return;
    }
    
    if (!/[0-9]/.test(password)) {
      errorsRef.current.textContent = "Password must contain at least one number.";
      return;
    }
    
    // Confirm password
    if (password !== confirmPassword) {
      errorsRef.current.textContent = "Passwords do not match.";
      return;
    }
    
    // validateLogin(username, email, password, confirmPassword);

    // Reset the errors before the fetch calls
    errorsRef.current.textContent = "";

    fetch('/api/auth/register', { // *
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }), // *
    })
      .then((response) => response.json()) // *
      .then((data) => { // *
        if (data.message) {
          console.log('User registered successfully!');
          errorsRef.current.textContent = "Account created; check your email!";
        } else {
          throw new Error('Registration failed.');
        }
      })
      .catch((error) => { // *
        console.error('Error:', error);
        errorsRef.current.textContent = "An error occurred while registering.";
      });

    // Registration complete, now send an email to verify.

    // First, send the user an email so they can verify their account.
    fetch('/sendVerifyEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }), // *
    })
      .then((response) => {
        if (response.ok) {
          console.log('Email sent successfully!');
          errorsRef.current.textContent = "Account created; check your email!";
        } else {
          throw new Error('Email sending failed.');
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        errorsRef.current.textContent = "An error occurred while sending the email.";
      });

  // Email sent! The user can now go to the login page to login (after verifying, of course).

  }, []); // *

  useEffect(() => {
    console.log('Page fully loaded!');
    errorsRef.current.textContent = "";
  }, []);

  return (
    <>
      <div className={styles.popupsignuplarge}>
        <div className={styles.popupswap}>
          <div className={styles.popupswapbackground} />
          <div className={styles.popupswapbuttonsignup}>
            <b className={styles.swapbuttonsignuptext}>Sign Up</b>
          </div>
          <button
            className={`${styles.popupswapbuttonlogin} ${styles.grow}`}
            id="swapButtonLogin"
            onClick={openPopupLoginLarge}
          >
            <b className={styles.swapbuttonlogintext}>Login</b>
          </button>
        </div>
        <button
          className={`${styles.popupimgclosebutton} ${styles.shrink}`}
          id="closeButton"
          onClick={onClose}
        />
        <div className={styles.popupheader}>
          <div className={styles.popuptexterrors}>
            <span ref={errorsRef} className={styles.popuptexterrorsTxt}>
              Errors and alerts appear here.
            </span>
          </div>
          <b className={styles.popuptexttitlesignup}>Sign Up</b>
        </div>
        <div className={styles.popupforms}>
          <input
            ref={inputPassConfirmRef}
            className={styles.popupinputformconfirmpassword}
            type="password"
            placeholder="Confirm Password"
            minLength={8}
            required
            id="inputPassConfirm"
          />
          <button
            className={`${styles.popupimghideconfirmpassword} ${styles.shrink}`}
            id="viewPassButton"
            onClick={onPopupImgHideConfirmPasswordClick}
          />
          <b className={styles.popuptextlabelconfirmpassword}>
            Confirm your password:
          </b>
          <input
            ref={inputPassRef}
            className={styles.popupinputformpassword}
            type="password"
            placeholder="New Password"
            minLength={8}
            required
            id="inputPass"
          />
          <button
            className={`${styles.popupimghidepassword} ${styles.shrink}`}
            id="viewPassButton"
            onClick={onPopupImgHidePasswordClick}
          />
          <b className={styles.popuptextlabelpassword}>Enter a new password:</b>
          <input
            ref={inputEmailRef}
            className={styles.popupinputformemail}
            type="email"
            placeholder="example@email.com"
            minLength={3}
            required
            id="inputEmail"
          />
          <b className={styles.popuptextlabelemail}>Enter your email:</b>
          <input
            ref={inputUserRef}
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
        </div>
        <button
          className={`${styles.popupbuttonsignup} ${styles.grow}`}
          id="buttonSignUp"
          onClick={onPopupButtonSignUpClick}
        >
          <b className={styles.popupbuttonsignuptext}>Sign Up</b>
        </button>
      </div>
      {isPopupLoginLargeOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closePopupLoginLarge}>
          <PopupLoginLarge onClose={closePopupLoginLarge} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopupSignUpLarge;
