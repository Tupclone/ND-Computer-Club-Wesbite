const GALLERY = [
  { title: "Caption", image: "images/events/PlayYourProf26v2.png" },
  { title: "Caption", image: "images/AI/ML/IMG_5313.JPG" },
  { title: "Caption", image: "images/AI/ML/IMG_5314.JPG" }
];

buildCardGrid(
  'gallery-grid',
  'gallery-popups',
  GALLERY,
  (g, i) => `
    <img src="${g.image}" alt="${g.title}">
    <div class="card-body">
      <h3>${g.title}</h3>
      <button class="learn-more" data-index="${i}">View</button>
    </div>`,
  (g, i) => `
    <button class="close-popup" data-index="${i}">X</button>
    <img src="${g.image}" alt="${g.title}">
    <div class="card-body"><h2>${g.title}</h2></div>`
);
