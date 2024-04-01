window.addEventListener('scroll', function() {
    var navBar = document.querySelector('.navigationBar-2');
    var scrollPosition = window.scrollY;

    var threshold = 750; 

    if (scrollPosition <= threshold) {
        navBar.classList.add('hidden');
    } else {
        navBar.classList.remove('hidden');
    }
});
