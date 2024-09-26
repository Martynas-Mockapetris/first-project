$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100 // - 200px (nav-height)
        }, 900, 'swing', function () {
            // Replace this with something that can be easily parsed and used by your code
            window.location.hash = '1' + target;
        });
    });
});