const projectMedia = document.querySelector("#project-media");
const videoPromo = document.querySelector("#video-promo");
const videoPromoPlayBtn = document.querySelector("#video-promo-play");
const videoPromoPauseBtn = document.querySelector("#video-promo-pause");

const hiddenPlayBtn = () => {
  videoPromoPlayBtn.classList.add("hidden");
  videoPromoPauseBtn.classList.remove("hidden");
};
const hiddenPauseBtn = () => {
  videoPromoPauseBtn.classList.add("hidden");
  videoPromoPlayBtn.classList.remove("hidden");
};

const handlePlayVideo = () => {
  if (videoPromo.paused) {
    videoPromo.play();
    hiddenPlayBtn();
  }
};

const handlePauseVideo = () => {
  if (videoPromo.played) {
    videoPromo.pause();
    hiddenPauseBtn();
  }
};

const handleMediaOverMouse = () => {
  if (videoPromo.paused) {
    hiddenPauseBtn();
  } else {
    hiddenPlayBtn();
  }
};

const handleMediaOutMouse = () => {
  if (videoPromo.paused) {
    hiddenPauseBtn();
  } else {
    videoPromoPauseBtn.classList.add("hidden");
  }
};

videoPromoPlayBtn.addEventListener("click", handlePlayVideo);
videoPromoPauseBtn.addEventListener("click", handlePauseVideo);
projectMedia.addEventListener("mouseover", handleMediaOverMouse);
projectMedia.addEventListener("mouseout", handleMediaOutMouse);
