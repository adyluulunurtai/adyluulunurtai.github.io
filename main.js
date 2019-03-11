let navLinks = document.querySelectorAll("nav a");
const articles = document.querySelectorAll("div");
const navButton = document.getElementById("nav-menu");
let navLink = document.getElementById("navLink");

window.omload = function() {
  let menuStyle = getComputedStyle(navLink);
  navButton.onclick = function() {
    if (menuStyle.display == "none") {
      navLink.classList.add("show");
    } else {
      navLink.classList.remove("show");
    }
  };
};
let activeLink = navLinks[0]; // Home

navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", function(event) {
    // Deactivate current page
    activeLink.className = "";
    const urlParts = activeLink.href.split("#");
    const afterHashtag = urlParts.pop();
    const oldArticle = document.getElementById(afterHashtag);
    oldArticle.className = "";

    // Set new page
    activeLink = this;

    // Activate new page
    activeLink.className = "active";
    document.getElementById(activeLink.href.split("#").pop()).className =
      "show";

    event.preventDefault();
  });
});
