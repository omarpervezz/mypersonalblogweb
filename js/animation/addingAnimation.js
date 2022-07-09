export function addingAnimationMainTitleInSpanIn(element) {
  element.target.classList.add("bounceInScale");
  if (element.target.classList.contains("bounceInScale")) {
    element.target.classList.add("shake-slow");
  } else {
    console.log("there is nothing here to help you with this project");
  }
}
export function addingAnimationMainTitleInSpanOut(element) {
  if (element.target.classList.contains("bounceInScale", "shake-slow")) {
    element.target.classList.remove("bounceInScale", "shake-slow");
  } else {
    console.log("there is nothing here to help you with this project");
  }
}

export function addingAnimationInSpanIn(element) {
  element.target.classList.add("bounceInLeft", "shake-slow", "titleC");
}

export function addingAnimationInSpanOut(elem) {
  if (elem.target.classList.contains("bounceInLeft", "shake-slow")) {
    elem.target.classList.remove("shake-slow", "titleC");
  }
}
