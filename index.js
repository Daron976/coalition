const scroll = () => {
  if (window.scrollY != 0 && window.screen.width > 576) {
    document.querySelector("header").classList.add("header-background");
    document.querySelectorAll("a")[0].classList.add("black");
    document.querySelectorAll("a")[1].classList.add("black");
  } else {
    document.querySelector("header").classList.remove("header-background");
    document.querySelectorAll("a")[0].classList.remove("black");
    document.querySelectorAll("a")[1].classList.remove("black");
  }
};

