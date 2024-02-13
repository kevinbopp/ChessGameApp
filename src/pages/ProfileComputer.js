import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideBarDrop from "../components/SideBarDrop";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./ProfileComputer.module.css";
const ProfileComputer = () => {
  const navigate = useNavigate();
  const [isSideBarDropOpen, setSideBarDropOpen] = useState(false);

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
      "[data-scroll-to='navComputerSIContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFooterImgDiscordClick = useCallback(() => {
    window.open("https://www.google.com/search?q=discord");
  }, []);

  const openSideBarDrop = useCallback(() => {
    setSideBarDropOpen(true);
  }, []);

  const closeSideBarDrop = useCallback(() => {
    setSideBarDropOpen(false);
  }, []);

  const onNavContactTextClick = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const onNavHowTextClick = useCallback(() => {
    navigate("/howtoplay");
  }, [navigate]);

  const onNavAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onNavLogoImageClick = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

  return (
    <>
      <div className={styles.profilecomputer}>
        <div className={styles.header}>
          <div className={styles.headertextelo}>(0)</div>
          <b className={styles.headertextusername}>Username</b>
          <div className={styles.profilepic}>
            <img
              className={styles.headerprofileicon}
              alt=""
              src="/headerprofileicon@2x.png"
            />
          </div>
        </div>
        <div className={styles.content1}>
          <button className={styles.buttongohome} onClick={onButtonGoHomeClick}>
            <b className={styles.gohomebuttontext}>Return Home</b>
          </button>
          <div className={styles.userbox}>
            <b className={styles.content1textuserheader}>User Info</b>
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
                <b className={styles.gohomebuttontext}>Unfriend</b>
              </button>
            </div>
            <b className={styles.content1textactionsheader}>Actions</b>
          </div>
          <div className={styles.statisticsgames}>
            <div className={styles.content1statsgamesbox}>
              <b className={styles.statswins}>Wins: 0</b>
              <b className={styles.statswins}>Losses: 0</b>
              <b className={styles.statswins}>Total Games: 0</b>
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
        <div
          className={styles.navcomputersi}
          data-scroll-to="navComputerSIContainer"
        >
          <div className={styles.navbar}>
            <div className={styles.navbarbackground} />
            <div className={styles.navprofilecorner} onClick={openSideBarDrop}>
              <img
                className={styles.navprofilepicIcon}
                alt=""
                src="/navprofilepic@2x.png"
              />
              <div className={styles.navelo}>(0)</div>
              <b className={styles.navusername}>Username</b>
            </div>
            <div className={styles.pageselectcontact} />
            <b className={styles.navcontact} onClick={onNavContactTextClick}>
              Contact Us
            </b>
            <div className={styles.pageselecthow} />
            <b className={styles.navhow} onClick={onNavHowTextClick}>
              How to Play
            </b>
            <div className={styles.pageselectabout} />
            <b className={styles.navabout} onClick={onNavAboutTextClick}>
              About
            </b>
            <div className={styles.pageselectlogo} />
            <img
              className={styles.navlogoIcon}
              alt=""
              src="/navlogo@2x.png"
              onClick={onNavLogoImageClick}
            />
          </div>
        </div>
      </div>
      {isSideBarDropOpen && (
        <PortalDrawer
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Right"
          onOutsideClick={closeSideBarDrop}
        >
          <SideBarDrop onClose={closeSideBarDrop} />
        </PortalDrawer>
      )}
    </>
  );
};

export default ProfileComputer;
