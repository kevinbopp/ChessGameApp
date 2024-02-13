import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PopupSideSI from "../components/PopupSideSI";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./ProfileTablet.module.css";
const ProfileTablet = () => {
  const navigate = useNavigate();
  const [isPopupSideSIOpen, setPopupSideSIOpen] = useState(false);

  const onButtonGoHomeClick = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

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

  const onFooterImgGitHubClick = useCallback(() => {
    window.open("https://www.google.com/search?q=github");
  }, []);

  const onFooterButtonBackClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='navTabletContainer']"
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
      <div className={styles.profiletablet}>
        <div className={styles.header}>
          <div className={styles.headertextelo}>(0)</div>
          <b className={styles.headertextusername}>Username</b>
          <img
            className={styles.profilepicIcon}
            alt=""
            src="/profilepic@2x.png"
          />
        </div>
        <div className={styles.content1}>
          <button className={styles.buttongohome} onClick={onButtonGoHomeClick}>
            <b className={styles.gohomebuttontext}>Return Home</b>
          </button>
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
                  <b className={styles.gohomebuttontext}>Log Out</b>
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
                <b className={styles.buttoncanceltext}>Unfriend</b>
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
        </div>
        <div className={styles.content2} />
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
            <b className={styles.gohomebuttontext}>Back to Top</b>
          </button>
          <button
            className={styles.footerimgdiscord}
            onClick={onFooterImgDiscordClick}
          />
        </div>
        <div className={styles.navtablet} data-scroll-to="navTabletContainer">
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
            src="/navlogo@2x.png"
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

export default ProfileTablet;
