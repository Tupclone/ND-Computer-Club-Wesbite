const PROJECTS = [
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

    PROJECTS.forEach(p => {
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
        </div>
      `;
      grid.appendChild(card);
    });