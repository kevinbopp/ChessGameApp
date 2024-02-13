import styles from "./PopupNoAPI.module.css";
const PopupNoAPI = ({ onClose }) => {
  return (
    <div className={styles.popupnoapi}>
      <div className={styles.popupheader}>
        <div className={styles.popuptextleaving}>
          Code is missing API or database entries for this function.
        </div>
        <b className={styles.popuptexttitlewarning}>Error</b>
      </div>
      <img
        className={`${styles.popupimgclosebuttonIcon} ${styles.shrink}`}
        alt=""
        src="/popupimgclosebutton4@2x.png"
        onClick={onClose}
      />
      <div className={styles.popupleavebuttons}>
        <button
          className={`${styles.popupbuttoncancel} ${styles.shrink}`}
          id="buttonCancel"
          onClick={onClose}
        >
          <b className={styles.popupcancelbuttontext}>Close</b>
        </button>
      </div>
    </div>
  );
};

export default PopupNoAPI;
