// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

$(document).ready(function () {
    var $wHeight = $(window).height();
    var $item = $('#loading');
    $item.height($wHeight);

    document.getElementById('loading').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    var $loader = $('.loader');

    $loader.css({
        'animation': 'animateflash 1s alternate infinite'
    });

    setTimeout(function () {
        $loader.css({
            'animation': 'animatebottom 2s'
        });
    }, 3100);

    setTimeout(function () {

        $item.css({
            'display': 'none',
            'position': 'static'
        });

        // document.getElementById('loaded').style.display = "block";
        $('#loaded').fadeIn(100, 'swing');
        onLoadComplete();
    }, 4000);
});



function onLoadComplete() {

    // carouselBackground("#intro");

    carouselBackground("#gallery");

    var waypointTitle = new Waypoint({
        element: document.getElementById('intro'),
        handler: function (direction) {
            var typedTitle = new Typed('#typed-title', {
                strings: [
                  '<h1 class="display-1 intro-text">Dhruv Kool Rajamani</h1>'
                ],
                typeSpeed: 30,
                loop: false,
                // onComplete: function(self) { scrollDown() },
                showCursor: false,
            });

            // var typedSubTitle = new Typed('#typed-subtitle', {
            //     strings: [
            //       '<h1 class="display-3 intro-text">Human Robot Interaction</h1>^13200',
            //       '<h1 class="display-3 intro-text">Surgical Robot Manipulation</h1>^11000',
            //       '<h1 class="display-3 intro-text">Humanoid Robots</h1>^12200',
            //       '<h1 class="display-3 intro-text">Mobile Robots</h1>^6500'
            //     ],
            //     typeSpeed: 30,
            //     backSpeed: 1,
            //     loop: true,
            //     // onComplete: function (self) { scrollDown() },
            //     showCursor: false,
            // });
            var typedAbout = new Typed('#typed-about', {
                strings: ['<h2 class="display-3 text-center about-title">About</h2><hr>^1000'],
                typeSpeed: 1,
                onComplete: function (self) { otherTitles() },
                showCursor: false,
            });
        }
    })

    function typeSubtitle() {
        var typedSubTitle = new Typed('#typed-subtitle', {
            strings: [
              '<h1 class="display-1 intro-text">Human Robot Interaction</h1>^2000',
              '<h1 class="display-1 intro-text">Surgical Robot Manipulation</h1>^2000',
              '<h1 class="display-1 intro-text">Humanoid Robots</h1>^2000',
              '<h1 class="display-1 intro-text">Mobile Robots</h1>^2000'
            ],
            typeSpeed: 30,
            backSpeed: 1,
            loop: true,
            // onComplete: function (self) { scrollDown() },
            showCursor: false,
        });
    };

    var waypointAbout = new Waypoint({
        element: document.getElementById('about'),
        handler: function (direction) {
            console.log('Scrolled to waypoint!');
        }
    })

    function scrollDown() {
        document.getElementById('about').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        // var typedAbout = new Typed('#typed-about', {
        //     strings: ['<h2 class="display-3 text-center about-title">About</h2><hr>^1000'],
        //     typeSpeed: 1,
        //     onComplete: function(self) { otherTitles() },
        //     showCursor: false,
        // });
    };

    function otherTitles() {
        var typedProj = new Typed('#typed-proj', {
            strings: ['<h2 class="display-3 text-center projects-title">Projects</h2><hr>^1000'],
            typeSpeed: 1,
            showCursor: false,
        });

        var typedPub = new Typed('#typed-pub', {
            strings: ['<h2 class="display-4 text-center publications-title">Publications</h2>^1000'],
            typeSpeed: 1,
            showCursor: false,
        });

        var typedPres = new Typed('#typed-pres', {
            strings: ['<h2 class="display-4 text-center publications-title">Conferences</h2>^1000'],
            typeSpeed: 1,
            showCursor: false,
        });
    };

    var item = document.getElementById('toggle1');
    var navbarState = item.getAttribute('aria-expanded');
    if (navbarState) {
        setTimeout(function () { }, 500);
        $(document).on('click', function () {
            setTimeout(function () { }, 1500);

            var x = document.getElementById('navbarSupportedContent');

            item.setAttribute('aria-expanded', 'false');
            item.setAttribute('class', 'navbar-toggler collapsed');

            x.setAttribute('class', 'navbar-collapse d-lg-inline-flex flex-lg-row-reverse collapse');
        });
    }
}

function carouselBackground(divId) {
    var $item = $(divId + ' .carousel-item');

    var $wHeight = $(window).height();

    $item.height($wHeight);

    $item.addClass('full-screen');

    $(divId + ' .carousel img').each(function () {
        var $src = $(this).attr('src');
        var $color = $(this).attr('data-color');
        $(this).parent().css({
            'background-image': 'url(' + $src + ')',
            'background-color': $color,
            // 'background-repeat': 'no-repeat',
            // 'background-position': 'center center',
            'background-attachment': 'fixed',
            // 'width': ,
        });
        $(this).remove();
    });

    $(window).on('resize', function () {
        $wHeight = $(window).height();
        $item.height($wHeight);
        // $wWidth = $(window).width();
        // $item.width($wWidth);
    });

    $item.eq(0).addClass('active');
}