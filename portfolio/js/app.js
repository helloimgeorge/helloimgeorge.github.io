$(document).foundation();


$('#skillsButton').on('click', function(event) {
  $('html, body').animate({
    scrollTop: $('#skills').offset().top
  }, 1000);
});

$('#projectsButton').on('click', function(event) {
  $('html, body').animate({
    scrollTop: $('#projects').offset().top
  }, 1000);
});



$('#imageSlider').slick({
  autoplay: true,
  autoplaySpeed: 1000,
  fade: true,
  arrows: false
});


$('.btn').hover(function(event) {
  $(this).addClass('buttonHover');
}, function(event) {
  $(this).removeClass('buttonHover');
});


$('.picture').hover(function(event) {
  $(this).addClass('hover');
}, function(event) {
  $(this).removeClass('hover');
});

$('.picture').on('click', function(event) {
  var divContainer = $(this).parent()[0];
  disappear();
  $(divContainer).show();
  if ($(divContainer).attr('focused') === 'false') {
    $(divContainer).switchClass('medium-4 large-4','medium-12 large-12', 1000, 'easeInOutQuad');
    $(divContainer).attr('focused', 'true');
  } else {
    $(divContainer).switchClass('medium-12 large-12','medium-4 large-4', 1000, 'easeInOutQuad', function() {
      appear();
    });
    $(divContainer).attr('focused', 'false');
  }
});

function disappear() {
  $('.picture').parent().hide();
};

function appear() {
  $('.picture').parent().show();
};
