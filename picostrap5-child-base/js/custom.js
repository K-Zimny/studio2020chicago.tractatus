// to enable the enqueue of this optional JS file,
// you'll have to uncomment a row in the functions.php file
// just read the comments in there mate

console.log("Custom js file loaded");

//add here your own js code. Vanilla JS welcome.

// Homepage Countdown timer

jQuery(".count span").each(function () {
  jQuery(this)
    .prop("Counter", 2021)
    .animate(
      {
        Counter: jQuery(this).text(),
      },
      {
        duration: 5000,
        easing: "swing",
        step: function (now) {
          jQuery(this).text(Math.ceil(now));
        },
      }
    );
});
