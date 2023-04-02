export default function callProgrressBar(prop) {
  const progressBar = document.getElementsByClassName(prop)[0];
  const computedStyle = getComputedStyle(progressBar);
  const beggun = setInterval(setIt, 5);
  setTimeout(() => {
    clearInterval(beggun);
  }, 5000);

  function setIt() {
    const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
    progressBar.style.setProperty("--width", width + 0.1);
  }
}
