// BG video iframe resize
const container = document.querySelector(".video-container");
const video = container.querySelector("iframe");
const videoAspectRatio = video.clientWidth / video.clientHeight;

video.style.height = `${container.clientHeight}px`;
video.style.width = `${container.clientWidth * videoAspectRatio}px`;
