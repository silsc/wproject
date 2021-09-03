// Stack 1
let stack1 = document.querySelector(".stack1");

[...stack1.children].reverse().forEach((i) => stack1.append(i));

stack1.addEventListener("click", swap);

function swap(e) {
  let card1 = document.querySelector(".card1:last-child");
  if (e.target !== card1) return;
  card1.style.animation = "swap 700ms forwards";

  setTimeout(() => {
    card1.style.animation = "";
    stack1.prepend(card1);
  }, 700);
}

// Stack 2
let stack2 = document.querySelector(".stack2");

[...stack2.children].reverse().forEach((i) => stack2.append(i));

stack2.addEventListener("click", swap2);

function swap2(e) {
  let card2 = document.querySelector(".card2:last-child");
  if (e.target !== card2) return;
  card2.style.animation = "swap 700ms forwards";

  setTimeout(() => {
    card2.style.animation = "";
    stack2.prepend(card2);
  }, 700);
}

// Stack 3
let stack3 = document.querySelector(".stack3");

[...stack3.children].reverse().forEach((i) => stack3.append(i));

stack3.addEventListener("click", swap3);

function swap3(e) {
  let card3 = document.querySelector(".card3:last-child");
  if (e.target !== card3) return;
  card3.style.animation = "swap 700ms forwards";

  setTimeout(() => {
    card3.style.animation = "";
    stack3.prepend(card3);
  }, 700);
}
