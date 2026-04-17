const GALLERY = [
  { title: "Play Your Prof Event", image: "images/events/PlayYourProf26v2.png" },
  { title: "Mailing Lists", image: "images/COMPCLUB_Poster.jpg" },
  { title: "ND Day Donations", image: "images/ND_DAY_COMPCLUB.jpg" }
];

buildCardGrid(
  'gallery-grid',
  'gallery-popups',
  GALLERY,
  (g, i) => `
    <img src="${g.image}" alt="${g.title}">
    <div class="card-body">
      <h3>${g.title}</h3>
      <button class="primary-button learn-more" data-index="${i}">View</button>
    </div>`,
  (g, i) => `
    <button class="close-popup" data-index="${i}">X</button>
    <img src="${g.image}" alt="${g.title}">
    <div class="card-body"><h2>${g.title}</h2></div>`
);
