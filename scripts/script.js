//  Logic for like btn start
const likeIcons = document.querySelectorAll(".like");
var likeNum = 0;

function likeOrNot(event) {
  const clickedItem = event.target;
  if (likeNum == 0) {
    clickedItem.style.color = "red";
    likeNum = 1;
  } else if (likeNum == 1) {
    clickedItem.style.color = "white";
    likeNum = 0;
  }
}

likeIcons.forEach((likeicon) => {
  likeicon.addEventListener("click", likeOrNot);
});
// Logic for like btn ends

// Logic for search bar display and hidden start
const srchBtn = document.querySelector("#leftSrchBtn");
const srchInp = document.querySelector(".search");
var srchBtnNum = 0;

function disSrch() {
  if (srchBtnNum == 0) {
    srchInp.style.visibility = "visible";
    srchBtn.style.color = "#1ed760";
    srchBtnNum = 1;
  } else if (srchBtnNum == 1) {
    srchInp.style.visibility = "hidden";
    srchBtn.style.color = "white";
    srchBtnNum = 0;
  }
}

srchBtn.addEventListener("click", disSrch);
// Logic for search bar display and hidden end

// Account profile logic start
const accountIcon = document.querySelector(".accountIcon");
const profileBox = document.querySelector(".profileBoxMain");
var profileNum = 0;

function profileView() {
  if (profileNum == 0) {
    accountIcon.style.backgroundColor = "#1ed760";
    profileBox.style.transform = "translateY(0px)";
    profileNum = 1;
  } else if (profileNum == 1) {
    accountIcon.style.backgroundColor = "black";
    profileBox.style.transform = "translateY(500px)";
    profileNum = 0;
  }
}

accountIcon.addEventListener("click", profileView);
// Account profile logic end

// Logic for Play button start
const playBtn = document.getElementById("playBtn");
const playLine = document.querySelector(".timeLineFill");
const playCir = document.querySelector(".timeCir");
var playNum = 0;

function plyPuseBtn() {
  if (playNum == 0) {
    playBtn.className = "fa-solid fa-pause";
    playLine.style.animationName = "timeFillAni";
    playCir.style.animationName = "timeCirAni";
    playLine.style.animationPlayState = "running";
    playCir.style.animationPlayState = "running";
    playBtn.style.color = "#1ed760";
    playNum = 1;
  } else if (playNum == 1) {
    playBtn.className = "fa-solid fa-play";
    playLine.style.animationPlayState = "paused";
    playCir.style.animationPlayState = "paused";
    playBtn.style.color = "white";
    playNum = 0;
  }
}

playBtn.addEventListener("click", plyPuseBtn);

// Logic for volume button start
const volBtn = document.getElementById("volBtn");
const volLine = document.querySelector(".volLine");
var volNum = 0;

function volLineDis() {
  if (volNum == 0) {
    volLine.style.width = "90.135px";
    volBtn.className = "fa-solid fa-volume-high";
    volBtn.style.color = "#1ed760";
    volNum = 1;
  } else if (volNum == 1) {
    volLine.style.width = "0px";
    volBtn.className = "fa-solid fa-volume-xmark";
    volBtn.style.color = "white";
    volNum = 0;
  }
}

volBtn.addEventListener("click", volLineDis);
// Logic for Volume button end
