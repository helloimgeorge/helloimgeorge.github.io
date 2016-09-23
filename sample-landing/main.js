'use strict';

(function() {


var currentQuote = 0;
var quotes = $('.quote');
var quoteDots = $('.quote-dot');

function init() {
	setScreenQuote();
}

function scrollToAbout(event) {
	event.preventDefault();
	var element = document.getElementsByClassName('about')[0];
	var aboutYLocation = element.scrollTop + window.innerHeight;
	$('html, body').animate({ scrollTop: aboutYLocation}, 500);
}


function setScreenQuote() {
	quotes.each(function(i, element) {
		$(element).hide();
	});
	$(quotes[currentQuote]).fadeIn();

	quoteDots.each(function(i, element) {
		if (i === currentQuote) {
			$(element).removeClass('inactive');
		} else {
			$(element).addClass('inactive');
		}
	});
}

function setCurrentQuote(direction) {
	currentQuote += direction;
	if (currentQuote < 0) { 
		currentQuote = 4
	} else if (currentQuote > 4) {
		currentQuote = 0;
	}
	setScreenQuote();
}

function incrementLeft(event) { 
	setCurrentQuote(-1); 
	stopInterval();
}

function incrementRight(event) { 
	setCurrentQuote(1); 

}


function setCurrentDot(event) {
	var id = event.target.id;
	var number = Number(id[id.length - 1]);
	currentQuote = number;
	setScreenQuote();
	stopInterval();
}

function stopInterval() {
	clearInterval(quoteInterval);
}

function goToUrl(url) {
	window.location = url;
}




init();
$("#scroll-button").on('click', scrollToAbout);
$('#left-quote-btn').on('click', incrementLeft);
$('#right-quote-btn')
	.on('click', incrementRight)
	.on('click', stopInterval);

quoteDots.on('click', setCurrentDot);

var quoteInterval = setInterval(incrementRight, 3000);

$('#home-text').hide();
$('#home-text').fadeIn(1200);

// $('#about-text').hide();


var textSections = [
	$('#about-text'),
	$('#work-text'),
	$('#awards-text'),
	$('#customers-text'),
	$('#vote-text')
];

textSections.forEach(function(x) {
	x.hide();
	x.fadeIn(1200);
});



/*
$(window).scroll(function() {
	textSections.forEach(function(x) {
		var bottomObject = x.offset().top + x.outerHeight();
		var bottomWindow = $(window).scrollTop() + $(window).height();

		if (bottomWindow > bottomObject) {
			x.fadeIn(1200);
		}
	});
});
*/

// button link event listeners
$('#a-doggie-btn').click(function(event) {
	event.preventDefault();
	goToUrl('http://best.cityvoter.com/best/doggie-daycare/pets/seattle');
});

$('#a-boarding-btn').click(function(event) {
	event.preventDefault();
	goToUrl('http://best.cityvoter.com/best/boarding/pets/seattle');
});


$('#a-doggie-btn-2').click(function(event) {
	event.preventDefault();
	goToUrl('http://best.cityvoter.com/best/doggie-daycare/pets/seattle');
});

$('#a-boarding-btn-2').click(function(event) {
	event.preventDefault();
	goToUrl('http://best.cityvoter.com/best/boarding/pets/seattle');
});







})();