import {
  addingAnimationMainTitleInSpanIn,
  addingAnimationMainTitleInSpanOut,
} from "./animation/addingAnimation.js";

// Header Type = Fixed
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  // var box = $('.nav_bg_adder').height();
  // var header = $('nav').height();

  if (scroll > 20) {
    $("header").addClass("nav_bg_adder");
    $("header").addClass("vhs-flicker");
  } else {
    $("header").removeClass("nav_bg_adder");
  }
});

//anime text animation
var element = document.getElementsByClassName("text-animation")[0];
var element2 = document.getElementsByClassName("text-animation-short-info")[0];
// replace each char with <span class="letter">{char} </span>
element.innerHTML = element.textContent.replace(
  /\S/g,
  '<span class="letter">$&</span>'
);
element2.innerHTML = element2.textContent.replace(
  /\S/g,
  '<span class="letter2">$&</span>'
);

const omarTitle = element.querySelectorAll(".letter");
// first element
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
let headTitleTarget = document.querySelectorAll(".text-animation .letter");
headTitleTarget.forEach((e) => {
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
      e.target.classList.add("enter_class");
      enterButton(e.target);
    },
    false
  );

  omarLetter[i].addEventListener(
    "mouseleave",
    function (e) {
      e.target.classList.remove("enter_class");
      leaveButton(e.target);
    },
    false
  );
}
// second element short bio about omar
anime.timeline({ loop: false }).add({
  targets: ".text-animation-short-info .letter2",
  scale: [3, 1],
  opacity: [0, 1],
  translateZ: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: (elem, index) => index * 60,
});
