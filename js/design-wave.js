$( document ).ready(function() {

	// Mechanizm O Nas
	function first (par) {
		$( '#oferta' ).css({ 'display': 'none' });
		$( '#oferta-sm' ).css({ 'display': 'block' });
		$("html, body").animate({ scrollTop: $('#oferta-sm').offset().top -( $( 'nav' ).height() + 20 ) }, 1000);

		$( ".box-checked" ).addClass( 'box-sm' );
		$( ".box-checked" ).removeClass( 'box-checked' );
		$( par ).removeClass( 'box' );
		$( par ).addClass( 'box-checked' );
		$( ".box" ).addClass( 'box-sm col-xs-3 col-lg-6' );
		$( ".box" ).appendTo("#other");
		$( ".box" ).removeClass( 'box' );
		$( par ).appendTo("#checked");
	};

	function two (par) {
		$("html, body").animate({ scrollTop: $('#oferta-sm').offset().top -( $( 'nav' ).height() + 20 ) }, 1000);
		$( ".box-checked" ).addClass( 'box-sm col-xs-3 col-lg-6' );
		$( ".box-checked" ).prependTo("#other");
		$( ".box-checked" ).removeClass( 'box-checked' );
		$( par ).addClass( 'box-checked' );
		$( par ).removeClass( 'box-sm col-xs-3 col-lg-6' );
		$( par ).appendTo("#checked").hide().show('slow');
	};

	$(document).on("click", ".box", function() {
	    first(this);
	});
	$(document).on("click", ".box-sm", function() {
	    two(this);
	});

	$( "#tabs" ).tabs();

	$('.box').each(function(){
		// For each set of tabs, we want to keep track of
		// which tab is active and its associated content
		var $active, $content, $links = $(this).find('a');

		// If the location.hash matches one of the links, use that as the active tab.
		// If no match is found, use the first link as the initial active tab.
		$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		$active.addClass('active');

		$content = $($active[0].hash);

		// Hide the remaining content
		$links.not($active).each(function () {
		  $(this.hash).hide();
		});

		// Bind the click event handler
		$(document).on('click', 'a', function(e){
		  // Make the old tab inactive.
		  $active.removeClass('active');
		  $content.hide();

		  // Update the variables with the new link and content
		  $active = $(this);
		  $content = $(this.hash);
		  $content.fadeIn("slow");

		  // Make the tab active.
		  $active.addClass('active');
		  $content.show();

		  // Prevent the anchor's default click action
		  e.preventDefault();
		});
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

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
		  $('.scrollToTop').fadeIn();
		} else {
		  $('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$(document).on("click", ".scrollToTop", function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});

		$(".link-icon").click(function() {
		$('html, body').animate({
		    scrollTop: $("#portfolio").offset().top -( $( 'nav' ).height() + 20 )
		}, 2000);
		});

});
