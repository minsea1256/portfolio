<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

/*---video open--*/
function resizeYoutube() {
    $("iframe").each(function () {
        if (/^https?:\/\/www.youtube.com\/embed\//g.test($(this).attr("src"))) {
            $(this).css("width", "100%");
            $(this).css("height", Math.ceil(parseInt($(this).css("width")) * 480 / 854) + "px");
        }
    });
}
$(".play_btn").click(function () {
    $(".video_open").addClass('show');
    $(".back_bg").addClass('show');
    resizeYoutube();
});

$(".video_close_btn").click(function () {
    $('.video_open').removeClass('show');
    $('.back_bg').removeClass('show');
});

/*---video_bg--*/
/*<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mb.YTPlayer/3.3.4/jquery.mb.YTPlayer.min.js"></script>*/
document.write("<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery.mb.YTPlayer/3.3.4/jquery.mb.YTPlayer.min.js' ><" + "/script>");
jQuery(function () {
    jQuery('.YouTube').YTPlayer();
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});