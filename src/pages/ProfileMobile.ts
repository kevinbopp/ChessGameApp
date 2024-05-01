import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PopupSideSI from "../components/PopupSideSI";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./ProfileMobile.module.css";
const ProfileMobile = () => {
  const navigate = useNavigate();
  const [isPopupSideSIOpen, setPopupSideSIOpen] = useState(false);

  const onButtonLogOutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onActionsButtonAddFriendClick = useCallback(() => {
    window.open("Call addFriend(); here.");
  }, []);

  const onActionsButtonPlayGameClick = useCallback(() => {
    navigate("/game");
  }, [navigate]);

  const onActionsButtonUnfriendClick = useCallback(() => {
    window.open("Call unFriend(); here.");
  }, []);

  const onButtonGoHomeClick = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

  const onFooterImgGitHubClick = useCallback(() => {
    window.open("https://www.google.com/search?q=github");
  }, []);

  const onFooterButtonBackClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='navMobileContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFooterImgDiscordClick = useCallback(() => {
    window.open("https://www.google.com/search?q=discord");
  }, []);

  const openPopupSideSI = useCallback(() => {
    setPopupSideSIOpen(true);
  }, []);

  const closePopupSideSI = useCallback(() => {
    setPopupSideSIOpen(false);
  }, []);

  const onNavLogoImageClick = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

  return (
    <>
      <div className={styles.profilemobile}>
        <div className={styles.header}>
          <div className={styles.usernamecontainer}>
            <b className={styles.headertextusername}>Username</b>
            <img
              className={styles.profilepicIcon}
              alt=""
              src="/profilepic1@2x.png"
            />
            <div className={styles.headertextelo}>(0)</div>
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.userbox}>
            <div className={styles.content1userbox}>
              <b className={styles.userboxusernamelabel}>Username:</b>
              <div className={styles.userboxusernameform}>
                <div className={styles.userboxformusername}>
                  <div className={styles.userboxinputtext}>Username</div>
                </div>
                <div className={styles.userboxeditsavebutton} />
              </div>
              <div className={styles.userboxbuttons}>
                <button
                  className={styles.buttonlogout}
                  onClick={onButtonLogOutClick}
                >
                  <b className={styles.logoutbuttontext}>Log Out</b>
                </button>
              </div>
            </div>
            <b className={styles.content1textuserheader}>User Info</b>
          </div>
          <div className={styles.actions}>
            <div className={styles.content1actionsbox}>
              <button
                className={styles.actionsbuttonaddfriend}
                onClick={onActionsButtonAddFriendClick}
              >
                <b className={styles.actionsaddfriendtext}>Add Friend</b>
              </button>
              <button
                className={styles.actionsbuttonaddfriend}
                onClick={onActionsButtonPlayGameClick}
              >
                <b className={styles.actionsaddfriendtext}>Play a Game</b>
              </button>
              <button
                className={styles.actionsbuttonunfriend}
                onClick={onActionsButtonUnfriendClick}
              >
                <b className={styles.logoutbuttontext}>Unfriend</b>
              </button>
            </div>
            <b className={styles.content1textactionsheader}>Actions</b>
          </div>
          <div className={styles.statisticsgames}>
            <div className={styles.content1statsgamesbox}>
              <b className={styles.userboxusernamelabel}>Wins: 0</b>
              <b className={styles.userboxusernamelabel}>Losses: 0</b>
              <b className={styles.userboxusernamelabel}>Total Games: 0</b>
            </div>
            <b className={styles.content1textstatsgamesheader}>Statistics</b>
          </div>
          <button className={styles.buttongohome} onClick={onButtonGoHomeClick}>
            <b className={styles.logoutbuttontext}>Return Home</b>
          </button>
        </div>
        <div className={styles.footer}>
          <button
            className={styles.footerimggithub}
            onClick={onFooterImgGitHubClick}
          />
          <div className={styles.footertextcopyright}>
            © 2023 FullStack Bros. All rights reserved.
          </div>
          <button
            className={styles.footerbuttonback}
            onClick={onFooterButtonBackClick}
          >
            <b className={styles.footerbuttontext}>Back to Top</b>
          </button>
          <button
            className={styles.footerimgdiscord}
            onClick={onFooterImgDiscordClick}
          />
        </div>
        <div className={styles.navmobile} data-scroll-to="navMobileContainer">
          <div className={styles.navbarbackground} />
          <button
            className={styles.hamburgermenubutton}
            id="navButtonMenu"
            onClick={openPopupSideSI}
          >
            <img
              className={styles.menubuttonicon}
              alt=""
              src="/menubuttonicon10.svg"
            />
          </button>
          <div className={styles.pageselectlogo} />
          <img
            className={styles.navlogoIcon}
            alt=""
            src="/navlogo3@2x.png"
            onClick={onNavLogoImageClick}
          />
        </div>
      </div>
      {isPopupSideSIOpen && (
        <PortalDrawer
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Right"
          onOutsideClick={closePopupSideSI}
        >
          <PopupSideSI onClose={closePopupSideSI} />
        </PortalDrawer>
      )}
    </>
  );
};

export default ProfileMobile;
