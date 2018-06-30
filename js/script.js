let slide = document.querySelector(".slide-show");
let slides = document.querySelectorAll(".slide-show__column");
let dots = document.querySelectorAll(".slide-show__list");
let slideIndex = 1;
let timeoutID;

const backImgUrl = [
  "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1529375177/wjkwxedurb1swhvefce4.jpg",
  "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1529024758/ovtanj7zjoxc7ljup43o.jpg",
  "https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1463380613/mvnrti-562.jpg"
];

const showSlides = n => {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < slides.length; i++) {
    dots[i].setAttribute("class", "slide-show__list");
  }

  slide.style.backgroundImage = "url(" + backImgUrl[slideIndex - 1] + ")";
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].setAttribute(
    "class",
    "slide-show__list slide-show__list--selected"
  );
  clearTimeout(timeoutID);
  timeoutID = setTimeout(autoSlides, 2000);
};

const plusSlides = n => {
  showSlides((slideIndex += n));
};

const currentSlide = n => {
  showSlides((slideIndex = n));
};

function autoSlides() {
  let i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < slides.length; i++) {
    dots[i].setAttribute("class", "slide-show__list");
  }

  slide.style.backgroundImage = "url(" + backImgUrl[slideIndex - 1] + ")";
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].setAttribute(
    "class",
    "slide-show__list slide-show__list--selected"
  );
  timeoutID = setTimeout(autoSlides, 4000);
}

autoSlides();
