$('.burger-menu').click(function () {
    $(this).toggleClass('open');
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("show");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-menu")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.height = '';
    body.style.overflowY = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById('myModal').classList.remove('show');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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