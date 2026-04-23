const GALLERY = [
  { title: "Play Your Prof Event", image: "images/events/PlayYourProf26v2.png" },
  { title: "Mailing Lists", image: "images/COMPCLUB_Poster.jpg" },
  { title: "ND Day Donations", image: "images/ND_DAY_COMPCLUB.jpg" }
];

const grid = document.getElementById('gallery-grid');
GALLERY.forEach(item => {
  const card = document.createElement('div');
  card.className = 'gallery-card';
  card.innerHTML = `<img src="${item.image}" alt="${item.title}"><span>${item.title}</span>`;
  grid.appendChild(card);
});
