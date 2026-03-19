function loadNavbar() {
  document.getElementById('navbar').innerHTML = `
    <header class="header">
      <ul>
        <li class="logo"><img src="images/logo.png" /></li>
        <li><a href="home.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="resources.html">Resources</a></li>

        <li style="float: right"><a href="account.html">Account</a></li>
      </ul>
    </header>
  `;
}

loadNavbar();