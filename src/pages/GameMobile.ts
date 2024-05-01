import React, { useEffect } from 'react';
import createBoard from './chessBoardMobile.js';
import { useState, useCallback } from "react";
import PopupLoseSmall from "../components/PopupLoseSmall";
import PortalPopup from "../components/PortalPopup";
import PopupLeaveSmall from "../components/PopupLeaveSmall";
import styles from "./GameMobile.module.css";
const GameMobile = () => {
  const [isPopupLoseSmallOpen, setPopupLoseSmallOpen] = useState(false);
  const [isPopupLeaveSmallOpen, setPopupLeaveSmallOpen] = useState(false);
  const [isPopupLeaveSmallOpen1, setPopupLeaveSmallOpen1] = useState(false);
  const [isPopupLeaveSmall1Open, setPopupLeaveSmall1Open] = useState(false);

  const onButtonAddFriendClick = useCallback(() => {
    window.open("Call addFriend(); here.");
  }, []);

  const openPopupLoseSmall = useCallback(() => {
    setPopupLoseSmallOpen(true);
  }, []);

  const closePopupLoseSmall = useCallback(() => {
    setPopupLoseSmallOpen(false);
  }, []);

  const openPopupLeaveSmall = useCallback(() => {
    setPopupLeaveSmallOpen(true);
  }, []);

  const closePopupLeaveSmall = useCallback(() => {
    setPopupLeaveSmallOpen(false);
  }, []);

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

  const openPopupLeaveSmall1 = useCallback(() => {
    setPopupLeaveSmall1Open(true);
  }, []);

  const closePopupLeaveSmall1 = useCallback(() => {
    setPopupLeaveSmall1Open(false);
  }, []);

  useEffect(() => {
    createBoard();
  }, []);

  return (
    <>
      <div className={styles.gamemobile}>
        <div className={styles.content1Topuser}>
          <b className={styles.textuser1}>Username1</b>
          <div className={styles.user1info}>
            <div className={styles.textuser1elo}>(0)</div>
            <img
              className={styles.imguser1avatarIcon}
              alt=""
              src="/imguser1avatar1@2x.png"
            />
            <div className={styles.textuser1score}>Score: 0</div>
          </div>
          <button
            className={styles.buttonaddfriend}
            onClick={onButtonAddFriendClick}
          >
            <b className={styles.addfriendbuttontext}>Add Friend</b>
          </button>
        </div>
        <div className={styles.content2Chess}>
          <div className={styles.content2divider} />
          <div className={styles.chessboardcontainer} id="divChessboardContainer">
              <div className={styles.chessBoard} id="chessBoard"></div>
	            <script src="chessBoardMobile.js"></script>
          </div>
        </div>
        <div className={styles.content3Bottomuser}>
          <b className={styles.textuser2}>Username2</b>
          <div className={styles.user1info}>
            <div className={styles.textuser1elo}>(0)</div>
            <img
              className={styles.imguser1avatarIcon}
              alt=""
              src="/imguser1avatar1@2x.png"
            />
            <div className={styles.textuser1score}>Score: 0</div>
          </div>
        </div>
        <div className={styles.content4Buttons}>
          <div className={styles.content4divider} />
          <button className={styles.buttonconcede} onClick={openPopupLoseSmall}>
            <b className={styles.concedebuttontext}>Concede</b>
          </button>
          <button className={styles.buttonleave} onClick={openPopupLeaveSmall}>
            <b className={styles.concedebuttontext}>Leave Match</b>
          </button>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerdivider} />
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
            onClick={openPopupLeaveSmall}
          >
            <img
              className={styles.menubuttonicon}
              alt=""
              src="/menubuttonicon.svg"
            />
          </button>
          <div className={styles.pageselectlogo} />
          <img
            className={styles.navlogoIcon}
            alt=""
            src="/navlogo1@2x.png"
            onClick={openPopupLeaveSmall1}
          />
        </div>
      </div>
      {isPopupLoseSmallOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLoseSmall}
        >
          <PopupLoseSmall onClose={closePopupLoseSmall} />
        </PortalPopup>
      )}
      {isPopupLeaveSmallOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveSmall}
        >
          <PopupLeaveSmall onClose={closePopupLeaveSmall} />
        </PortalPopup>
      )}
      {isPopupLeaveSmallOpen1 && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveSmall}
        >
          <PopupLeaveSmall onClose={closePopupLeaveSmall} />
        </PortalPopup>
      )}
      {isPopupLeaveSmall1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveSmall1}
        >
          <PopupLeaveSmall onClose={closePopupLeaveSmall1} />
        </PortalPopup>
      )}
    </>
  );
};

export default GameMobile;
