const PROJECTS = [
  {
    title: "Sample Project",
    year: 2024,
    tags: ["Whatever"],
    image: "images/AI/ML/IMG_5311.JPG",
    description: "Description of project",
    members: ["John Doe", "Jane Doe"],
    link: "https://github.com/..."  // optional
  },
  {
    title: "Robotics Arm Controller",
    year: 2024,
    tags: ["Python", "Hardware"],
    image: "images/robotics-arm.jpg",
    description: "Controlled a 6-DOF arm using inverse kinematics.",
    members: ["Alice Chen", "Bob Park"],
    link: "https://github.com/..."  // optional
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


const grid = document.getElementById('project-grid');
const popups = document.getElementById('project-popups');

for (let i = 0; i < PROJECTS.length; ++i) {
  let p = PROJECTS[i];
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${p.image}" alt="${p.title}">
    <div class="card-body">
      <h3>${p.title}</h3>
      <span class="year">${p.year}</span>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      ${p.link ? `<a href="${p.link}" target="_blank">GitHub →</a>` : ''}
      <button class="learn-more" data-index="${i}">Learn More</button>
    </div>
  `;
  grid.appendChild(card);

  const popup = document.createElement('div');
  popup.className = "popup";
  popup.innerHTML = `
    <button class="close-popup" data-index="${i}">X</button>
    <img src="${p.image}" alt="${p.title}">
    <div class="card-body">
      <h2>${p.title}</h2>
      <span class="year">${p.year}</span>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      ${p.link ? `<a href="${p.link}" target="_blank">GitHub →</a>` : ''}
    </div>
  `;

  popups.appendChild(popup);
  document.querySelector(`.learn-more[data-index="${i}"]`).addEventListener("click", openPopup);
  document.querySelector(`.close-popup[data-index="${i}"]`).addEventListener("click", closePopup);
};

function openPopup(event) {
  let openedI = parseInt(event.target.dataset.index);
  for (let i = 0; i < popups.children.length; ++i) {
    if (i === openedI) {
      popups.children[i].style.display = "block";
    } else {
      popups.children[i].style.display = "none";
    }
  }
  popups.style.display = "block";
}

function closePopup() {
  popups.style.display = "none";
}