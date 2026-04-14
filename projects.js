const PROJECTS = [
  {
    title: "AI/ML Competition",
    year: 2025,
    tags: ["Whatever"],
    image: "images/AI/ML/IMG_5316.JPG",
    description: "Our Machine Learning and Artificial Intelligence Project teams spent the whole semester using new tools to bring their ideas to life. Team Hidden Gems took first place!",
    members: ["David Meininger", "Stephen Playford", "Peter Bae", "Garret Connell", "Turner Piercy", "Lucky Borlongan", "Oliver Lee"],
    link: "https://github.com/..."  // optional
  },
  {
    title: "Cybersecurity Committee",
    year: 2025,
    tags: ["Python", "Hardware"],
    image: "images/cybersecurity/IMG_5275.JPG",
    description: "Focus on sharing knowledge of cyber security practices and techniques between team members for both exploring new interests and pursuing technical passions towards a career.",
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
