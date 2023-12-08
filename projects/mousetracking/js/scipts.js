document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".decoration").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
document.addEventListener("mousemove", parallaxReversed);
function parallaxReversed(event) {
  this.querySelectorAll(".decoration-reversed").forEach((shift) => {
    const position = shift.getAttribute("value");
    const y = (window.innerWidth - event.pageX * position) / 90;
    const x = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
$(window).on("load resize", function() {
  $('.target').toggleClass('hide', $(window).width() < 737);
});