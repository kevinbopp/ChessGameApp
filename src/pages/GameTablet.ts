import React, { useEffect } from 'react';
import createBoard from './chessBoard.js';
import { useState, useCallback } from "react";
import PopupLoseMedium from "../components/PopupLoseMedium";
import PortalPopup from "../components/PortalPopup";
import PopupLeaveMedium from "../components/PopupLeaveMedium";
import styles from "./GameTablet.module.css";
const GameTablet = () => {
  const [isPopupLoseMediumOpen, setPopupLoseMediumOpen] = useState(false);
  const [isPopupLeaveMediumOpen, setPopupLeaveMediumOpen] = useState(false);
  const [isPopupLeaveMediumOpen1, setPopupLeaveMediumOpen1] = useState(false);
  const [isPopupLeaveMedium1Open, setPopupLeaveMedium1Open] = useState(false);

  const onButtonAddFriendClick = useCallback(() => {
    window.open("Call addFriend(); here.");
  }, []);

  const openPopupLoseMedium = useCallback(() => {
    setPopupLoseMediumOpen(true);
  }, []);

  const closePopupLoseMedium = useCallback(() => {
    setPopupLoseMediumOpen(false);
  }, []);

  const openPopupLeaveMedium = useCallback(() => {
    setPopupLeaveMediumOpen(true);
  }, []);

  const closePopupLeaveMedium = useCallback(() => {
    setPopupLeaveMediumOpen(false);
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

  const openPopupLeaveMedium1 = useCallback(() => {
    setPopupLeaveMedium1Open(true);
  }, []);

  const closePopupLeaveMedium1 = useCallback(() => {
    setPopupLeaveMedium1Open(false);
  }, []);

  useEffect(() => {
    createBoard();
  }, []);

  return (
    <>
      <div className={styles.gametablet}>
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
          <div className={styles.content2divider} />
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
          <button
            className={styles.buttonconcede}
            onClick={openPopupLoseMedium}
          >
            <b className={styles.concedebuttontext}>Concede</b>
          </button>
          <button className={styles.buttonleave} onClick={openPopupLeaveMedium}>
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
        <div className={styles.navtablet} data-scroll-to="navTabletContainer">
          <div className={styles.navbarbackground} />
          <button
            className={styles.hamburgermenubutton}
            id="navButtonMenu"
            onClick={openPopupLeaveMedium}
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
            src="/navlogo@2x.png"
            onClick={openPopupLeaveMedium1}
          />
        </div>
      </div>
      {isPopupLoseMediumOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLoseMedium}
        >
          <PopupLoseMedium onClose={closePopupLoseMedium} />
        </PortalPopup>
      )}
      {isPopupLeaveMediumOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveMedium}
        >
          <PopupLeaveMedium onClose={closePopupLeaveMedium} />
        </PortalPopup>
      )}
      {isPopupLeaveMediumOpen1 && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveMedium}
        >
          <PopupLeaveMedium onClose={closePopupLeaveMedium} />
        </PortalPopup>
      )}
      {isPopupLeaveMedium1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.66)"
          placement="Centered"
          onOutsideClick={closePopupLeaveMedium1}
        >
          <PopupLeaveMedium onClose={closePopupLeaveMedium1} />
        </PortalPopup>
      )}
    </>
  );
};

export default GameTablet;
