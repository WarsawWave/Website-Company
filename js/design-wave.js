$( document ).ready(function() {

	// Mechanizm O Nas
	var lastClicked;

	$(document).on("click", ".circle", function() {
	    var content = $(this).find('p:first').text(),
	    	circles = $('.circle');

	    $('.big-square p').html(content);
	   
	    $('.big-square').css({
	      "display": "block"
	    })

	     $(lastClicked)
		  .css({
		    "border-radius": 0})
		  .animate({
		    "border-radius": 100}, 700);	     

		$(this)
		  .css({
		    "border-radius": 100})
		  .animate({
		    borderTopLeftRadius: 0, 
		    borderTopRightRadius: 0, 
		    borderBottomLeftRadius: 0, 
		    borderBottomRightRadius: 0}, 700);

		var position = $(this).position(),
			height = $(this).height(),
			width = $(this).width();

		$('.big-square')
			.css({
				"width": 0,
				"height": 0,
				"top": (position.top-height-90),
				"left": ( position.left+ (width/2) ),	
			})		
			.animate({		     
			opacity: 1, 
			width: "100%",
			height: 300,
			top: 0,
			left: 0}, 700);			

		lastClicked = $(this);

	});

	$(document).on("click", ".box-sm", function() {

	});


	// Dodanie klasy do nawigacji
	function setScrolledNav () {  
		var distance = 100;
		if ($(window).scrollTop() > distance) {
		  $('nav').addClass('scrolled');
		}
		else {
		  $('nav').removeClass('scrolled');
		}
	};
	setScrolledNav();
	$(window).bind('scroll', function() {
		setScrolledNav();
	});

	var words = ['JQuery','AnuglarJS','Javascript','PHP','Responwywność','WebDesign','Mobilność','Strony WWW','Strony Internetowe','Projektowanie Stron','HMTL','CSS','Sklepy Internetowe','Szablony Allegro','Serwisy','Portale','CMS','Blogi','Wordpress','Wizytówka','Identyfikacja Wizualna'];
	var colors = ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976", "#ffeda0", "#ffffcc"];

	var list = new Array();

	for (var i = 0; i < 10; i++) {
		var word = {};
		word.text = words[Math.floor(Math.random()*words.length)]
		word.color = colors[Math.floor(Math.random()*colors.length)]
		var index = words.indexOf(word.text);
		words.splice(index, 1);
		word.weight = getRandomInt(60, 70);
		list.push(word);
	};

	// $('#tag-cloud').jQCloud(list);

	function getRandomInt(min, max) {
	  return (Math.floor(Math.random() * (max - min + 1)) + min)/100;
	}
});
