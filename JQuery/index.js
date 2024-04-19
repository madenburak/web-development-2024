$(document).ready(function () {
  $("h1").css("color", "aquamarine");
});

console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");

$("button").click(function () {
  $("h1").css("color", "purple");
  setTimeout(function () {
    $("h1").css("color", "aquamarine");
  }, 100);
});

$("input").keypress(function (event) {
  $("h2").text("Input is " + event.key);
});

$("h2").on("mouseover", function () {
  $("h2").css("color", "white");
});

$("button").click(function () {
  $("h2").hide();
});

$("button").click(function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 }); //consequtive added
});

$;
