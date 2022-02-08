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
  })

  document.body.addEventListener('click', evt => {
      evt.target.classList.toggle('mirror')
  })

  document.body.addEventListener('dblclick', evt =>{
      evt.target.outerHTML = ''
  })

  window.addEventListener('keydown', evt => {
      if (evt.key == 6) {
          document.body.innerHTML = '<h1>You Shall Not Pass!<h1>'
      }
  })
};
