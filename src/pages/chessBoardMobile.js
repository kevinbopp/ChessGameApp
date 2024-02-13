import styles from "./GameMobile.module.css";
const playerDisplay = document.querySelector("#player");
const numRanks = 8;
const numFiles = 8;
const endOfRank = 7;
const endOfFile = 56;
var isSendingMove = true;
var playerColor = true;
var moveStartPiece;
var moveStartId;
var moveEndSquare;
var moveEndId;
var allLegalMovesWhite = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var allLegalMovesBlack = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var legalMoves = [];
var colorTurn = "white";
var colorTurnIsInCheck = false;
var moveUpLeft = -9;
var moveUp = -8;
var moveUpRight = -7;
var moveLeft = -1;
var moveRight = 1;
var moveDownLeft = 7;
var moveDown = 8;
var moveDownRight = 9;

//pieces
const whiteKing = '<div class=' + styles.piece + ' id="whiteKing"><?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path stroke-linejoin="miter" d="M22.5 11.63V6M20 8h5"/><path fill="#fff" stroke-linecap="butt" stroke-linejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/><path fill="#fff" d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/><path d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/></g></svg></div>';
const whiteQueen = '<div class=' + styles.piece + ' id="whiteQueen"><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><g style="fill:#ffffff;stroke:#000000;stroke-width:1.5;stroke-linejoin:round"><path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"/><path d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"/><path d="M 11.5,30 C 15,29 30,29 33.5,30" style="fill:none"/><path d="M 12,33.5 C 18,32.5 27,32.5 33,33.5" style="fill:none"/><circle cx="6" cy="12" r="2" /><circle cx="14" cy="9" r="2" /><circle cx="22.5" cy="8" r="2" /><circle cx="31" cy="9" r="2" /><circle cx="39" cy="12" r="2" /></g></svg></div>';
const whiteRook = '<div class=' + styles.piece + ' id="whiteRook"><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.3)"><path d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z " style="stroke-linecap:butt;" /><path d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z " style="stroke-linecap:butt;" /><path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14" style="stroke-linecap:butt;" /><path d="M 34,14 L 31,17 L 14,17 L 11,14" /><path d="M 31,17 L 31,29.5 L 14,29.5 L 14,17" style="stroke-linecap:butt; stroke-linejoin:miter;" /><path d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" /><path d="M 11,14 L 34,14" style="fill:none; stroke:#000000; stroke-linejoin:miter;" /></g></svg></div>';
const whiteBishop = '<div class=' + styles.piece + ' id="whiteBishop"><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.6)"><g style="fill:#ffffff; stroke:#000000; stroke-linecap:butt;"><path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"/><path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/><path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"/></g><path d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18" style="fill:none; stroke:#000000; stroke-linejoin:miter;"/></g></svg></div>';
const whiteKnight = '<div class=' + styles.piece + ' id="whiteKnight"><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.3)"><path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" style="fill:#ffffff; stroke:#000000;" /><path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" style="fill:#ffffff; stroke:#000000;" /><path d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z" style="fill:#000000; stroke:#000000;" /><path d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" style="fill:#000000; stroke:#000000;" /></g></svg></div>';
const whitePawn = '<div class=' + styles.piece + ' id="whitePawn"><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/></svg></div>'
const blackKing = '<div class=' + styles.piece + ' id="blackKing"><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"><path d="M 22.5,11.63 L 22.5,6" style="fill:none; stroke:#000000; stroke-linejoin:miter;" id="path6570"/><path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25" style="fill:#000000;fill-opacity:1; stroke-linecap:butt; stroke-linejoin:miter;"/><path d="M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37" style="fill:#000000; stroke:#000000;"/><path d="M 20,8 L 25,8" style="fill:none; stroke:#000000; stroke-linejoin:miter;"/><path d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.5,26.6 L 22.5,24.5 C 20,18 10.85,14 6.97,19.85 C 4.5,25.5 13,29.5 13,29.5" style="fill:none; stroke:#ffffff;"/><path d="M 12.5,30 C 18,27 27,27 32.5,30 M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5 M 12.5,37 C 18,34 27,34 32.5,37" style="fill:none; stroke:#ffffff;"/></g></svg></div>';
const blackQueen = '<div class=' + styles.piece + ' id="blackQueen"><?xml version="1.0" encoding="utf-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><g style="fill:#000000;stroke:#000000;stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round"><path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z" style="stroke-linecap:butt;fill:#000000" /><path d="m 9,26 c 0,2 1.5,2 2.5,4 1,1.5 1,1 0.5,3.5 -1.5,1 -1,2.5 -1,2.5 -1.5,1.5 0,2.5 0,2.5 6.5,1 16.5,1 23,0 0,0 1.5,-1 0,-2.5 0,0 0.5,-1.5 -1,-2.5 -0.5,-2.5 -0.5,-2 0.5,-3.5 1,-2 2.5,-2 2.5,-4 -8.5,-1.5 -18.5,-1.5 -27,0 z" /><path d="M 11.5,30 C 15,29 30,29 33.5,30" /><path d="m 12,33.5 c 6,-1 15,-1 21,0" /><circle cx="6" cy="12" r="2" /><circle cx="14" cy="9" r="2" /><circle cx="22.5" cy="8" r="2" /><circle cx="31" cy="9" r="2" /><circle cx="39" cy="12" r="2" /><path d="M 11,38.5 A 35,35 1 0 0 34,38.5" style="fill:none; stroke:#000000;stroke-linecap:butt;" /><g style="fill:none; stroke:#ffffff;"><path d="M 11,29 A 35,35 1 0 1 34,29" /><path d="M 12.5,31.5 L 32.5,31.5" /><path d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5" /><path d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5" /></g></g></svg></div>';
const blackRook = '<div class=' + styles.piece + ' id="blackRook"><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><g style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.3)"><path d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z " style="stroke-linecap:butt;" /><path d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z " style="stroke-linecap:butt;" /><path d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z " style="stroke-linecap:butt;" /><path d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z " style="stroke-linecap:butt;stroke-linejoin:miter;" /><path d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z " style="stroke-linecap:butt;" /><path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z " style="stroke-linecap:butt;" /><path d="M 12,35.5 L 33,35.5 L 33,35.5" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" /><path d="M 13,31.5 L 32,31.5" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" /><path d="M 14,29.5 L 31,29.5" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" /><path d="M 14,16.5 L 31,16.5" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" /><path d="M 11,14 L 34,14" style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" /></g></svg></div>';
const blackBishop = '<div class=' + styles.piece + ' id="blackBishop"><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.6)"><g style="fill:#000000; stroke:#000000; stroke-linecap:butt;"><path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"/><path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/><path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"/></g><path d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18" style="fill:none; stroke:#ffffff; stroke-linejoin:miter;"/></g></svg></div>';
const blackKnight = '<div class=' + styles.piece + ' id="blackKnight"><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.3)"><path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" style="fill:#000000; stroke:#000000;" /><path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" style="fill:#000000; stroke:#000000;" /><path d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z" style="fill:#ffffff; stroke:#ffffff;" /><path d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" style="fill:#ffffff; stroke:#ffffff;" /><path d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z " style="fill:#ffffff; stroke:none;" /></g></svg></div>';
const blackPawn = '<div class=' + styles.piece + ' id="blackPawn"><?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/></svg></div>';

//ui
const circleNoPiece = '<svg class=' + styles.svgCircleNoPiece + ' xmlns="http://www.w3.org/2000/svg"><path class=' + styles.svgPathUiElement + ' d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/></svg>';
const circlePiece = '<svg class=' + styles.svgCirclePiece + ' fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" xml:space="preserve"><path class=' + styles.svgPathUiElement + ' d="M150,0C67.29,0,0,67.29,0,150s67.29,150,150,150s150-67.29,150-150S232.71,0,150,0z M150,270c-66.169,0-120-53.832-120-120 S83.831,30,150,30s120,53.832,120,120S216.168,270,150,270z"/></svg>';

var boardMatrix = 
[
	blackRook, blackKnight, blackBishop, blackQueen, blackKing, blackBishop, blackKnight, blackRook,
	blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn,
	'', '', '', '', '', '', '', '',
	'', '', '', '', '', '', '', '',
	'', '', '', '', '', '', '', '',
	'', '', '', '', '', '', '', '',
	whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn,
	whiteRook, whiteKnight, whiteBishop, whiteQueen, whiteKing, whiteBishop, whiteKnight, whiteRook
];

function createBoard()
{
	const chessBoard = document.querySelector("#chessBoard"); 
	boardMatrix.forEach((startingPiece, i) => 
	{
		const square = document.createElement("div");
		square.classList.add(styles.square);
		square.innerHTML = startingPiece;
		square.addEventListener("dragstart", dragStart);
		square.addEventListener("dragover", dragOver);
		square.addEventListener("drop", dragDrop);
		if(square.children[0])
		{
			let svgDiv = square.children[0];
			svgDiv.draggable = true;
			
			let svg = square.children[0].children[0];
			svg.classList.add(styles.svgPiece);
			svg.setAttribute("viewBox", "2.5 2.5 40 40");
			
		}
		square.setAttribute("squareId", i);
		let rank = Math.floor(i / 8);
		if (rank % 2 === 0)
		{
			square.classList.add(i % 2 === 0 ? styles.tan : styles.green)
		}
		else
		{
			square.classList.add(i % 2 === 0 ? styles.green : styles.tan)
		}
		square.classList.add(styles.green);
		chessBoard.append(square);
	});

	let pieces = document.querySelectorAll("[class='" + styles.piece + "']");
	let pieceId;
	legalMoves = [];
	pieces.forEach((piece, i) =>
	{
		pieceId = i;
		piece.setAttribute("pieceId", pieceId);
		if((pieceId === 0) || (pieceId === 4) || (pieceId === 7) || (pieceId === 24) || (pieceId === 28) || (pieceId === 31))
		{
			piece.setAttribute("hasMoved", 0);
		}
		if(piece.id.includes("white"))
		{
			piece.setAttribute("color", '1');
		}
		else
		{
			piece.setAttribute("color", '0');
		}
	});

	let whiteKingSquareId = Number(document.querySelector("[pieceId='" + 28 + "']").parentNode.getAttribute("squareId"));
	let blackKingSquareId = Number(document.querySelector("[pieceId='" + 4 + "']").parentNode.getAttribute("squareId"));
	allLegalMovesWhite = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	allLegalMovesBlack = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	populateDefaultKingMoves(whiteKingSquareId, true);
	populateDefaultKingMoves(blackKingSquareId, false);
	
	pieces = document.querySelectorAll("[color='" + 1 + "']");
	legalMoves = [];
	pieces.forEach((piece) =>
	{
		moveStartId = Number(piece.parentNode.getAttribute("squareId"));
		pieceId = Number(piece.getAttribute("pieceId"));
		if(!(pieceId === 28))
		{
			moveStartPiece = piece;
			findLegalMoves();
			allLegalMovesWhite[pieceId - 16] = legalMoves;
			legalMoves = [];
		}
	});

	pieces = document.querySelectorAll("[color='" + 0 + "']");
	legalMoves = [];
	pieces.forEach((piece) =>
	{
		moveStartId = Number(piece.parentNode.getAttribute("squareId"));
		pieceId = Number(piece.getAttribute("pieceId"));
		if(!(pieceId === 4))
		{
			moveStartPiece = piece;
			findLegalMoves();
			allLegalMovesBlack[pieceId] = legalMoves;
			legalMoves = [];
		}
	});

	let piece;
	legalMoves = [];
	allLegalMovesWhite[28 - 16] = [];
	piece = document.querySelector("[pieceId='" + 28 + "']");
	moveStartId = Number(piece.parentNode.getAttribute("squareId"));
	pieceId = 28;
	moveStartPiece = piece;
	findLegalMoves();
	allLegalMovesWhite[pieceId - 16] = legalMoves;
	legalMoves = [];

	legalMoves = [];
	allLegalMovesBlack[4] = [];
	piece = document.querySelector("[pieceId='" + 4 + "']");
	moveStartId = Number(piece.parentNode.getAttribute("squareId"));
	pieceId = 4;
	moveStartPiece = piece;
	findLegalMoves();
	allLegalMovesBlack[pieceId] = legalMoves;
	legalMoves = [];
}

function populateAllLegalMovesWhite()
{
	let pieceId;
	let pieces = document.querySelectorAll("[color='" + 1 + "']");

	legalMoves = [];
	pieces.forEach((piece) =>
	{
		moveStartId = Number(piece.parentNode.getAttribute("squareId"));
		pieceId = Number(piece.getAttribute("pieceId"));
		if(!(pieceId === 28) && !(piece.hasAttribute("isPinned")))
		{
			moveStartPiece = piece;
			findLegalMoves();
			allLegalMovesWhite[pieceId - 16] = legalMoves;
			legalMoves = [];
		}
	});
}

function populateAllLegalMovesBlack()
{
	let pieceId;
	let pieces = document.querySelectorAll("[color='" + 0 + "']");
	
	legalMoves = [];
	pieces.forEach((piece) =>
	{
		moveStartId = Number(piece.parentNode.getAttribute("squareId"));
		pieceId = Number(piece.getAttribute("pieceId"));
		if(!(pieceId === 4) && !(piece.hasAttribute("isPinned")))
		{
			moveStartPiece = piece;
			findLegalMoves();
			allLegalMovesBlack[pieceId] = legalMoves;
			legalMoves = [];
		}
	});
}

function populateAllLegalMovesKings()
{
	let pieceId;
	let piece;
	let allLegalMovesTemp1;
	let allLegalMovesTemp2;
	let kingLegalMovesTemp1;
	let kingLegalMovesTemp2;

	allLegalMovesTemp1 = allLegalMovesWhite.map((x) => x);
	allLegalMovesTemp2 = allLegalMovesBlack.map((x) => x);
	legalMoves = [];
	allLegalMovesWhite[28 - 16] = [];
	for(let i = 8; i < 16; i++)
	{
		allLegalMovesBlack[i] = [];
	}
	piece = document.querySelector("[pieceId='" + 28 + "']");
	moveStartId = Number(piece.parentNode.getAttribute("squareId"));
	pieceId = 28;
	moveStartPiece = piece;
	findLegalMoves();
	kingLegalMovesTemp1 = legalMoves.map((x) => x);
	legalMoves = [];
	allLegalMovesWhite = allLegalMovesTemp1.map((x) => x);
	allLegalMovesTemp1[pieceId - 16] = kingLegalMovesTemp1.map((x) => x);

	legalMoves = [];
	allLegalMovesBlack = allLegalMovesTemp2.map((x) => x);
	allLegalMovesBlack[4] = [];
	for(let i = 0; i < 8; i++)
	{
		allLegalMovesWhite[i] = [];
	}
	piece = document.querySelector("[pieceId='" + 4 + "']");
	moveStartId = Number(piece.parentNode.getAttribute("squareId"));
	pieceId = 4;
	moveStartPiece = piece;
	findLegalMoves();
	kingLegalMovesTemp2 = legalMoves.map((x) => x);
	legalMoves = [];
	allLegalMovesBlack[pieceId] = kingLegalMovesTemp2.map((x) => x);

	allLegalMovesWhite = allLegalMovesTemp1.map((x) => x);
}

function populateDefaultKingMoves(kingId, isWhite)
{
	let kingRank = Math.floor(kingId / numRanks);
	let kingFile = kingId % numFiles;
	let endId;
	let endSquare;

	if(isWhite)
	{
		for(let i = 0; i < 3; i++)
		{
			if((kingRank === 0) || ((kingFile === 7) && (i === 2)))
			{
				break;
			}
			if((kingFile === 0) && (i === 0))
			{
				continue;
			}
			endId = kingId + moveUpLeft + i;
			if((endId > 0) && (endId < 63))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				if(endSquare.children[0])
				{
					if(endSquare.children[0].id.includes("black"))
					{
						allLegalMovesWhite[12].push(endId);
					}
					else
					{
						endSquare.children[0].setAttribute("isDefendedWhite", '');
					}
				}
				else
				{
					allLegalMovesWhite[12].push(endId);
				}
			}
		}

		for(let i = 0; i < 3; i++)
		{
			if((kingFile === 7) && (i === 2))
			{
				break;
			}
			if((kingFile === 0) && (i === 0))
			{
				continue;
			}
			endId = kingId + moveLeft + i;
			if((endId > 0) && (endId < 63) && (i !== 1))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				if(endSquare.children[0])
				{
					if(endSquare.children[0].id.includes("black"))
					{
						allLegalMovesWhite[12].push(endId);
					}
					else
					{
						endSquare.children[0].setAttribute("isDefendedWhite", '');
					}
				}
				else
				{
					allLegalMovesWhite[12].push(endId);
				}
			}
		}

		for(let i = 0; i < 3; i++)
		{
			if((kingRank === 7) || ((kingFile === 7) && (i === 2)))
			{
				break;
			}
			if((kingFile === 0) && (i === 0))
			{
				continue;
			}
			endId = kingId + moveDownLeft + i;
			if((endId > 0) && (endId < 63))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				if(endSquare.children[0])
				{
					if(endSquare.children[0].id.includes("black"))
					{
						allLegalMovesWhite[12].push(endId);
					}
					else
					{
						endSquare.children[0].setAttribute("isDefendedWhite", '');
					}
				}
				else
				{
					allLegalMovesWhite[12].push(endId);
				}
			}
		}
	}
	else
	{
		for(let i = 0; i < 3; i++)
		{
			if((kingRank === 0) || ((kingFile === 7) && (i === 2)))
			{
				break;
			}
			if((kingFile === 0) && (i === 0))
			{
				continue;
			}
			endId = kingId + moveUpLeft + i;
			if((endId > 0) && (endId < 63))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				if(endSquare.children[0])
				{
					if(endSquare.children[0].id.includes("white"))
					{
						allLegalMovesBlack[4].push(endId);
					}
					else
					{
						endSquare.children[0].setAttribute("isDefendedBlack", '');
					}
				}
				else
				{
					allLegalMovesBlack[4].push(endId);
				}
			}
		}

		for(let i = 0; i < 3; i++)
		{
			if((kingFile === 7) && (i === 2))
			{
				break;
			}
			if((kingFile === 0) && (i === 0))
			{
				continue;
			}
			endId = kingId + moveLeft + i;
			if((endId > 0) && (endId < 63) && (i !== 1))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				if(endSquare.children[0])
				{
					if(endSquare.children[0].id.includes("white"))
					{
						allLegalMovesBlack[4].push(endId);
					}
					else
					{
						endSquare.children[0].setAttribute("isDefendedBlack", '');
					}
				}
				else
				{
					allLegalMovesBlack[4].push(endId);
				}
			}
		}

		for(let i = 0; i < 3; i++)
		{
			if((kingRank === 7) || ((kingFile === 7) && (i === 2)))
			{
				break;
			}
			if((kingFile === 0) && (i === 0))
			{
				continue;
			}
			endId = kingId + moveDownLeft + i;
			if((endId > 0) && (endId < 63))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				if(endSquare.children[0])
				{
					if(endSquare.children[0].id.includes("white"))
					{
						allLegalMovesBlack[4].push(endId);
					}
					else
					{
						endSquare.children[0].setAttribute("isDefendedBlack", '');
					}
				}
				else
				{
					allLegalMovesBlack[4].push(endId);
				}
			}
		}
	}
}

function handlePinnedPieces(kingSquareId)
{
	let kingSquare = document.querySelector("[squareId='" + kingSquareId + "']");
	let endId;
	let endSquare;
	let piece;
	let pieceSquareId;
	let startRank = Math.floor(kingSquareId / numRanks);
	let startFile = kingSquareId % numFiles;
	let rank;
	let file;

	// Move up left
	endId = kingSquareId + moveUpLeft;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	while(endId >= 0)
	{
		if((startRank === 0) || (startFile === 0))
		{
			break;
		}
		if(endSquare.children[0])
		{
			piece = endSquare.children[0];
			break;
		}
		if((rank === 0) || (file === 0))
		{
			endId = -20;
			break;
		}
		endId += moveUpLeft;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
	endId += moveUpLeft;
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	if(endId >= 0)
	{
		endSquare = document.querySelector("[squareId='" + endId + "']");
	}
	while(endId >= 0)
	{
		if((startRank === 0) || (startFile === 0))
		{
			break;
		}
		if(endSquare.children[0])
		{
			if(kingSquare.children[0].id.includes("white"))
			{
				if(endSquare.children[0].id.includes("blackQueen") || endSquare.children[0].id.includes("blackBishop"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			else
			{
				if(endSquare.children[0].id.includes("whiteQueen") || endSquare.children[0].id.includes("whiteBishop"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			break;
		}
		if((rank === 0) || (file === 0))
		{
			break;
		}
		endId += moveUpLeft;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
	
	// Move up
	endId = kingSquareId + moveUp;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	while(endId >= 0)
	{
		if(endSquare.children[0])
		{
			piece = endSquare.children[0];
			break;
		}
		endId += moveUp;
		endSquare = document.querySelector("[squareId='" + endId + "']");
	}
	endId += moveUp;
	if(endId >= 0)
	{
		endSquare = document.querySelector("[squareId='" + endId + "']");
	}
	while(endId >= 0)
	{
		if(endSquare.children[0])
		{
			if(kingSquare.children[0].id.includes("white"))
			{
				if(endSquare.children[0].id.includes("blackQueen") || endSquare.children[0].id.includes("blackRook"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			else
			{
				if(endSquare.children[0].id.includes("whiteQueen") || endSquare.children[0].id.includes("whiteRook"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			break;
		}
		endId += moveUp;
		endSquare = document.querySelector("[squareId='" + endId + "']");
	}

	// Move up right
	endId = kingSquareId + moveUpRight;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	while(endId >= 0)
	{
		if((startRank === 0) || (startFile === 7))
		{
			break;
		}
		if(endSquare.children[0])
		{
			piece = endSquare.children[0];
			break;
		}
		if((rank === 0) || (file === 7))
		{
			endId = -20;
			break;
		}
		endId += moveUpRight;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
	endId += moveUpRight;
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	if(endId >= 0)
	{
		endSquare = document.querySelector("[squareId='" + endId + "']");
	}
	while(endId >= 0)
	{
		if((startRank === 0) || (startFile === 7))
		{
			break;
		}
		if(endSquare.children[0])
		{
			if(kingSquare.children[0].id.includes("white"))
			{
				if(endSquare.children[0].id.includes("blackQueen") || endSquare.children[0].id.includes("blackBishop"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			else
			{
				if(endSquare.children[0].id.includes("whiteQueen") || endSquare.children[0].id.includes("whiteBishop"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			break;
		}
		if((rank === 0) || (file === 7))
		{
			break;
		}
		endId += moveUpRight;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}

	// Move left
	endId = kingSquareId + moveLeft;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	while(startRank === rank)
	{
		if(endSquare.children[0])
		{
			piece = endSquare.children[0];
			break;
		}
		endId += moveLeft;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
	}
	endId += moveLeft;
	rank = Math.floor(endId / numRanks);
	if(startRank === rank)
	{
		endSquare = document.querySelector("[squareId='" + endId + "']");
	}
	while(startRank === rank)
	{
		if(endSquare.children[0])
		{
			if(kingSquare.children[0].id.includes("white"))
			{
				if(endSquare.children[0].id.includes("blackQueen") || endSquare.children[0].id.includes("blackRook"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			else
			{
				if(endSquare.children[0].id.includes("whiteQueen") || endSquare.children[0].id.includes("whiteRook"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			break;
		}
		endId += moveLeft;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
	}

	// Move right
	endId = kingSquareId + moveRight;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	while(startRank === rank)
	{
		if(endSquare.children[0])
		{
			piece = endSquare.children[0];
			break;
		}
		endId += moveRight;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
	}
	endId += moveRight;
	rank = Math.floor(endId / numRanks);
	if(startRank === rank)
	{
		endSquare = document.querySelector("[squareId='" + endId + "']");
	}
	while(startRank === rank)
	{
		if(endSquare.children[0])
		{
			if(kingSquare.children[0].id.includes("white"))
			{
				if(endSquare.children[0].id.includes("blackQueen") || endSquare.children[0].id.includes("blackRook"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			else
			{
				if(endSquare.children[0].id.includes("whiteQueen") || endSquare.children[0].id.includes("whiteRook"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			break;
		}
		endId += moveRight;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
	}

	// Move down left
	endId = kingSquareId + moveDownLeft;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	while(endId <= 63)
	{
		if((startRank === 7) || (startFile === 0))
		{
			break;
		}
		if(endSquare.children[0])
		{
			piece = endSquare.children[0];
			break;
		}
		if((rank === 7) || (file === 0))
		{
			endId = 80;
			break;
		}
		endId += moveDownLeft;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
	endId += moveDownLeft;
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	if(endId <= 63)
	{
		endSquare = document.querySelector("[squareId='" + endId + "']");
	}
	while(endId <= 63)
	{
		if((startRank === 7) || (startFile === 0))
		{
			break;
		}
		if(endSquare.children[0])
		{
			if(kingSquare.children[0].id.includes("white"))
			{
				if(endSquare.children[0].id.includes("blackQueen") || endSquare.children[0].id.includes("blackBishop"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			else
			{
				if(endSquare.children[0].id.includes("whiteQueen") || endSquare.children[0].id.includes("whiteBishop"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			break;
		}
		if((rank === 7) || (file === 0))
		{
			break;
		}
		endId += moveDownLeft;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}

	// Move down
	endId = kingSquareId + moveDown;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	while(endId <= 63)
	{
		if(endSquare.children[0])
		{
			piece = endSquare.children[0];
			break;
		}
		endId += moveDown;
		endSquare = document.querySelector("[squareId='" + endId + "']");
	}
	endId += moveDown;
	if(endId <= 63)
	{
		endSquare = document.querySelector("[squareId='" + endId + "']");
	}
	while(endId <= 63)
	{
		if(endSquare.children[0])
		{
			if(kingSquare.children[0].id.includes("white"))
			{
				if(endSquare.children[0].id.includes("blackQueen") || endSquare.children[0].id.includes("blackRook"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			else
			{
				if(endSquare.children[0].id.includes("whiteQueen") || endSquare.children[0].id.includes("whiteRook"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			break;
		}
		endId += moveDown;
		endSquare = document.querySelector("[squareId='" + endId + "']");
	}
	
	// Move down right
	endId = kingSquareId + moveDownRight;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	while(endId <= 63)
	{
		if((startRank === 7) || (startFile === 7))
		{
			break;
		}
		if(endSquare.children[0])
		{
			piece = endSquare.children[0];
			break;
		}
		if((rank === 7) || (file === 7))
		{
			endId = 80;
			break;
		}
		endId += moveDownRight;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
	endId += moveDownRight;
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	if(endId <= 63)
	{
		endSquare = document.querySelector("[squareId='" + endId + "']");
	}
	while(endId <= 63)
	{
		if((startRank === 7) || (startFile === 7))
		{
			break;
		}
		if(endSquare.children[0])
		{
			if(kingSquare.children[0].id.includes("white"))
			{
				if(endSquare.children[0].id.includes("blackQueen") || endSquare.children[0].id.includes("blackBishop"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			else
			{
				if(endSquare.children[0].id.includes("whiteQueen") || endSquare.children[0].id.includes("whiteBishop"))
				{
					piece.setAttribute("isPinned", '1')
				}
			}
			break;
		}
		if((rank === 7) || (file === 7))
		{
			break;
		}
		endId += moveDownRight;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
}

function checkAndPushLegalMove(endSquare)
{
	if(endSquare.children[0])
	{
		if(moveStartPiece.id.includes("white"))
		{
			if(endSquare.children[0].id.includes("black"))
			{
				legalMoves.push(Number(endSquare.getAttribute("squareId")));
			}
			else
			{
				endSquare.children[0].setAttribute("isDefendedWhite", '');
			}
		}
		else
		{
			if(endSquare.children[0].id.includes("white"))
			{
				legalMoves.push(Number(endSquare.getAttribute("squareId")));
			}
			else
			{
				endSquare.children[0].setAttribute("isDefendedBlack", '');
			}
		}
	}
	else
	{
		legalMoves.push(Number(endSquare.getAttribute("squareId")));
	}
}

function onlyAllowBlockWhite(blockMoves)
{
	let tempBlockIndex;
	let tempBlockMoves = [];
	let i;
	let j;

	for(i = 0; i < 16; i++)
	{
		if(i === 12)
		{
			continue;
		}
		for(j = 0; j < blockMoves.length; j++)
		{
			tempBlockIndex = allLegalMovesWhite[i].indexOf(blockMoves[j]);
			if(tempBlockIndex !== -1)
			{
				tempBlockMoves.push(blockMoves[j])
			}
		}
		allLegalMovesWhite[i] = tempBlockMoves.map((x) => x);
		tempBlockMoves = [];
	}
}

function onlyAllowBlockBlack(blockMoves)
{
	let tempBlockIndex;
	let tempBlockMoves = [];
	let i;
	let j;

	for(i = 0; i < 16; i++)
	{
		if(i === 4)
		{
			continue;
		}
		for(j = 0; j < blockMoves.length; j++)
		{
			tempBlockIndex = allLegalMovesBlack[i].indexOf(blockMoves[j]);
			if(tempBlockIndex !== -1)
			{
				tempBlockMoves.push(blockMoves[j])
			}
		}
		allLegalMovesBlack[i] = tempBlockMoves.map((x) => x);
		tempBlockMoves = [];
	}
}

function handleCheckQueen(kingSquareId, pieceSquareId, kingIsWhite)
{
	let blockMoves = [];
	let tempSquareId;

	if(kingSquareId > pieceSquareId)
	{
		if(((kingSquareId - pieceSquareId) % 8) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 8;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else if(Math.floor(kingSquareId / numRanks) === Math.floor(pieceSquareId / numRanks))
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId++;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else if(((kingSquareId - pieceSquareId) % 7) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else if(((kingSquareId - pieceSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	else
	{
		if(((pieceSquareId - kingSquareId) % 8) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 8;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else if(Math.floor(kingSquareId / numRanks) === Math.floor(pieceSquareId / numRanks))
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId--;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else if(((pieceSquareId - kingSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else if(((pieceSquareId - kingSquareId) % 7) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
}

function handleCheckRook(kingSquareId, pieceSquareId, kingIsWhite)
{
	let blockMoves = [];
	let tempSquareId;

	if(kingSquareId > pieceSquareId)
	{
		if(((kingSquareId - pieceSquareId) % 8) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 8;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId++;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	else
	{
		if(((pieceSquareId - kingSquareId) % 8) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 8;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId--;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
}

function handleCheckBishop(kingSquareId, pieceSquareId, kingIsWhite)
{
	let blockMoves = [];
	let tempSquareId;

	console.log(allLegalMovesBlack);
	console.log(allLegalMovesWhite);

	if(kingSquareId > pieceSquareId)
	{
		if(((kingSquareId - pieceSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	else
	{
		if(((pieceSquareId - kingSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	console.log(blockMoves);
	console.log(allLegalMovesBlack);
	console.log(allLegalMovesWhite);
}

function handleCheckKnight(kingSquareId, pieceSquareId, kingIsWhite)
{
	let blockMoves = [];
	let tempSquareId;

	console.log(allLegalMovesBlack);
	console.log(allLegalMovesWhite);

	if(kingSquareId > pieceSquareId)
	{
		if(((kingSquareId - pieceSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	else
	{
		if(((pieceSquareId - kingSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	console.log(blockMoves);
	console.log(allLegalMovesBlack);
	console.log(allLegalMovesWhite);
}

function handleCheckPawn(kingSquareId, pieceSquareId, kingIsWhite)
{
	let blockMoves = [];
	let tempSquareId;

	console.log(allLegalMovesBlack);
	console.log(allLegalMovesWhite);

	if(kingSquareId > pieceSquareId)
	{
		if(((kingSquareId - pieceSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId += 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	else
	{
		if(((pieceSquareId - kingSquareId) % 9) === 0)
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 9;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
		else
		{
			tempSquareId = pieceSquareId;
			while(tempSquareId !== kingSquareId)
			{
				blockMoves.push(tempSquareId);
				tempSquareId -= 7;
			}
			if(kingIsWhite)
			{
				onlyAllowBlockWhite(blockMoves);
			}
			else
			{
				onlyAllowBlockBlack(blockMoves);
			}
		}
	}
	console.log(blockMoves);
	console.log(allLegalMovesBlack);
	console.log(allLegalMovesWhite);
}

function handleCheck(kingSquareId)
{
	let checkingId1 = -1;
	let checkingId2 = -1;
	let kingMovesTemp;
	let pieceSquareId;
	let piece;
	let i;

	colorTurnIsInCheck = true;
	if(colorTurn === 'white')
	{
		for(i = 0; i < 16; i++)
		{
			if(allLegalMovesBlack[i].indexOf(kingSquareId) !== -1)
			{
				checkingId1 = i;
				break;
			}
		}
		for(i++; i < 16; i++)
		{
			if(allLegalMovesBlack[i].indexOf(kingSquareId) !== -1)
			{
				checkingId2 = i;
				break;
			}
		}

		piece = document.querySelector("[pieceId='" + checkingId1 + "']");
		pieceSquareId = Number(piece.parentNode.getAttribute("squareId"));
		if((checkingId2 !== -1) || (piece.id.includes("Knight")) || (piece.id.includes("Pawn")))
		{
			kingMovesTemp = allLegalMovesWhite[28 - 16].map((x) => x);
			allLegalMovesWhite = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
			allLegalMovesWhite[28 - 16] = kingMovesTemp.map((x) => x);
		}
		else if(piece.id.includes("Queen"))
		{
			handleCheckQueen(kingSquareId, pieceSquareId, true);
		}
		else if(piece.id.includes("Rook"))
		{
			handleCheckRook(kingSquareId, pieceSquareId, true);
		}
		else if(piece.id.includes("Bishop"))
		{
			handleCheckBishop(kingSquareId, pieceSquareId, true);
		}
	}
	else
	{
		for(i = 0; i < 16; i++)
		{
			if(allLegalMovesWhite[i].indexOf(kingSquareId) !== -1)
			{
				checkingId1 = i;
				break;
			}
		}
		for(i++; i < 16; i++)
		{
			if(allLegalMovesWhite[i].indexOf(kingSquareId) !== -1)
			{
				checkingId2 = i;
				break;
			}
		}

		piece = document.querySelector("[pieceId='" + (checkingId1 + 16) + "']");
		pieceSquareId = Number(piece.parentNode.getAttribute("squareId"));
		if(checkingId2 !== -1)
		{
			kingMovesTemp = allLegalMovesBlack[4].map((x) => x);
			allLegalMovesBlack = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
			allLegalMovesBlack[4] = kingMovesTemp.map((x) => x);
		}
		else if(piece.id.includes("Queen"))
		{
			handleCheckQueen(kingSquareId, pieceSquareId, false);
		}
		else if(piece.id.includes("Rook"))
		{
			handleCheckRook(kingSquareId, pieceSquareId, false);
		}
		else if(piece.id.includes("Bishop"))
		{
			handleCheckBishop(kingSquareId, pieceSquareId, false);
		}
		else if(piece.id.includes("Knight"))
		{
			handleCheckKnight(kingSquareId, pieceSquareId, false);
		}
		else if(piece.id.includes("Pawn"))
		{
			handleCheckPawn(kingSquareId, pieceSquareId, false);
		}
	}
}

function isUnderAttack(endId, isKingWhite)
{
	let pawnSquare1;
	let pawnSquare2;
	let moves;
	let endRank = Math.floor(endId / numRanks);
	let endFile = endId % numFiles;
	let endSquare = document.querySelector("[squareId='" + endId + "']");;

	if(isKingWhite)
	{
		if(endSquare.children[0] && endSquare.children[0].hasAttribute("isDefendedBlack"))
		{
			return true;
		}

		if((endFile === 7) && (endRank !== 0))
		{
			pawnSquare1 = document.querySelector("[squareId='" + (endId + moveUpLeft) + "']");
			if(pawnSquare1.children[0] && pawnSquare1.children[0].id.includes("blackPawn"))
			{
				return true;
			}
		}
		else if((endFile === 0) && (endRank !== 0))
		{
			pawnSquare2 = document.querySelector("[squareId='" + (endId + moveUpRight) + "']");
			if(pawnSquare2.children[0] && pawnSquare2.children[0].id.includes("blackPawn"))
			{
				return true;
			}
		}
		else if(endRank !== 0)
		{
			pawnSquare1 = document.querySelector("[squareId='" + (endId + moveUpLeft) + "']");
			pawnSquare2 = document.querySelector("[squareId='" + (endId + moveUpRight) + "']");
			if((pawnSquare1.children[0] && pawnSquare1.children[0].id.includes("blackPawn")) || (pawnSquare2.children[0] && pawnSquare2.children[0].id.includes("blackPawn")))
			{
				return true;
			}
		}

		for(let i = 0; i < 16; i++)
		{
			moves = allLegalMovesBlack[i];
			if(moves.includes(endId))
			{
				return true;
			}
		}
		return false;
	}
	else
	{
		if(endSquare.children[0] && endSquare.children[0].hasAttribute("isDefendedWhite"))
		{
			return true;
		}

		if((endFile === 7) && (endRank !== 7))
		{
			pawnSquare1 = document.querySelector("[squareId='" + (endId + moveDownLeft) + "']");
			if(pawnSquare1.children[0] && pawnSquare1.children[0].id.includes("whitePawn"))
			{
				return true;
			}
		}
		else if((endFile === 0) && (endRank !== 7))
		{
			pawnSquare2 = document.querySelector("[squareId='" + (endId + moveDownRight) + "']");
			if(pawnSquare2.children[0] && pawnSquare2.children[0].id.includes("whitePawn"))
			{
				return true;
			}
		}
		else if(endRank !== 7)
		{
			pawnSquare1 = document.querySelector("[squareId='" + (endId + moveDownLeft) + "']");
			pawnSquare2 = document.querySelector("[squareId='" + (endId + moveDownRight) + "']");
			if((pawnSquare1.children[0] && pawnSquare1.children[0].id.includes("whitePawn")) || (pawnSquare2.children[0] && pawnSquare2.children[0].id.includes("whitePawn")))
			{
				return true;
			}
		}

		for(let i = 0; i < 16; i++)
		{
			moves = allLegalMovesWhite[i];
			if(moves.includes(endId))
			{
				return true;
			}
		}
		return false;
	}
}

function findLegalMovesKing()
{
	let endId;
	let endSquare;
	let startRank = Math.floor(moveStartId / numRanks);
	let startFile = moveStartId % numFiles;
	let castleSquare2;
	let castleSquareId3;
	let castleSquare3;
	let leftRook;
	let rightRook;
	let isKingWhite;

	if(moveStartPiece.id.includes("white"))
	{
		isKingWhite = true;
	}	
	else
	{
		isKingWhite = false;
	}

	for(let i = 0; i < 3; i++)
	{
		if((startRank === 0) || ((startFile === 7) && (i === 2)))
		{
			break;
		}
		if((startFile === 0) && (i === 0))
		{
			continue;
		}
		endId = moveStartId + moveUpLeft + i;
		if((endId > 0) && (endId < 63) && !isUnderAttack(endId, isKingWhite))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
		
	}

	for(let i = 0; i < 3; i++)
	{
		endId = moveStartId + moveLeft + i;
		if((i === 0) && (startFile !== 0))
		{
			if((endId > 0) && (endId < 63) && !isUnderAttack(endId, isKingWhite))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				checkAndPushLegalMove(endSquare);

				endId = moveStartId + (moveLeft * 2);
				castleSquare2 = document.querySelector("[squareId='" + endId + "']");
				castleSquareId3 = moveStartId + (moveLeft * 3);
				castleSquare3 = document.querySelector("[squareId='" + castleSquareId3 + "']");
				if(moveStartPiece.id.includes("white"))
				{
					leftRook = document.querySelector("[pieceId='" + 24 + "']");
				}
				else
				{
					leftRook = document.querySelector("[pieceId='" + 0 + "']");
				}
				if((endId > 0) && (endId < 63) && !isUnderAttack(endId, isKingWhite) && !isUnderAttack(castleSquareId3, isKingWhite) && !endSquare.children[0] && !castleSquare2.children[0] && !castleSquare3.children[0] && (Number(moveStartPiece.getAttribute("hasMoved")) === 0) && (Number(leftRook.getAttribute("hasMoved")) === 0))
				{
					endSquare = document.querySelector("[squareId='" + endId + "']");
					checkAndPushLegalMove(endSquare);;
				}
			}
		}
		else if((i === 2) && (startFile !== 7))
		{
			if((endId > 0) && (endId < 63) && !isUnderAttack(endId, isKingWhite))
			{
				endSquare = document.querySelector("[squareId='" + endId + "']");
				checkAndPushLegalMove(endSquare);

				endId = moveStartId + (moveRight * 2);
				castleSquare2 = document.querySelector("[squareId='" + endId + "']");
				if(moveStartPiece.id.includes("white"))
				{
					rightRook = document.querySelector("[pieceId='" + 31 + "']");
				}
				else
				{
					rightRook = document.querySelector("[pieceId='" + 7 + "']");
				}
				if((endId > 0) && (endId < 63) && !isUnderAttack(endId, isKingWhite) && !endSquare.children[0] && !castleSquare2.children[0] && (Number(moveStartPiece.getAttribute("hasMoved")) === 0) && (Number(rightRook.getAttribute("hasMoved")) === 0))
				{
					endSquare = document.querySelector("[squareId='" + endId + "']");
					checkAndPushLegalMove(endSquare);;
				}
			}
		}
		/*else if((i === 1) && isUnderAttack(endId, isKingWhite))
		{
			handleCheck();
		}*/
	}

	for(let i = 0; i < 3; i++)
	{
		if((startRank === 7) || ((startFile === 7) && (i === 2)))
		{
			break;
		}
		if((startFile === 0) && (i === 0))
		{
			continue;
		}
		endId = moveStartId + moveDownLeft + i;
		if((endId > 0) && (endId < 63) && !isUnderAttack(endId, isKingWhite))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
	}
}

function findLegalMovesRook()
{
	let endId;
	let endSquare;
	let startRank = Math.floor(moveStartId / numRanks);
	let startFile = moveStartId % numFiles;
	let rank;
	let file;
	
	// Move up
	endId = moveStartId + moveUp;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	while((endId >= 0) && (endId <= 63))
	{
		if(startRank === 0)
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((rank === 0) || (rank === 7))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveUp;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
	}
	
	// Move down
	endId = moveStartId + moveDown;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	while((endId >= 0) && (endId <= 63))
	{
		if(startRank === 7)
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((rank === 0) || (rank === 7))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveDown;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
	}
	
	// Move left
	endId = moveStartId + moveLeft;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	file = (endId % numFiles);
	while((endId >= 0) && (endId <= 63))
	{
		if(startFile === 0)
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((file === 0) || (file === 7))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveLeft;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		file = (endId % numFiles);
	}
	
	// Move right
	endId = moveStartId + moveRight;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	file = (endId % numFiles);
	while((endId >= 0) && (endId <= 63))
	{
		if(startFile === 7)
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((file === 0) || (file === 7))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveRight;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		file = (endId % numFiles);
	}
}

function findLegalMovesBishop()
{
	let endId;
	let endSquare;
	let startRank = Math.floor(moveStartId / numRanks);
	let startFile = moveStartId % numFiles;
	let rank;
	let file;
	
	// Move up left
	endId = moveStartId + moveUpLeft;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	while((endId >= 0) && (endId <= 63))
	{
		if((startRank === 0) || (startFile === 0))
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((rank === 0) || (file === 0))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveUpLeft;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
	
	// Move up right
	endId = moveStartId + moveUpRight;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	while((endId >= 0) && (endId <= 63))
	{
		if((startRank === 0) || (startFile === 7))
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((rank === 0) || (file === 7))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveUpRight;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
	
	// Move down left
	endId = moveStartId + moveDownLeft;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	while((endId >= 0) && (endId <= 63))
	{
		if((startRank === 7) || (startFile === 0))
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((rank === 7) || (file === 0))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveDownLeft;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
	
	// Move down right
	endId = moveStartId + moveDownRight;
	endSquare = document.querySelector("[squareId='" + endId + "']");
	rank = Math.floor(endId / numRanks);
	file = (endId % numFiles);
	while((endId >= 0) && (endId <= 63))
	{
		if((startRank === 7) || (startFile === 7))
		{
			break;
		}
		if(endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		if((rank === 7) || (file === 7))
		{
			checkAndPushLegalMove(endSquare);
			break;
		}
		checkAndPushLegalMove(endSquare);
		
		endId += moveDownRight;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		rank = Math.floor(endId / numRanks);
		file = (endId % numFiles);
	}
}

function findLegalMovesKnight()
{
	let endId;
	let endSquare;
	let file = (moveStartId % numFiles);
	
	if(file >= 2)
	{
		endId = moveStartId + moveUpLeft + moveLeft;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
		
		endId = moveStartId + moveDownLeft + moveLeft;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
	}
	
	if(file <= 5)
	{
		endId = moveStartId + moveUpRight + moveRight;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
		
		endId = moveStartId + moveDownRight + moveRight;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
	}
	
	if(file !== 0)
	{
		endId = moveStartId + moveUpLeft + moveUp;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
		
		endId = moveStartId + moveDownLeft + moveDown;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
	}
	
	if(file !== 7)
	{
		endId = moveStartId + moveUpRight + moveUp;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}

		endId = moveStartId + moveDownRight + moveDown;
		if((endId >= 0) && (endId <= 63))
		{
			endSquare = document.querySelector("[squareId='" + endId + "']");
			checkAndPushLegalMove(endSquare);
		}
	}
}

function findLegalMovesPawn()
{
	let endId;
	let endSquare;
	let enPassantDiv;
	let enPassantSquare;
	let startRank = Math.floor(moveStartId / numRanks);
	let startFile = moveStartId % numFiles;
	let rank = Math.floor(moveStartId / numRanks);
	
	if(moveStartPiece.id.includes("white"))
	{
		endId = moveStartId + moveUp;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		if(!endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			
			endId = moveStartId + (moveUp * 2);
			endSquare = document.querySelector("[squareId='" + endId + "']");
			if((rank === 6) && (!endSquare.children[0]))
			{
				checkAndPushLegalMove(endSquare);
			}
		}
		
		if(!(startFile === 0))
		{
			endId = moveStartId + moveUpLeft;
			endSquare = document.querySelector("[squareId='" + endId + "']");
			if(endSquare.children[0] || endSquare.hasAttribute("enPassantBlack"))
			{
				checkAndPushLegalMove(endSquare);
			}
		}
		
		if(!(startFile === 7))
		{
			endId = moveStartId + moveUpRight;
			endSquare = document.querySelector("[squareId='" + endId + "']");
			if(endSquare.children[0] || endSquare.hasAttribute("enPassantBlack"))
			{
				checkAndPushLegalMove(endSquare);
			}
		}
	}
	else
	{
		endId = moveStartId + moveDown;
		endSquare = document.querySelector("[squareId='" + endId + "']");
		if(!endSquare.children[0])
		{
			checkAndPushLegalMove(endSquare);
			
			endId = moveStartId + (moveDown * 2);
			endSquare = document.querySelector("[squareId='" + endId + "']");
			if((rank === 1) && (!endSquare.children[0]))
			{
				checkAndPushLegalMove(endSquare);
			}
		}
		
		if(!(startFile === 0))
		{
			endId = moveStartId + moveDownLeft;
			endSquare = document.querySelector("[squareId='" + endId + "']");
			if(endSquare.children[0] || endSquare.hasAttribute("enPassantWhite"))
			{
				checkAndPushLegalMove(endSquare);
			}
		}
		
		if(!(startFile === 7))
		{
			endId = moveStartId + moveDownRight;
			endSquare = document.querySelector("[squareId='" + endId + "']");
			if(endSquare.children[0] || endSquare.hasAttribute("enPassantWhite"))
			{
				checkAndPushLegalMove(endSquare);
			}
		}
	}
}

function findLegalMoves()
{
	if(moveStartPiece.id.includes("King"))
	{
		findLegalMovesKing();
	}
	else if(moveStartPiece.id.includes("Queen"))
	{
		// Queen is the combination of a Rook and a Bishop
		findLegalMovesRook();
		findLegalMovesBishop();
	}
	else if(moveStartPiece.id.includes("Rook"))
	{
		findLegalMovesRook();
	}
	else if(moveStartPiece.id.includes("Bishop"))
	{
		findLegalMovesBishop();
	}
	else if(moveStartPiece.id.includes("Knight"))
	{
		findLegalMovesKnight();
	}
	else if(moveStartPiece.id.includes("Pawn"))
	{
		findLegalMovesPawn();
	}
	else
	{
		// Error
		return;
	}
}

function playIfValidMove()
{
	if(isSendingMove)
	{
		let rookMoveId;
		let rookMoveSquare;
		let rookPiece;
		let enPassantSquare;
	
		// If dropped back on starting square return or there are no legal moves
		if((moveStartId === moveEndId) || (legalMoves === []))
		{
			clearEnPassantNew();
			return;
		}
		// If a piece is on the target square run as capture
		else if(moveEndSquare.children[0])
		{
			if(moveStartPiece.id.includes("white"))
			{
				if((colorTurn === "white") && legalMoves.includes(moveEndId))
				{
					if((moveStartPiece.id.includes("King") || moveStartPiece.id.includes("Rook")) && (Number(moveStartPiece.getAttribute("hasMoved")) === 0))
					{
						moveStartPiece.setAttribute("hasMoved", 1);
					}
					moveEndSquare.append(moveStartPiece);
					moveEndSquare.children[0].remove();
				}
				else
				{
					return;
				}
			}
			else
			{
				if((colorTurn === "black") && legalMoves.includes(moveEndId))
				{
					if((moveStartPiece.id.includes("King") || moveStartPiece.id.includes("Rook")) && (Number(moveStartPiece.getAttribute("hasMoved")) === 0))
					{
						moveStartPiece.setAttribute("hasMoved", 1);
					}
					moveEndSquare.append(moveStartPiece);
					moveEndSquare.children[0].remove();
				}
				else
				{
					return;
				}
			}
		}
		// If the target square is empty run as normal move
		else
		{
			if(moveStartPiece.id.includes("white"))
			{
				if((colorTurn === "white") && legalMoves.includes(moveEndId))
				{
					if((moveStartPiece.id.includes("King") || moveStartPiece.id.includes("Rook")) && (Number(moveStartPiece.getAttribute("hasMoved")) === 0))
					{
						moveStartPiece.setAttribute("hasMoved", 1);
					}
					if(moveStartPiece.id.includes("King"))
					{
						if((moveEndId - moveStartId) === 2)
						{
							rookPiece = document.querySelector("[pieceId='" + (15 + 16) + "']");
							rookMoveId = moveEndId - 1;
							rookMoveSquare = document.querySelector("[squareId='" + rookMoveId + "']");
							rookMoveSquare.append(rookPiece);
						}
						else if((moveStartId - moveEndId) === 2)
						{
							rookPiece = document.querySelector("[pieceId='" + (8 + 16) + "']");
							rookMoveId = moveEndId + 1;
							rookMoveSquare = document.querySelector("[squareId='" + rookMoveId + "']");
							rookMoveSquare.append(rookPiece);
						}
					}
					if(moveEndSquare.hasAttribute("enPassantBlack") && (moveStartPiece.id.includes("Pawn")))
					{
						let capturedId = Number(moveEndSquare.getAttribute("squareId")) + moveDown;
						let capturedSquare = document.querySelector("[squareId='" + capturedId + "']");
						moveEndSquare.append(moveStartPiece);
						capturedSquare.children[0].remove();
					}
					else
					{
						if(moveStartPiece.id.includes("Pawn") && ((moveDown * 2) === Math.abs(moveStartId - moveEndId)))
						{
							enPassantSquare = document.querySelector("[squareId='" + (moveEndId + moveDown) + "']");
							enPassantSquare.setAttribute("enPassantWhite", 0);
						}
						moveEndSquare.append(moveStartPiece);
					}
				}
				else
				{
					return;
				}
			}
			else
			{
				if((colorTurn === "black") && legalMoves.includes(moveEndId))
				{
					if((moveStartPiece.id.includes("King") || moveStartPiece.id.includes("Rook")) && (Number(moveStartPiece.getAttribute("hasMoved")) === 0))
					{
						moveStartPiece.setAttribute("hasMoved", 1);
					}
					if(moveStartPiece.id.includes("King"))
					{
						if((moveEndId - moveStartId) === 2)
						{
							rookPiece = document.querySelector("[pieceId='" + 7 + "']");
							rookMoveId = moveEndId - 1;
							rookMoveSquare = document.querySelector("[squareId='" + rookMoveId + "']");
							rookMoveSquare.append(rookPiece);
						}
						else if((moveStartId - moveEndId) === 2)
						{
							rookPiece = document.querySelector("[pieceId='" + 0 + "']");
							rookMoveId = moveEndId + 1;
							rookMoveSquare = document.querySelector("[squareId='" + rookMoveId + "']");
							rookMoveSquare.append(rookPiece);
						}
					}
					if(moveEndSquare.hasAttribute("enPassantWhite") && (moveStartPiece.id.includes("Pawn")))
					{
						let capturedId = Number(moveEndSquare.getAttribute("id")) + moveUp;
						let capturedSquare = document.querySelector("[squareId='" + capturedId + "']");
						moveEndSquare.append(moveStartPiece);
						capturedSquare.children[0].remove();
					}
					else
					{
						if(moveStartPiece.id.includes("Pawn") && ((moveDown * 2) === Math.abs(moveStartId - moveEndId)))
						{
							enPassantSquare = document.querySelector("[squareId='" + (moveEndId + moveUp) + "']");
							enPassantSquare.setAttribute("enPassantBlack", 0);
						}
						moveEndSquare.append(moveStartPiece);
					}
				}
				else
				{
					return;
				}
			}
		}
		
		changeColorTurn();
		progressEnPassant();
		clearDefended();
	
		let whiteKingSquareId = Number(document.querySelector("[pieceId='" + 28 + "']").parentNode.getAttribute("squareId"));
		let blackKingSquareId = Number(document.querySelector("[pieceId='" + 4 + "']").parentNode.getAttribute("squareId"));
	
		allLegalMovesWhite = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
		allLegalMovesBlack = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
		populateDefaultKingMoves(whiteKingSquareId, true);
		populateDefaultKingMoves(blackKingSquareId, false);
		if(colorTurn === "white")
		{
			handlePinnedPieces(whiteKingSquareId);
		}
		else
		{
			handlePinnedPieces(blackKingSquareId);
		}
		populateAllLegalMovesWhite();
		populateAllLegalMovesBlack();
		populateAllLegalMovesKings();
		clearPinned();
		
		
		
		if(colorTurn === "white")
		{
			if(isUnderAttack(whiteKingSquareId, true))
			{
				handleCheck(whiteKingSquareId);
			}
		}
		else
		{
			if(isUnderAttack(blackKingSquareId, false))
			{
				handleCheck(blackKingSquareId);
			}
		}
	}
	else
	{
		
	}
}

function clearPinned()
{
	let allPinned = document.querySelectorAll("[isPinned='1']");
	allPinned.forEach((pinnedPiece) =>
	{
		pinnedPiece.removeAttribute("isPinned");
	});
}

function clearDefended()
{
	let allDefendedWhite = document.querySelectorAll("[isDefendedWhite='']");
	allDefendedWhite.forEach((isDefendedWhite) =>
	{
		isDefendedWhite.removeAttribute("isDefendedWhite");
	});
	
	let allDefendedBlack = document.querySelectorAll("[isDefendedBlack='']");
	allDefendedBlack.forEach((isDefendedBlack) =>
	{
		isDefendedBlack.removeAttribute("isDefendedBlack");
	});
}

function clearEnPassantNew()
{
	let enPassantWhiteOlds = document.querySelectorAll("[enPassantWhite='0']");
	enPassantWhiteOlds.forEach((enPassantWhiteOld) =>
	{
		enPassantWhiteOld.removeAttribute("enPassantWhite");
	});
	
	let enPassantBlackOlds = document.querySelectorAll("[enPassantBlack='0']");
	enPassantBlackOlds.forEach((enPassantBlackOld) =>
	{
		enPassantBlackOld.removeAttribute("enPassantBlack");
	});
}

function progressEnPassant()
{
	let enPassantWhiteOlds = document.querySelectorAll("[enPassantWhite='1']");
	enPassantWhiteOlds.forEach((enPassantWhiteOld) =>
	{
		enPassantWhiteOld.removeAttribute("enPassantWhite");
	});
	
	let enPassantBlackOlds = document.querySelectorAll("[enPassantBlack='1']");
	enPassantBlackOlds.forEach((enPassantBlackOld) =>
	{
		enPassantBlackOld.removeAttribute("enPassantBlack");
	});
	
	let enPassantWhiteNews = document.querySelectorAll("[enPassantWhite='0']");
	enPassantWhiteNews.forEach((enPassantWhiteNew) =>
	{
		enPassantWhiteNew.setAttribute("enPassantWhite", 1);
	});
	
	let enPassantBlackNews = document.querySelectorAll("[enPassantBlack='0']");
	enPassantBlackNews.forEach((enPassantBlackNew) =>
	{
		enPassantBlackNew.setAttribute("enPassantBlack", 1);
	});
}

function showLegalMoves()
{
	hideLegalMoves();
	legalMoves.forEach((moveOption) => 
	{
		let square = document.querySelector("[squareId='" + moveOption + "']");
		if(square.children[0])
		{
			const svgDiv = document.createElement("div");
			svgDiv.id = "circlePiece";
			svgDiv.className = styles.uiElement;
			svgDiv.innerHTML = circlePiece;
			square.append(svgDiv);
			let svg = square.children[1].children[0];
			svg.setAttribute("viewBox", "0 0 300 300");
		}
		else
		{
			const svgDiv = document.createElement("div");
			svgDiv.id = "circleNoPiece";
			svgDiv.className = styles.uiElement;
			svgDiv.innerHTML = circleNoPiece;
			square.append(svgDiv);
			let svg = square.children[0].children[0];
			svg.setAttribute("viewBox", "8 8 496 496");
		}
	});
}

function hideLegalMoves()
{
	let uiElements = document.querySelectorAll("[class='" + styles.uiElement + "']");
	uiElements.forEach((uiElement) =>
	{
		uiElement.remove();
	});
}

function changeColorTurn()
{
	if(colorTurn === "white")
	{
		colorTurn = "black";
		//toBlackBoardPOV();
	}
	else
	{
		colorTurn = "white";
		//toWhiteBoardPOV();
	}
}

function toBlackBoardPOV()
{
	const squares = document.querySelectAll(".square");
	squares.forEach((square, i) =>
	{
		square.setAttribute("squareId", (numRanks * numFiles - 1) - i)
	});
}

function toWhiteBoardPOV()
{
	const squares = document.querySelectAll(".square");
	squares.forEach((square, i) =>
	{
		square.setAttribute("squareId", i)
	});
}

function dragStart(e)
{
	moveStartId = Number(e.target.parentNode.getAttribute("squareId"));
	moveStartPiece = e.target;
	
	let pieceId = Number(e.target.getAttribute("pieceId"));
	if(pieceId >= 16)
	{
		legalMoves = allLegalMovesWhite[pieceId - 16];
	}
	else
	{
		legalMoves = allLegalMovesBlack[pieceId];
	}
	if(((colorTurn === "white") && (moveStartPiece.id.includes("white"))) || ((colorTurn === "black") && (moveStartPiece.id.includes("black"))))
	{
		showLegalMoves();
	}
}

function dragOver(e)
{
	e.preventDefault();
	/*e = e || window.event;
	let dragX = e.pageX + 20;
	let dragY = e.pageY + 20;
	console.log("X: "+dragX+" Y: "+dragY);*/
}

function dragDrop(e)
{
	e.stopPropagation();
	if(e.target.children[0])
	{
		moveEndId = Number(e.target.parentNode.getAttribute("squareId"));
		moveEndSquare = e.target.parentNode;
	}
	else
	{
		moveEndId = Number(e.target.getAttribute("squareId"));
		moveEndSquare = e.target;
	}
	hideLegalMoves();
	playIfValidMove();
}

/*document.addEventListener("DOMContentLoaded", function ()
{
	createBoard();
});*/

export default createBoard;
