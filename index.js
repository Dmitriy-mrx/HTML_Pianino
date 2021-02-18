let keys = document.querySelectorAll(".key")


keys.forEach(key => {

  key.addEventListener('click', plays);
})

function plays(element) {
  let key = element.target;
  console.log(key);
  let note = document.getElementById(key.dataset.note)
  console.log(note);
  note.currentTime = 0;
  note.play()
}
