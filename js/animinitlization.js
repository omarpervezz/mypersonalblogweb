import {
  addingAnimationInSpanIn,
  addingAnimationInSpanOut,
  addingAnimationMainTitleInSpanIn,
  addingAnimationMainTitleInSpanOut,
} from "./animation/addingAnimation.js";

// who I am text animation
var welcomeBlog = document.querySelectorAll(".titleOmar");
welcomeBlog.forEach((e) => {
  e.innerHTML = e.textContent.replace(/\S/g, '<span class="letter3">$&</span>');
});

// letter 3 target
let titleTarget = document.querySelectorAll(".titleOmar span");
titleTarget.forEach((e) => {
  e.addEventListener("mouseover", (ee) => {
    addingAnimationInSpanIn(ee);
  });
  e.addEventListener("mouseleave", (ee) => {
    addingAnimationInSpanOut(ee);
  });
});

anime.timeline({ loop: false }).add({
  targets: ".titleOmar .letter3",
  opacity: 1,
  translateY: 0,
  rotate: {
    value: 360,
    duration: 2000,
    easing: "easeInExpo",
  },
});

//anime text animation
var element = document.getElementsByClassName("text-animation");

for (var x = 0; x < element.length; x++) {
  const elementList = element[x];
  elementList.innerHTML = elementList.textContent.replace(
    /\S/g,
    '<span class="letter">$&</span>'
  );
}
anime.timeline({ loop: false }).add({
  targets: ".text-animation .letter",
  opacity: [0, 1],
  translateZ: 0,
  duration: 1000,
  easing: "easeOutExpo",
  autoplay: true,
  delay: (elem, index) => index * 260,
});
var omarLetter = document.querySelectorAll(".letter");
let blogTarget = document.querySelectorAll(".text-animation .letter");
blogTarget.forEach((e) => {
  e.addEventListener("mouseover", (ee) => {
    addingAnimationMainTitleInSpanIn(ee);
  });
  e.addEventListener("mouseleave", (ee) => {
    addingAnimationMainTitleInSpanOut(ee);
  });
});

// animation for all Title text
function animateButton(el, scale, duration, elasticity, delay, opacity) {
  anime.remove(el);
  anime({
    targets: el,
    scale: scale,
    opacity: opacity,
    duration: duration,
    elasticity: elasticity,
    delay: delay,
  });
}

function enterButton(el) {
  animateButton(el, 1.3, 800, 30, 200, [0.8]);
}

function leaveButton(el) {
  animateButton(el, 1.1, 600, 30, 200, [1]);
}
for (var i = 0; i < omarLetter.length; i++) {
  omarLetter[i].addEventListener(
    "mouseenter",
    function (e) {
      e.target.classList.add("enter_classs");
      enterButton(e.target);
    },
    false
  );

  omarLetter[i].addEventListener(
    "mouseleave",
    function (e) {
      e.target.classList.remove("enter_classs");
      leaveButton(e.target);
    },
    false
  );
}
