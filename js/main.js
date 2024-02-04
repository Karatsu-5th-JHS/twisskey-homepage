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