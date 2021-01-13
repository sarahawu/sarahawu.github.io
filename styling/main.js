$(document).ready(function(){

  // slick image carousel
  $('.chalk').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    dots: true
  });

  // lightbox
  $('.lightbox_trigger').click(function(e) {
    e.preventDefault();
    var image_href = $(this).attr('href');

    // if lightbox exists
    if ($('#lightbox').length > 0) {

      // insert img tag with clicked link's href as src value
      $('#content').html('<img src="' + image_href + '" />');

      // TODO: add transition here
      $('#lightbox').show();
    }

    // if lightbox does not exist
    else {

      // create HTML markup for lightbox window
      var lightbox = 
      '<div id="lightbox">' +
        //'<p> click to close </p>' +
        '<div id="content">' +
          '<img src="' + image_href + '" />' +
        '</div>' +
      '</div>';
    
      $('body').append(lightbox);
    }
  });
  
  // click anywhere to exit lightbox
  $('body').on('click', '#lightbox', function() {
    $('#lightbox').hide();
  });
});
