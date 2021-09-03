// BG video iframe resize
const container = document.querySelector(".video-container");
const video = container.querySelector("iframe");
const videoAspectRatio = video.clientWidth / video.clientHeight;

video.style.height = `${container.clientHeight}px`;
if (window.innerWidth > "840px") {
  video.style.width = `${window.innerWidth * videoAspectRatio}px`;
} else {
  video.style.width = "3000px";
}
