// create header for all pages
document.getElementById('navbar').innerHTML = `
  <header class="header">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="resources.html">Resources</a></li>
    </ul>
  </header>
`;

function renderGallery(gridId, items, cardHTML, cardClass = 'project-card') {
  const grid = document.getElementById(gridId);
  if (grid) grid.innerHTML = items.map((item, i) =>
    `<div class="${cardClass}">${cardHTML(item, i)}</div>`
  ).join('');
}

function createPopup(popupHTML) { // popupHTML is a string of HTML
  let popup = document.createElement("div");
  popup.addEventListener("click", e => {
    if (e.target.className === "popup-exit") document.body.removeChild(popup);
  });
  popup.className = "popup";
  popup.innerHTML = `
    <div class="popup-content">
      <button class="popup-exit">X</button>
      ${popupHTML}
    </div>`;

  document.body.appendChild(popup);
}

// create image gallery on home page
const GALLERY = [
  { title: "Play Your Prof Event", image: "images/events/PlayYourProf26v2.png" },
  { title: "Mailing Lists", image: "images/COMPCLUB_Poster.jpg" },
  { title: "ND Day Donations", image: "images/ND_DAY_COMPCLUB.jpg" }
];
renderGallery('gallery-grid', GALLERY, item => `<img src="${item.image}" alt="${item.title}"><span>${item.title}</span>`, 'photo-card');

// create popups for each photo on home-page
const PHOTOS = [...document.getElementsByClassName("photo-card")];
PHOTOS.forEach(photoCard => {
  let photoSrc = photoCard.querySelector("img").src;
  photoCard.addEventListener("click", () => {
    createPopup(`<img src=${photoSrc} />`);
  });
});

// create project gallery on project page
const PROJECTS = [
  {
    title: "AI/ML Competition",
    year: 2025,
    tags: ["AI"],
    image: "images/AI/ML/IMG_5316.JPG",
    description: "Our Machine Learning and Artificial Intelligence Project teams spent the whole semester using new tools to bring their ideas to life. Team Hidden Gems took first place!",
    members: ["David Meininger", "Stephen Playford", "Peter Bae", "Garret Connell", "Turner Piercy", "Lucky Borlongan", "Oliver Lee"],
    link: "https://github.com/..."
  },
  {
    title: "Cybersecurity Committee",
    year: 2025,
    tags: ["Python", "Hardware"],
    image: "images/cybersecurity/IMG_5275.JPG",
    description: "Focus on sharing knowledge of cyber security practices and techniques between team members for both exploring new interests and pursuing technical passions towards a career.",
    members: ["Alice Chen", "Bob Park"],
    link: "https://github.com/..."
  },
  {
    title: "Campus Event Scraper",
    year: 2023,
    tags: ["Node.js", "Web"],
    image: "images/event-scraper.png",
    description: "Scraped and aggregated campus events into a unified feed.",
    members: ["Dana Liu"],
    link: null
  }
];

// re-use render gallery for project
renderGallery(
  'project-grid',
  PROJECTS,
  p => `
    <img src="${p.image}" alt="${p.title}">
    <div class="project-card-body">
      <h3>${p.title}</h3>
      <span class="year">${p.year}</span>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join(', ')}</div>
      ${p.link ? `<a href="${p.link}" target="_blank">GitHub →</a>` : ''}
    </div>`
);


// resource page: create index list of resources
const indexList = document.querySelector('.index-list');
if (indexList) {
  const previewImg = document.getElementById('preview-img');
  const previewDesc = document.getElementById('preview-desc');
  const preview = document.querySelector('.index-preview');
  indexList.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      previewImg.src = link.dataset.preview;
      previewDesc.textContent = link.dataset.desc || '';
      preview.classList.add('visible');
    });
    link.addEventListener('mouseleave', () => preview.classList.remove('visible'));
  });
}
