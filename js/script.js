let inputField = document.querySelector(".input-field")

inputField.addEventListener("click", () => {
  inputField.classList.toggle("active")
  inputField.placeholder = `Entering ${inputField.name}...`
})

$(".hero-slider").slick({
  fade: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  pauseOnFocus: false,
  dots: true,
})

$(".movie-wrapper").slick({
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
})
