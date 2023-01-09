// smooth scrolling to section
$(document).ready(() => {
    $('#home_service').click(() => {
        $('html,body').animate({
            'scrollTop': $('#home-visit-service').offset().top
        }, 800);
    });

    $('#night_time_house_calls').click(() => {
        $('html,body').animate({
            'scrollTop': $('#nighttime-house-calls').offset().top
        }, 800);
    });
});

// Show popup after page load
function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
    else document.getElementById('ac-wrapper').removeAttribute('style');
}
window.onload = function () {
    setTimeout(function () {
        PopUp('show');
    }, 1000);
}

// copy url
function copyUrl() {
    var getUrl = document.getElementById("copy_url");
    navigator.clipboard.writeText(getUrl.value);
}