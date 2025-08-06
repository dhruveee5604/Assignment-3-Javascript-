const button = document.getElementById('loadCats');
const gallery = document.getElementById('gallery');

button.addEventListener('click', () => {
  gallery.innerHTML = ''; // clear old images
  loadCats(5); // load 5 cat images
});

function loadCats(count) {
  for (let i = 0; i < count; i++) {
     // Make a GET request to The Cat API
    fetch("https://api.thecatapi.com/v1/images/search", {
      headers: {
           // Pass the API key in the request header
        "x-api-key": "live_imx3jMJalWXYMSNOCxLRCBE38oLProoe8VEDbrlb1dVJwTWCNNBy8HyoWRq0cRR3"
      }
    })
    .then(res => res.json())
    .then(data => {
      const img = document.createElement('img');
      img.src = data[0].url;
       // Append the image to the gallery container
      gallery.appendChild(img);
    })
    .catch(err => {
      console.error('Error loading cat:', err);
    });
  }
}
