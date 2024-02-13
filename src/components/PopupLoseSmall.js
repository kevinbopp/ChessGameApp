import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PopupLoseSmall.module.css";
const PopupLoseSmall = ({ onClose }) => {
  const navigate = useNavigate();

  const onPopupButtonBackHomeClick = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

  const onPopupButtonAddFriendClick = useCallback(() => {
    window.open("Call addFriend(); here.");
  }, []);

  return (
    <div className={styles.popuplosesmall}>
      <div className={styles.popupheader}>
        <b className={styles.popuptextwinlose}>You Lose</b>
      </div>
      <button
        className={styles.popupimgclosebutton}
        id="closeButton"
        onClick={onClose}
      />
      <div className={styles.popupusernames}>
        <img
          className={styles.popupimgavatarrightIcon}
          alt=""
          src="/popupimgavatarleft2@2x.png"
        />
        <b className={styles.popuptextwon}>0 - 1</b>
        <img
          className={styles.popupimgavatarleftIcon}
          alt=""
          src="/popupimgavatarleft4@2x.png"
        />
      </div>
      <div className={styles.popupcontent}>
        <button
          className={styles.popupbuttonplayagain}
          id="buttonPlayAgain"
          onClick={onClose}
        >
          <b className={styles.popupbuttonplayagaintext}>Play Again</b>
        </button>
        <button
          className={styles.popupbuttonbackhome}
          id="buttonBackHome"
          onClick={onPopupButtonBackHomeClick}
        >
          <b className={styles.popupbackhomebuttontext}>Back Home</b>
        </button>
        <div className={styles.popuprankingvalues}>
          <b className={styles.popuptextrankingchange}>-8</b>
          <b className={styles.popuptextrankingvalue}>0</b>
        </div>
        <div className={styles.popuptextrankingtitle}>Ranking</div>
        <button
          className={styles.popupbuttonaddfriend}
          id="buttonAddFriend"
          onClick={onPopupButtonAddFriendClick}
        >
          <b className={styles.popupbuttonplayagaintext}>Add Friend</b>
        </button>
      </div>
    </div>
  );
};

export default PopupLoseSmall;
