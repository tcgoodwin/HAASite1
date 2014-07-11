$(function() {
    $('.mmli1').click(function() { //Twitter Toggle
        $('.twitterContent').toggleClass('open');

        if ($('.youtubeContent').hasClass('open')) {
            $('.youtubeContent').toggleClass('open');
        }

        if ($('.flickrContent').hasClass('open')) {
            $('.flickrContent').toggleClass('open');
        }
        
        if ($('.aboutContent').hasClass('open')) {
            $('.aboutContent').toggleClass('open');
        }

        if ($('.contactUsContent').hasClass('open')) {
            $('.contactUsContent').toggleClass('open');
        }

    });
    
    $('.mmli2').click(function() { //Youtube Toggle
        $('.youtubeContent').toggleClass('open');

        if ($('.twitterContent').hasClass('open')) {
            $('.twitterContent').toggleClass('open');
        }

        if ($('.flickrContent').hasClass('open')) {
    	    $('.flickrContent').toggleClass('open');
        }
        
        if ($('.aboutContent').hasClass('open')) {
            $('.aboutContent').toggleClass('open');
        }

        if ($('.contactUsContent').hasClass('open')) {
            $('.contactUsContent').toggleClass('open');
        }

    });
    
    $('.mmli3').click(function() { //Flickr Toggle
        $('.flickrContent').toggleClass('open');

        if ($('.twitterContent').hasClass('open')) {
            $('.twitterContent').toggleClass('open');
        }

        if ($('.youtubeContent').hasClass('open')) {
    	    $('.youtubeContent').toggleClass('open');
        }

        if ($('.aboutContent').hasClass('open')) {
            $('.aboutContent').toggleClass('open');
        }

        if ($('.contactUsContent').hasClass('open')) {
            $('.contactUsContent').toggleClass('open');
        }

    });
    
    $('.burst1').click(function() { //About Toggle
        $('.aboutContent').toggleClass('open');

        if ($('.twitterContent').hasClass('open')) {
            $('.twitterContent').toggleClass('open');
        }

        if ($('.youtubeContent').hasClass('open')) {
            $('.youtubeContent').toggleClass('open');
        }

        if ($('.flickrContent').hasClass('open')) {
            $('.flickrContent').toggleClass('open');
        }

        if ($('.contactUsContent').hasClass('open')) {
            $('.contactUsContent').toggleClass('open');
        }

    });
    
    $('.footerlink1').click(function() { //Contact Us Toggle
        $('.contactUsContent').toggleClass('open');

        if ($('.twitterContent').hasClass('open')) {
            $('.twitterContent').toggleClass('open');
        }

        if ($('.youtubeContent').hasClass('open')) {
            $('.youtubeContent').toggleClass('open');
        }

        if ($('.flickrContent').hasClass('open')) {
            $('.flickrContent').toggleClass('open');
        }

        if ($('.aboutContent').hasClass('open')) {
            $('.aboutContent').toggleClass('open');
        }

    });

// Slide Toggles on About Div
    $('.aT3').click(function(e) {
      $('.abouts1').slideToggle(function() {
       // Animation complete.
      });
       e.preventDefault();
});
    $('.aT2').click(function() {
      $('.abouts2').slideToggle('slow', function() {
        // Animation complete.
      });
});
    $('.memberMenuListItem').click(function() { //Member Login Toggle
        $('.memberMenuListItem').toggleClass('open');
        $('.memberMenuList').toggleClass('open');
});
});

    $('.mobilefooter').click(function() {
      $('.fll').slideToggle('slow', function() {
        // Animation complete.
      });
});