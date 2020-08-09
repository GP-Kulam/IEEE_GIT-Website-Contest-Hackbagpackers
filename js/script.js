$(document).ready(function () {
  var i = 0;
  var txt = "IEEE GIT";
  var speed = 100;

  typewriter();
  function typewriter() {
    if (i < txt.length) {
      document.getElementById("membership").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typewriter, speed);
    }
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      $(".navbar").removeClass("navbar-light");
      $(".navbar").addClass("navbar-dark");
      $(".navbar").addClass("on-scroll");
      document.getElementById("git").style.display = "none";
      document.getElementById("brand").src =
        "assets/images/logo/brand-logo-after.png";
    } else {
      $(".navbar").addClass("navbar-light");
      $(".navbar").removeClass("navbar-dark");
      $(".navbar").removeClass("on-scroll");
      document.getElementById("git").style.display = "block";
      document.getElementById("brand").src =
        "assets/images/logo/brand-logo-before.png";
    }
  });
});
