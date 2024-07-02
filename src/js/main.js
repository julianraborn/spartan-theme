// Add your scripts here.

// Make sure everything is loaded first.
if (
	( 'complete' === document.readyState ||
		'loading' !== document.readyState ) &&
	! document.documentElement.doScroll
) {
	dsSetupDollapsibleSubmenus( jQuery );
	logoCarousel( jQuery );
} else {
	document.addEventListener( 'DOMContentLoaded', () => {
		setTimeout( function () {
			dsSetupDollapsibleSubmenus( jQuery );
			logoCarousel( jQuery );
		}, 700 );
	} );
}

// Mobile Menu

function dsSetupDollapsibleSubmenus( $ ) {
	const $menu = $( '.et_mobile_menu .menu-item-has-children > a' ),
		topLevelLink = '.et_mobile_menu .menu-item-has-children > a';

	$menu.each( function () {
		$( this ).off( 'click' );

		if ( $( this ).is( topLevelLink ) ) {
			$( this ).attr( 'href', '#' );
		}
		if ( ! $( this ).siblings( '.sub-menu' ).length ) {
			$( this ).on( 'click', function () {
				$( this ).parents( '.mobile_nav' ).trigger( 'click' );
			} );
		} else {
			$( this ).on( 'click', function ( event ) {
				event.preventDefault();
				$( this ).parent().toggleClass( 'visible' );
			} );
		}
	} );
}
// Optional Slick utility. Make sure you change the class out
function logoCarousel( $ ) {
	$( '.logo-carousel .et_pb_column' ).slick( {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 3000,
		cssEase: 'linear',
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 980,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	} );
}
