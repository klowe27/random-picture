function getRandomPicture() {
  const image = document.getElementById('random-image');
  fetch('https://picsum.photos/200/300')
    .then(data => image.setAttribute('src', data.url));
}