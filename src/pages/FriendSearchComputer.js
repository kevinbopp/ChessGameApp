import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // * Added axios for HTTP requests
import SideBarDrop from "../components/SideBarDrop";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./FriendSearchComputer.module.css";
const FriendSearchComputer = () => {
  const navigate = useNavigate();
  const [isSideBarDropOpen, setSideBarDropOpen] = useState(false);

  const [friendsList, setFriendsList] = useState([]); // * Added state for friends list

  const onButtonFindUserClick = useCallback(() => {
    navigate("/usersearch");
  }, [navigate]);

  const onFormSearchButtonClick = useCallback(() => { // * Updated this function for searching friends
    const inputSearch = document.getElementById('inputSearch').value;
    
    axios.get(`/api/friends/search?query=${inputSearch}`)
      .then((response) => {
        // Update the state with the fetched friends list
        setFriendsList(response.data.friends);
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
      });
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

  const onCardButtonUnfriendClick = useCallback(() => {
    window.open("Call unFriend(); here.");
  }, []);

  const onCardButtonPlayGameClick = useCallback(() => {
    navigate("/game");
  }, [navigate]);

  const onFooterImgGitHubClick = useCallback(() => {
    window.open("https://www.google.com/search?q=github");
  }, []);

  const onFooterButtonBackClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='navigationBarSIContainer']"
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
      <div className={styles.friendsearchcomputer}>
        <div className={styles.header}>
          <div className={styles.headertextnumfriends}>
            View your friends below.
          </div>
          <b className={styles.headertextfriends}>Friends</b>
        </div>
        <div className={styles.content1}>
          <b className={styles.textnoresultsfound}>No results found.</b>
          <button
            className={styles.buttonfinduser}
            onClick={onButtonFindUserClick}
          >
            <b className={styles.finduserbuttontext}>Find a User</b>
          </button>
          <div className={styles.labelfinduserbutton}>Looking for a user?</div>
          <div className={styles.searchcontainer}>
            <input
              className={styles.formsearch}
              type="text"
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
          {friendsList.length > 0 && friendsList.map((friend, index) => ( // * Render the fetched friends list
            <div className={styles.cardfriend} key={index}>
              <div className={styles.carduserinfo}>
                <button
                  className={styles.cardavatar}
                  onClick={() => navigate(`/profile/${friend.username}`)} // * Added navigation to the friend's profile
                />
                <div className={styles.cardtext}>
                  <b
                    className={styles.cardusername}
                    onClick={() => navigate(`/profile/${friend.username}`)} // * Added navigation to the friend's profile
                  >
                    {friend.username}
                  </b>
                  <div className={styles.cardelo}>
                      ({friend.elo}) {/* Display the friend's ELO */}
                  </div>
                </div>
                <div className={styles.cardbuttons}>
                  <button
                    className={styles.cardbuttonunfriend}
                    onClick={onCardButtonUnfriendClick}
                  >
                    <b className={styles.buttoncanceltext}>Unfriend</b>
                  </button>
                  <button
                    className={styles.cardbuttonplaygame}
                    onClick={onCardButtonPlayGameClick}
                  >
                    <b className={styles.actionsptext}>Play a Game</b>
                  </button>
                </div>
              </div>
            </div>
          ))}
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
          className={styles.navigationbarsi}
          data-scroll-to="navigationBarSIContainer"
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

export default FriendSearchComputer;
