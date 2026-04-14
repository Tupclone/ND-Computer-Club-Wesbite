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

buildCardGrid(
  'project-grid',
  'project-popups',
  PROJECTS,
  (p, i) => `
    <img src="${p.image}" alt="${p.title}">
    <div class="card-body">
      <h3>${p.title}</h3>
      <span class="year">${p.year}</span>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      ${p.link ? `<a href="${p.link}" target="_blank">GitHub →</a>` : ''}
      <button class="learn-more" data-index="${i}">Learn More</button>
    </div>`,
  (p, i) => `
    <button class="close-popup" data-index="${i}">X</button>
    <img src="${p.image}" alt="${p.title}">
    <div class="card-body">
      <h2>${p.title}</h2>
      <span class="year">${p.year}</span>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      ${p.link ? `<a href="${p.link}" target="_blank">GitHub →</a>` : ''}
    </div>`
);
