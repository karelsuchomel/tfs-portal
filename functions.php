<?php
//Exit if accessed directly
if ( ! defined( 'ABSPATH' ) )
{
	exit;
}

// import stylesheet
function zshroznova_resources () 
{
	// main
	wp_enqueue_style('style', get_stylesheet_uri());

	// TODO you cannot include those like that, because they have changing hashes in their name.
	// wp_register_style('main.css', get_template_directory_uri() . '/build/css/main.min.css', false, NULL, 'all' );
	// wp_enqueue_style('main.css');

	// wp_register_script( 'index.js', get_template_directory_uri() . '/assets/js/main.bundle.min.js', array(), NULL, true );
	// wp_enqueue_script( 'index.js' );

	wp_localize_script( 'index.js', 'magicalData', array(
		"nonce" => wp_create_nonce("wp_rest"),
		"siteURL" => get_site_url()
	));
}
add_action('wp_enqueue_scripts', 'zshroznova_resources');

// theme setup
function zshroznova_theme_setup()
{
	// navigation menus
	register_nav_menus(array(
	  'menu-top-bar' => __('Horní lišta'),
	  'menu-side-list' => __('Boční seznam'),
	));

	// add featured image support
	add_theme_support('post-thumbnails');
	// define image sizes
	set_post_thumbnail_size( 200, 150, true );
	// add post format support
	add_theme_support('post-formats', array('aside'));
}
add_action('after_setup_theme', 'zshroznova_theme_setup');

// use post's front-end styles in TinyMCE text editor
function zshroznova_theme_add_editor_styles() {
	add_editor_style( 'build/css/main.min.css' );
}
add_action( 'admin_init', 'zshroznova_theme_add_editor_styles' );

// remove WordPress emojis
require_once( get_template_directory() . '/inc/remove_wp_emoji.php');