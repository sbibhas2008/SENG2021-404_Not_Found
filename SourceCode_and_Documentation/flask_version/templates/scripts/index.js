


jQuery(document).ready(function($) {
    var bsDefaults = {
          offset: false,
          overlay: true,
          width: '330px'
       },
       bsMain = $('.bs-offset-main'),
       bsOverlay = $('.bs-canvas-overlay');

    $('[data-toggle="canvas"][aria-expanded="false"]').on('click', function() {
       var canvas = $(this).data('target'),
          opts = $.extend({}, bsDefaults, $(canvas).data()),
          prop = $(canvas).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left';

       if (opts.width === '100%')
          opts.offset = false;

       $(canvas).css('width', opts.width);
       if (opts.offset && bsMain.length)
          bsMain.css(prop, opts.width);

       $(canvas + ' .bs-canvas-close').attr('aria-expanded', "true");
       $('[data-toggle="canvas"][data-target="' + canvas + '"]').attr('aria-expanded', "true");
       if (opts.overlay && bsOverlay.length)
          bsOverlay.addClass('show');
       return false;
    });

    $('.bs-canvas-close, .bs-canvas-overlay').on('click', function() {
       var canvas, aria;
       if ($(this).hasClass('bs-canvas-close')) {
          canvas = $(this).closest('.bs-canvas');
          aria = $(this).add($('[data-toggle="canvas"][data-target="#' + canvas.attr('id') + '"]'));
          if (bsMain.length)
             bsMain.css(($(canvas).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left'), '');
       } else {
          canvas = $('.bs-canvas');
          aria = $('.bs-canvas-close, [data-toggle="canvas"]');
          if (bsMain.length)
             bsMain.css({
                'margin-left': '',
                'margin-right': ''
             });
       }
       canvas.css('width', '');
       aria.attr('aria-expanded', "false");
       if (bsOverlay.length)
          bsOverlay.removeClass('show');
       return false;
    });
});

var search_btn = document.getElementById("search_btn");
search_btn.addEventListener("click", function() {
    location.replace('./landmark.html')
});

var fetchData = {
    method: 'GET',
    headers: {

      'Accept': 'application/json',
    }
  }

  function randomNumber() {
   var minNumber = 0; // The minimum number you want
   var maxNumber = 5; // The maximum number you want
   var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
   $('#myNumber').html(randomnumber); // Sets content of <div> to number
   return false; // Returns false just to tidy everything up
}

  fetch('https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=4ZRwHTCnCEe1HV3smhin6xJBjTP9r8zwWyZz-8rM3a4&mode=retrieveLandmarks&prox=37.7442,-119.5931,1000', fetchData)
  .then(response => response.json())
  .then(data => console.log(data.Response.View))