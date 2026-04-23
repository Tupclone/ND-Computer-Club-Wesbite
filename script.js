function loadNavbar() {
  document.getElementById('navbar').innerHTML = `
    <header class="header">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="resources.html">Resources</a></li>
      </ul>
    </header>
  `;
}

        // <li style="float: right"><img class="logo" src="images/logo.png"></li>        

loadNavbar();

function buildCardGrid(gridId, popupsId, items, cardHTML, popupHTML) {
  const grid = document.getElementById(gridId);
  const popups = document.getElementById(popupsId);
  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = cardHTML(item, i);
    grid.appendChild(card);

    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = popupHTML(item, i);
    popups.appendChild(popup);

    grid.querySelector(`.learn-more[data-index="${i}"]`).addEventListener('click', openPopup);
    popups.querySelector(`.close-popup[data-index="${i}"]`).addEventListener('click', closePopup);
  });
}

function openPopup(event) {
  const popups = event.target.closest('.card').parentElement.nextElementSibling;
  let openedI = parseInt(event.target.dataset.index);
  for (let i = 0; i < popups.children.length; ++i) {
    popups.children[i].style.display = i === openedI ? 'block' : 'none';
  }
  popups.style.display = 'block';
}

function closePopup(event) {
  event.target.closest('.card-popups').style.display = 'none';
}

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
    link.addEventListener('mouseleave', () => {
      preview.classList.remove('visible');
    });
  });
}