window.onscroll = function() {myFunction()};

var navbar = document.getElementById("menu");
var dropdowncontent = document.getElementById("dropdown-content");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
	document.body.style.paddingTop = navbar.offsetHeight + 'px'; //Add a padding to the body to avoid the text to jump
    navbar.classList.add("sticky")
	dropdowncontent.classList.add("fixed")

  } else {
    navbar.classList.remove("sticky")
	dropdowncontent.classList.remove("fixed")
	//document.body.style.paddingTop = 0;

  }

}