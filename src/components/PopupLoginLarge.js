import { useState, useCallback, useRef, useEffect } from "react"; // * added useRef
import PopupSignUpLarge from "./PopupSignUpLarge";
import PortalPopup from "./PortalPopup";
import PopupForgotLarge from "./PopupForgotLarge";
import { useNavigate } from "react-router-dom";
import styles from "./PopupLoginLarge.module.css";

const PopupLoginLarge = ({ onClose }) => {
  const [isPopupSignUpLargeOpen, setPopupSignUpLargeOpen] = useState(false);
  const [isPopupForgotLargeOpen, setPopupForgotLargeOpen] = useState(false);
  const navigate = useNavigate();

  // Create refs for the username/email and password fields
  const inputUserEmailRef = useRef(null); // *
  const inputPassRef = useRef(null); // *

  const openPopupSignUpLarge = useCallback(() => {
    setPopupSignUpLargeOpen(true);
  }, []);

  const closePopupSignUpLarge = useCallback(() => {
    setPopupSignUpLargeOpen(false);
  }, []);

  const onPopupImgHidePasswordClick = useCallback(() => {
    window.open("Call togglePassword(); here.");
  }, []);

  const onPopupButtonLoginClick = useCallback(() => { // *
    login();
  }, []); // *

// Function to save the username and rating in a cookie
function saveCookie(username, rating) {
  // Create an object to store the data you want to save in the cookie
  const cookieData = {
    username,
    rating,
  };

  // Convert the object to a JSON string
  const cookieValue = JSON.stringify(cookieData);

  // Set the cookie with an expiration time (e.g., 1 day)
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);
  const cookieOptions = `expires=${expirationDate.toUTCString()}`;

  // Save the cookie
  document.cookie = `userData=${cookieValue}; ${cookieOptions}`;
}

// Function to read the username and rating from the cookie
function readCookie() {
  // Get the cookie string
  const cookieString = document.cookie;

  // Extract the value of the 'userData' cookie
  const cookieName = 'userData=';
  const cookieStartIndex = cookieString.indexOf(cookieName);
  if (cookieStartIndex === -1) {
    return null; // Cookie not found
  }

  let cookieValue = '';
  const cookieEndIndex = cookieString.indexOf(';', cookieStartIndex);
  if (cookieEndIndex === -1) {
    cookieValue = cookieString.substring(cookieStartIndex + cookieName.length);
  } else {
    cookieValue = cookieString.substring(cookieStartIndex + cookieName.length, cookieEndIndex);
  }

  // Parse the JSON string to get the cookie data object
  try {
    const cookieData = JSON.parse(cookieValue);
    return cookieData;
  } catch (error) {
    console.error('Error parsing cookie:', error);
    return null;
  }
}

  // Ref for the error messages.
  const errorsRef = useRef("");

  const login = useCallback(() => { // *
    console.log("Attempting to log in.");
    
    
    const email = inputUserEmailRef.current.value;
    const password = inputPassRef.current.value;

    console.log("Email: " + email);
    console.log("Password is: " + password);

    // Reset the errors before the fetch calls
    errorsRef.current.textContent = "";

    // Perform login validation here.
    if ((email == "") || (password == ""))
    {
      errorsRef.current.textContent = "Fields cannot be left blank.";
      return;
    }

    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          errorsRef.current.textContent = "Invalid username or password.";
          throw new Error('Server error logging in; please try again later.');
        }
      })
      .then((data) => {
        if (data.message) {
          console.log('User logged in successfully!');
          // Save cookie
          const { username, rating } = data.user;
          saveCookie(username, rating);
          navigate("/landing");
        } else {
          throw new Error('Login failed.');
          errorsRef.current.textContent = "Invalid username or password.";
        }
      })
      .catch((error) => {
        errorsRef.current.textContent = "Invalid username or password.";
        throw new Error('There was a server error; please try again later.');
      });
  }, [navigate]); // *

  useEffect(() => {
    // Clear errors on first load.
    errorsRef.current.textContent = "";

    // Function to read the cookie as soon as the page loads
    const cookieData = readCookie();
    if (cookieData) {
      // Extract username and rating from the cookie data
      const { username, rating } = cookieData;
      console.log("Cookie read successful. Username is " + username + " and rating is " + rating + ".");
      // Now you have the username and rating in separate variables,
      // you can use them as needed in your component or application logic.
    } else {
      // Cookie not found or error reading it
      console.log("Cookie read unsuccessful.");
      // Handle as appropriate for your application
    }
  }, []);

  const openPopupForgotLarge = useCallback(() => {
    setPopupForgotLargeOpen(true);
  }, []);

  const closePopupForgotLarge = useCallback(() => {
    setPopupForgotLargeOpen(false);
  }, []);

  return (
    <>
      <div className={styles.popuploginlarge}>
        <div className={styles.popupswap}>
          <div className={styles.popupswapbackground} />
          <div className={styles.popupswapbuttonlogin}>
            <b className={styles.swapbuttonlogintext}>Login</b>
          </div>
          <button
            className={`${styles.popupswapbuttonsignup} ${styles.grow}`}
            id="swapButtonSignUp"
            onClick={openPopupSignUpLarge}
          >
            <b className={styles.swapbuttonregistertext}>Sign Up</b>
          </button>
        </div>
        <button
          className={`${styles.popupimgclosebutton} ${styles.shrink}`}
          id="closeButton"
          onClick={onClose}
        />
        <div className={styles.popupheader}>
          <div className={styles.popuptexterrors}>
            <span className={styles.popuptexterrorsTxt}>
              <span ref={errorsRef} className={styles.popuptexterrorsTxt}>
                Errors and alerts appear here.
              </span>
            </span>
          </div>
          <b className={styles.popuptexttitlelogin}>Login</b>
        </div>
        <div className={styles.popupforms}>
          <input
            className={styles.popupinputformpassword}
            type="password"
            placeholder="Password"
            minLength={8}
            required
            id="inputPass"
            ref={inputPassRef} // *
          />
          <button
            className={`${styles.popupimghidepassword} ${styles.shrink}`}
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
            ref={inputUserEmailRef} // *
          />
          <b className={styles.popuptextlabelusername}>
            Enter your username or email:
          </b>
        </div>
        <button
          className={`${styles.popupbuttonlogin} ${styles.grow}`}
          id="buttonLogin"
          onClick={onPopupButtonLoginClick}
        >
          <b className={styles.popupbuttonlogintext}>Login</b>
        </button>
        <b
          className={styles.popupanchorforgotpassword}
          onClick={openPopupForgotLarge}
        >
          <span>{`Forgot your password? Click `}</span>
          <span className={styles.here}>here</span>
          <span>.</span>
        </b>
      </div>
      {isPopupSignUpLargeOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopupSignUpLarge}
        >
          <PopupSignUpLarge onClose={closePopupSignUpLarge} />
        </PortalPopup>
      )}
      {isPopupForgotLargeOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closePopupForgotLarge}
        >
          <PopupForgotLarge onClose={closePopupForgotLarge} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopupLoginLarge;
