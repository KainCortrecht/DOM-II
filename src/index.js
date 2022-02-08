import "./less/index.less";

// Your code goes here!
window.onload = function (evt) {
  const heading = document.querySelector("h1");
  heading.textContent = "PARTY TIME!";

  window.addEventListener("copy", () => {
      navigator.clipboard.readText()
      .then(text => {
          heading.textContent += text;
      })
  });

  document.body.addEventListener('click', evt => {
      evt.target.classList.toggle('mirror')
  })
};
