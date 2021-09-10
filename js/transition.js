window.onload = () => {
  const transition = document.querySelector(".transition");
  const links = document.querySelectorAll(".link");

  setTimeout(() => {
    transition.classList.remove("is-active");
  }, 500);

  for (let i = 0; i < links.length; i++) {
    const link = links[i];

    link.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;
      transition.classList.add("is-active");
      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  }
};
