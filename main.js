var about = document.querySelector('.section-text--about');
var toggled = false;

function isInViewport(element) {
  const {top, bottom} = element.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);


  return (
    (top > 0 || bottom > 0) &&
    (top + 250) < vHeight
  );
}

window.addEventListener('scroll', () => {
  if (isInViewport(about) && !toggled) {
    about.classList.add('section-text--visible');
    toggled = true;
  };
});