$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '3438806746',
        limit: 1000,
        resolution: 'standard_resolution',
        accessToken: '3438806746.1677ed0.08aaebed82964218a48526c5b7268194',
        sortBy: 'none',
        template: '<div class="col-lg-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});