// public/app.js

document.querySelectorAll('.white-key, .black-key').forEach(key => {
  key.addEventListener('mousedown', () => playSound(key.dataset.note));
});

function playSound(note) {
  const audio = document.getElementById('audio');
  audio.src = `sounds/${note}.mp3`;
  audio.play();
}
