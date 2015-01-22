/*$('a[href*=#]:not([href=#])').click(function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top-64
            }, 1000);
        }
    }
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-64
    }, 987);
    return false;
});*/

/*$(function(){
    var d = $('#main');
    var mobMen = $('nav');
    var dPosTop = d.offset().top+20;
    var win = $(window);
    win.scroll(function(e){
        var scrollTop = win.scrollTop();
        if(scrollTop <= dPosTop){
          d.show(669); 
         //d.css("visibility","visible");
         d.css({opacity: 0, visibility: "visible"}).animate({opacity: 1.0}, 1597);
         mobMen.slideUp();
        }
    });

}); */

$(function(){
  $('i.step.fi-align-justify').click(function(e){
      e.preventDefault();
      $('nav').slideToggle();
  });
});

$("#main").on("click", function(e){
    e.preventDefault();
    $('nav').slideUp();
});

//Read more

$(function(){ /* to make sure the script runs after page load */
    $('a.read_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */
        event.preventDefault(); /* prevent the a from changing the url */
        $(this).parents('.item').find('.more_text').slideToggle(); /* show the .more_text span */
        $('a.read_more').fadeOut();
    });
});

// SPY MENU Cache selectors

$('div#top-menu a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 50;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 987);

    return false;

})

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('#main section').each(function(i) {
            if ($(this).position().top <= windscroll + 51) {
                $('div.bh.active').removeClass('active');
                $('div.bh').eq(i).addClass('active');
            }
        });

    } else {

        $('div.bh.active').removeClass('active');
        $('div.bh a:first').addClass('active');
    }

}).scroll();

/* Carousel */

$(document).ready(function() {
  $("#owl-example").owlCarousel({
    items : 3,
    //Autoplay
    autoPlay : true,
    stopOnHover : true
  });
});

//Contact Form

$(document).ready(function () {
            //$("button[type=submit]").attr("disabled", "disabled");
            $("#commentForm").validate({
                rules: {
                    name: { 
                      required: true,
                      minlength: 2
                    },
                    email: {
                      required: true,
                      email: true
                    },
                    comment: {
                        required: true,
                        minlength: 5
                    }
                  },
                  messages: {
                    name: {
                      required: "Please specify your name",
                      minlength: "At least two characters are required"
                    },
                    email: {
                      required: "We need your email address to contact you",
                      email: "Your email address must be in the format of name@domain.com"
                    },
                    comment: {
                      required: "You need to enter some message",
                      minlength: "Please add something to the message field"
                    }
                  }, 
            });

            /*$('#commentForm').bind('change keyup', function() {
                if($(this).validate().checkForm()) {
                    $('button[type=submit]').attr('disabled', false);
                } else {
                    $('button[type=submit]').attr('disabled', true);
                }
            });*/

            $("button.submit").click(function () {
                if (!$("#commentForm").validate()) { // Not Valid
                    return false;
                } else {
                    //$("button.submit").prop('disabled', false);
                    $("#commentForm").submit()
                }
            });
        });

//Contact error removal and success

        $(document).on('submit', 'form#commentForm', function (e) {
            e.preventDefault();
            $('form#commentForm .error').remove();
            var hasError = false;
            if (!hasError) {
                $('form#commentForm input.submit').fadeOut('normal', function () {
                    $(this).parent().append('');
                });
                var formInput = $(this).serialize();
                $.post($(this).attr('action'), formInput, function (data) {
                    $('form#commentForm').slideUp("fast", function () {
                        $(this).before('<p class="success">¡Gracias! El correo ha sido exitosamente enviado; en breve nos pondremos en contacto.</p>');
                    });
                });
            }
            return false;
});

$(function(){
  $('#Container').mixItUp();
});