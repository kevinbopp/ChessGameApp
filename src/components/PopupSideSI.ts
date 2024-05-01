import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PopupSideSI.module.css";
const PopupSideSI = ({ onClose }) => {
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

  const onDropLogOutTextClick = useCallback(() => {
    logout();
    navigate("/");
  }, [navigate]);

  const onDropProfileTextClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onDropAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onDrophowToPlayTextClick = useCallback(() => {
    navigate("/howtoplay");
  }, [navigate]);

  const onDropContactUsTextClick = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onDropFriendsTextClick = useCallback(() => {
    navigate("/friendsearch");
  }, [navigate]);

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

// Ref for the welcome messages.
  const popRef = useRef("");

// Function to clear the cookie and navigate to the homepage
function logout() {
  // Clear the cookie by setting an expired date in the past
  const cookieOptions = `expires=${new Date(0).toUTCString()}`;
  document.cookie = `userData=; ${cookieOptions}`;
}

useEffect(() => {

    // Function to read the cookie as soon as the page loads
    const cookieData = readCookie();
    if (cookieData) {
      // Extract username and rating from the cookie data
      const { username, rating } = cookieData;
      console.log("Cookie read successful. Username is " + username + " and rating is " + rating + ".");
      // Now you have the username and rating in separate variables,
      // you can use them as needed in your component or application logic.

      // Update welcome message
      popRef.current.textContent = "Welcome, " + username + "!";
    } else {
      // Cookie not found or error reading it
      console.log("Cookie read unsuccessful.");
      // Handle as appropriate for your application
    }
  }, []);

  return (
    <div className={styles.popupsidesi} data-animate-on-scroll>
      <div className={styles.closespacer} />
      <img
        className={styles.closebuttonicon}
        alt=""
        src="/closebuttonicon.svg"
        onClick={onClose}
      />
      <div className={styles.welcome}>
        <b ref={popRef} className={styles.welcomeheader}>Welcome, Username!</b>
        <b className={styles.welcomeusername}>Username!</b>
      </div>
      <div className={styles.sibuttons}>
        <div className={styles.logout}>
          <b className={styles.droplogout} onClick={onDropLogOutTextClick}>
            Log Out
          </b>
        </div>
        <div className={styles.profile}>
          <b className={styles.dropprofile} onClick={onDropProfileTextClick}>
            Profile
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
        <b className={styles.drophowtoplay} onClick={onDrophowToPlayTextClick}>
          How to Play
        </b>
      </div>
      <div className={styles.contactus}>
        <b className={styles.dropcontactus} onClick={onDropContactUsTextClick}>
          Contact Us
        </b>
      </div>
      <div className={styles.friends}>
        <b className={styles.dropfriends} onClick={onDropFriendsTextClick}>
          Friends
        </b>
      </div>
    </div>
  );
};

export default PopupSideSI;
