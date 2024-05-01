import { useState, useCallback } from "react";
import React, { useEffect } from 'react';
import PopupLoseLarge from "../components/PopupLoseLarge";
import PortalPopup from "../components/PortalPopup";
import PopupLeaveLarge from "../components/PopupLeaveLarge";
import SideBarDropGamesPage from "../components/SideBarDropGamesPage";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./GameComputer.module.css";
import createBoard from './chessBoard.js';

const GameComputer = () => {
  const [isPopupLoseLargeOpen, setPopupLoseLargeOpen] = useState(false);
  const [isPopupLeaveLargeOpen, setPopupLeaveLargeOpen] = useState(false);
  const [isPopupLeaveLargeOpen1, setPopupLeaveLargeOpen1] = useState(false);
  const [isPopupLeaveLarge1Open, setPopupLeaveLarge1Open] = useState(false);
  const [isPopupLeaveLarge2Open, setPopupLeaveLarge2Open] = useState(false);
  const [isPopupLeaveLarge3Open, setPopupLeaveLarge3Open] = useState(false);
  const [isSideBarDropGamesPageOpen, setSideBarDropGamesPageOpen] =
    useState(false);

  const onButtonAddFriendClick = useCallback(() => {
    window.open("Call addFriend(); here.");
  }, []);

  const openPopupLoseLarge = useCallback(() => {
    setPopupLoseLargeOpen(true);
  }, []);

  const closePopupLoseLarge = useCallback(() => {
    setPopupLoseLargeOpen(false);
  }, []);

  const openPopupLeaveLarge = useCallback(() => {
    setPopupLeaveLargeOpen(true);
  }, []);

  const closePopupLeaveLarge = useCallback(() => {
    setPopupLeaveLargeOpen(false);
  }, []);

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

  const openSideBarDropGamesPage = useCallback(() => {
    setSideBarDropGamesPageOpen(true);
  }, []);

  const closeSideBarDropGamesPage = useCallback(() => {
    setSideBarDropGamesPageOpen(false);
  }, []);

  const openPopupLeaveLarge1 = useCallback(() => {
    setPopupLeaveLarge1Open(true);
  }, []);

  const closePopupLeaveLarge1 = useCallback(() => {
    setPopupLeaveLarge1Open(false);
  }, []);

  const openPopupLeaveLarge2 = useCallback(() => {
    setPopupLeaveLarge2Open(true);
  }, []);

  const closePopupLeaveLarge2 = useCallback(() => {
    setPopupLeaveLarge2Open(false);
  }, []);

  const openPopupLeaveLarge3 = useCallback(() => {
    setPopupLeaveLarge3Open(true);
  }, []);

  const closePopupLeaveLarge3 = useCallback(() => {
    setPopupLeaveLarge3Open(false);
  }, []);

useEffect(() => {
    createBoard();
  }, []);

  return (
    <>
      <div className={styles.gamecomputer}>
        <div className={styles.content1Topuser}>
          <div className={styles.textuser1score}>Score: 0</div>
          <img
            className={styles.imguser1avatarIcon}
            alt=""
            src="/imguser1avatar@2x.png"
          />
          <div className={styles.textuser1elo}>(0)</div>
          <b className={styles.textuser1}>Username1</b>
          <button
            className={styles.buttonaddfriend}
            onClick={onButtonAddFriendClick}
          >
            <b className={styles.addfriendbuttontext}>Add Friend</b>
          </button>
        </div>
        <div className={styles.content2Chess}>
          <div className={styles.chessboardcontainer} id="divChessboardContainer">
            <div className={styles.chessBoard} id="chessBoard"></div>
	          <script src="chessBoard.js"></script>
          </div>
        </div>
        <div className={styles.content3Bottomuser}>
          <div className={styles.textuser2score}>Score: 0</div>
          <img
            className={styles.imguser2avatarIcon}
            alt=""
            src="/imguser1avatar@2x.png"
          />
          <div className={styles.textuser2elo}>(0)</div>
          <b className={styles.textuser2}>Username2</b>
        </div>
        <div className={styles.content4Buttons}>
          <div className={styles.content4divider} />
          <button className={styles.buttonconcede} onClick={openPopupLoseLarge}>
            <b className={styles.concedebuttontext}>Concede</b>
          </button>
          <button className={styles.buttonleave} onClick={openPopupLeaveLarge}>
            <b className={styles.concedebuttontext}>Leave Match</b>
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
        <div
          className={styles.navigationbarsi}
          data-scroll-to="navigationBarSIContainer"
        >
          <div className={styles.navbar}>
            <div className={styles.navbarbackground} />
            <div
              className={styles.navprofilecorner}
              onClick={openSideBarDropGamesPage}
            >
              <img
                className={styles.navprofilepicIcon}
                alt=""
                src="/navprofilepic@2x.png"
              />
              <div className={styles.navelo}>(0)</div>
              <b className={styles.navusername}>Username</b>
            </div>
            <div className={styles.pageselectcontact} />
            <b className={styles.navcontact} onClick={openPopupLeaveLarge}>
              Contact Us
            </b>
            <div className={styles.pageselecthow} />
            <b className={styles.navhow} onClick={openPopupLeaveLarge1}>
              How to Play
            </b>
            <div className={styles.pageselectabout} />
            <b className={styles.navabout} onClick={openPopupLeaveLarge2}>
              About
            </b>
            <div className={styles.pageselectlogo} />
            <img
              className={styles.navlogoIcon}
              alt=""
              src="/navlogo@2x.png"
              onClick={openPopupLeaveLarge3}
            />
          </div>
        </div>
      </div>
      {isPopupLoseLargeOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLoseLarge}
        >
          <PopupLoseLarge onClose={closePopupLoseLarge} />
        </PortalPopup>
      )}
      {isPopupLeaveLargeOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge} />
        </PortalPopup>
      )}
      {isSideBarDropGamesPageOpen && (
        <PortalDrawer
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Right"
          onOutsideClick={closeSideBarDropGamesPage}
        >
          <SideBarDropGamesPage onClose={closeSideBarDropGamesPage} />
        </PortalDrawer>
      )}
      {isPopupLeaveLargeOpen1 && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge} />
        </PortalPopup>
      )}
      {isPopupLeaveLarge1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge1}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge1} />
        </PortalPopup>
      )}
      {isPopupLeaveLarge2Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge2}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge2} />
        </PortalPopup>
      )}
      {isPopupLeaveLarge3Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveLarge3}
        >
          <PopupLeaveLarge onClose={closePopupLeaveLarge3} />
        </PortalPopup>
      )}
    </>
  );
};

export default GameComputer;
