import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SideBarDrop.module.css";
const SideBarDrop = ({ onClose }) => {
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

  const onDropProfileTextClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onDropFriendsTextClick = useCallback(() => {
    navigate("/friendsearch");
  }, [navigate]);

  const onDropLogOutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.sidebardrop} data-animate-on-scroll>
      <div className={styles.closespacer} />
      <img
        className={styles.closebuttonicon}
        alt=""
        src="/closebuttonicon.svg"
        onClick={onClose}
      />
      <div className={styles.profile}>
        <b className={styles.dropprofile} onClick={onDropProfileTextClick}>
          Profile
        </b>
      </div>
      <div className={styles.friends}>
        <b className={styles.dropfriends} onClick={onDropFriendsTextClick}>
          Friends
        </b>
      </div>
      <div className={styles.logout}>
        <b className={styles.droplogout} onClick={onDropLogOutTextClick}>
          Log Out
        </b>
      </div>
    </div>
  );
};

export default SideBarDrop;
