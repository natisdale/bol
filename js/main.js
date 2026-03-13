/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMenu() {
    var x = document.getElementById("nav-main");
    if (x.style.height === "5rem") {
      x.style.height = "8rem";
    } else {
      x.style.height = "5rem";
    }
  } 