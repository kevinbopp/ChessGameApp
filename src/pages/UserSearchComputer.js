import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SideBarDrop from "../components/SideBarDrop";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./UserSearchComputer.module.css";
const UserSearchComputer = () => {
  const navigate = useNavigate();
  const [isSideBarDropOpen, setSideBarDropOpen] = useState(false);

  const onButtonFindFriendClick = useCallback(() => {
    navigate("/friendsearch");
  }, [navigate]);

  const onFormSearchButtonClick = useCallback(() => {
    window.open("https://www.google.com/");
  }, []);

  const onButtonReturnHomeClick = useCallback(() => {
    navigate("/landing");
  }, [navigate]);

  const onCardAvatarClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardUsernameTextClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardButtonAddFriendClick = useCallback(() => {
    window.open("Call addFriend(); here.");
  }, []);

  const onCardButtonPlayGameClick = useCallback(() => {
    navigate("/game");
  }, [navigate]);

  const onCardButtonUnfriendClick = useCallback(() => {
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
      <div className={styles.usersearchcomputer}>
        <div className={styles.header}>
          <div className={styles.headertextnumusers}>
            Search all users on the site below.
          </div>
          <b className={styles.headertextusers}>Users</b>
        </div>
        <div className={styles.content1}>
          <b className={styles.textnoresultsfound}>No results found.</b>
          <button
            className={styles.buttonfindfriend}
            onClick={onButtonFindFriendClick}
          >
            <b className={styles.findfriendbuttontext}>Find a Friend</b>
          </button>
          <div className={styles.labelfindfriendbutton}>
            Looking for a friend?
          </div>
          <div className={styles.searchcontainer}>
            <input
              className={styles.formsearch}
              type="search"
              placeholder="Search"
              maxLength={18}
              id="inputSearch"
            />
            <button
              className={styles.formsearchbutton}
              onClick={onFormSearchButtonClick}
            />
          </div>
          <div className={styles.labelformsearch}>Search by name or ID:</div>
          <button
            className={styles.buttonreturnhome}
            onClick={onButtonReturnHomeClick}
          >
            <b className={styles.returnhomebuttontext}>Return Home</b>
          </button>
        </div>
        <div className={styles.content2}>
          <div className={styles.carduser}>
            <div className={styles.carduserinfo}>
              <button
                className={styles.cardavatar}
                onClick={onCardAvatarClick}
              />
              <div className={styles.cardtext}>
                <b
                  className={styles.cardusername}
                  onClick={onCardUsernameTextClick}
                >
                  Username
                </b>
                <div className={styles.cardelo}>(0)</div>
              </div>
            </div>
            <div className={styles.cardbuttons}>
              <button
                className={styles.cardbuttonaddfriend}
                onClick={onCardButtonAddFriendClick}
              >
                <b className={styles.actionsaddfriendtext}>Add Friend</b>
              </button>
              <button
                className={styles.cardbuttonplaygame}
                onClick={onCardButtonPlayGameClick}
              >
                <b className={styles.actionsaddfriendtext}>Play a Game</b>
              </button>
            </div>
          </div>
          <div className={styles.carduser}>
            <div className={styles.carduserinfo}>
              <button
                className={styles.cardavatar}
                onClick={onCardAvatarClick}
              />
              <div className={styles.cardtext}>
                <b
                  className={styles.cardusername}
                  onClick={onCardUsernameTextClick}
                >
                  Username
                </b>
                <div className={styles.cardelo}>(0)</div>
              </div>
            </div>
            <div className={styles.cardbuttons}>
              <button
                className={styles.cardbuttonunfriend}
                onClick={onCardButtonUnfriendClick}
              >
                <b className={styles.buttonunfriendtext}>Unfriend</b>
              </button>
              <button
                className={styles.cardbuttonplaygame}
                onClick={onCardButtonPlayGameClick}
              >
                <b className={styles.actionsaddfriendtext}>Play a Game</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.content3} />
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

export default UserSearchComputer;
