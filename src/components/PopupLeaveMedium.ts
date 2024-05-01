import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PopupLeaveMedium.module.css";
const PopupLeaveMedium = ({ onClose }) => {
  const navigate = useNavigate();

  const onPopupButtonLeaveClick = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

  return (
    <div className={styles.popupleavemedium}>
      <div className={styles.popupheader}>
        <div className={styles.popuptextleaving}>
          Leaving the page will concede the match.
        </div>
        <b className={styles.popuptexttitlewarning}>Warning:</b>
      </div>
      <button
        className={styles.popupimgclosebutton}
        id="closeButton"
        onClick={onClose}
      />
      <div className={styles.popupinformation}>
        <div className={styles.popuptextsure}>
          Are you sure you want to leave?
        </div>
      </div>
      <div className={styles.popupleavebuttons}>
        <button
          className={styles.popupbuttonleave}
          id="buttonLeave"
          onClick={onPopupButtonLeaveClick}
        >
          <b className={styles.popupleavebuttontext}>Leave</b>
        </button>
        <button
          className={styles.popupbuttoncancel}
          id="buttonCancel"
          onClick={onClose}
        >
          <b className={styles.popupcancelbuttontext}>Cancel</b>
        </button>
      </div>
    </div>
  );
};

export default PopupLeaveMedium;
