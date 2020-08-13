// Your code goes here

// mouseover 1
// mouseleave
// dblclick
// Header Logo
const hLogo = document.querySelector(".logo-heading");

function hLogoCB(event) {
  hLogo.style.color = "skyblue";
  console.log(event, "mouseover");
}
function hLogoCB1(event) {
  hLogo.style.color = "brown";
  console.log(event, "mouseleave");
}

function hLogoCB2(event) {
  hLogo.remove();
  console.log(event, "remove double click");
}

console.log(hLogo);
hLogo.addEventListener("mouseover", hLogoCB);
hLogo.addEventListener("mouseleave", hLogoCB1);
hLogo.addEventListener("dblclick", hLogoCB2);

// focus 2
// Nav Bar links
const navBar = document.querySelectorAll(".nav a");
console.log(navBar);

navBar.forEach((a) => {
  a.addEventListener("focus", () => {
    a.style.color = "lightgreen";
    a.style.backgroundColor = "transparent";
    console.log(a, "focus");
  });
});

// blur 3
// nav Bar links
const navBar1 = document.querySelectorAll(".nav a");
console.log(navBar1);

navBar1.forEach((a) => {
  a.addEventListener("blur", () => {
    a.style.backgroundColor = "blue";
    a.style.color = "crimson";
    console.log(a, "un-focus");
  });
});

// click 4
// p tags
const bodyP = document.querySelectorAll("body p");
console.log(bodyP);

bodyP.forEach((a) => {
  a.addEventListener("click", () => {
    a.style.color = "pink";
    console.log(a, "mouse main click");
  });
});

// dblclick 5
// h2 tags
const h2 = document.querySelectorAll("body h2");
console.log(h2);

h2.forEach((a) => {
  a.addEventListener("dblclick", () => {
    a.remove();
    console.log(a, "mouse double click");
  });
});

// mouseleave 6
// h4 tags
const h4 = document.querySelectorAll("body h4");
console.log(h4);

h4.forEach((a) => {
  a.addEventListener("mouseleave", () => {
    a.style.color = "red";
    console.log(a, "mouse leave");
  });
});

// drag 7
// img tags
const img = document.querySelectorAll("body img");
console.log(img);

img.forEach((a) => {
  a.addEventListener("drag", () => {
    a.remove();
    console.log(a, "drag remove");
  });
});

// mouseenter 8
// mouseleave
// Btn
const Btn1 = document.querySelectorAll(".destination .btn");
console.log(Btn1);

Btn1.forEach((a) => {
  a.addEventListener("mouseenter", () => {
    a.style.color = "yellow";
    a.style.backgroundColor = "black";
    console.log(a, "mouse enter");
  });

  a.addEventListener("mouseleave", () => {
    a.style.color = "violet";
    console.log(a, "mouse leave");
  });
  a.addEventListener("dblclick", () => {
    a.remove();
    console.log(a, "remove double click");
  });
});

// preventDefault
const aTag = document.querySelectorAll(".nav a");
console.log(aTag);

aTag.forEach((a) => {
  a.addEventListener("click", (a) => {
    a.preventDefault();
  });
});
