// Circle logo
const circleText = document.querySelector(".circle-char");
circleText.innerHTML = circleText.innerText
  .split("")
  .map(
    (char, i) =>
      `<span class='char' style="transform:rotate(${i * 16}deg)">${char}</span>`
  )
  .join("");
