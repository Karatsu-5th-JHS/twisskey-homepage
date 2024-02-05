//画面サイズ
$(window).on('load resize', function () {
    var winW = $(window).width();
    var devW = 650;
    if (winW <= devW) {
        $("body").css("width", "100%");
        $(".tiicon").css("width", "100px");
        $(".tiicon").css("border-radius", "30px");
    } else {
        $("body").css("width", "60%");
        $(".tiicon").css("width", "150px");
        $(".tiicon").css("border-radius", "40px");
    }
});

//navbarの透過
window.addEventListener("scroll", opacity_nav);
var heig = 10;
function opacity_nav() {
  if (window.scrollY > heig) {
    $('.navbar').addClass('shadow');
  } else if (window.scrollY < heig) {
    $('.navbar').removeClass('shadow');
  }
}