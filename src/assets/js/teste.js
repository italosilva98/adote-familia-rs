$(function () {
  $(".mdi-navigation-menu").click(function () {
    $("#nav-mobile").toggleClass("display");
  });
});
$(function () {
  $(".button-collapse").click(function () {
    $(".side-nav").toggleClass("display");
  });
});

$(document).ready(function () {
  $(".mdi-navigation-menu").click(function (event) {
    $(".navbar-collapse").collapse("hide");
  });
});
