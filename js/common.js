// sticky menu
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var inArraymethod = [
    "./img/second.png",
    "./img/mainlogo.png",
    "#fbed96",
    "#fff",
    "#000",
  ];
  var spreadingArray = [...inArraymethod];
  if (scroll > 20) {
    $("header").addClass("nav_bg_adder");
    $("header").addClass("vhs-flicker");
    logoSrcChange(spreadingArray[1], spreadingArray[2]);
  } else {
    $("header").removeClass("nav_bg_adder");
    logoSrcChange(spreadingArray[1], spreadingArray[3]);
  }
});
function logoSrcChange(src, color) {
  $(".logo-img").attr("src", src);
  $("header ul li a").css("color", color);
  $(".hamburger div").css("backgroundColor", color);
}
// pushbar initilize
const pushbar = new Pushbar({
  blur: true,
  overlay: true,
});
//open a pushbar
pushbar.open("mypushbar1");
//close all pushbars
pushbar.close();
