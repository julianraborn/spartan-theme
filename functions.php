<?php
/**
 * Divi Child functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package divi-child
 */

/**
 * Add the scripts and styles for our theme.
 *
 * @author RabornMedia
 */
function child_enqueue_styles() {
	$asset_file_path      = get_stylesheet_directory() . '/build/index.asset.php';
	$parent_theme_version = wp_get_theme()->parent()->get( 'Version' );

	if ( is_readable( $asset_file_path ) ) {
		$asset_file = include $asset_file_path;
	} else {
		$asset_file = [
			'version' => '1.0.0',
		];
	}
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css', '', $parent_theme_version );
	wp_enqueue_style( 'theme-style', get_stylesheet_directory_uri() . '/build/index.css', [], $asset_file['version'] );
	wp_enqueue_script( 'main', get_stylesheet_directory_uri() . '/build/index.js', array( 'jquery' ), $asset_file['version'], true );
	// Optional Slick CDN -- uncomment both to use
	wp_enqueue_script( 'slick', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery'));
    wp_enqueue_style( 'slick','//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' );
}
add_action( 'wp_enqueue_scripts', 'child_enqueue_styles' );

/**
 * Add the current [year] shortcode to theme to use in the footer credits.
 *
 * @author Kelsey McAuley
 */
function year_shortcode() {
	$year = date_i18n( 'Y' );
	return $year;
}
add_shortcode( 'year', 'year_shortcode' );
