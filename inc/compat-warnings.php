<?php
/**
 * TFS-Portal compatbility warnings
 *
 * Prevents TFS-Portal from running on WordPress versions without the REST API,
 * since this theme requires API functionality. If this file is loaded,
 * we know we have an incompatible WordPress.
 *
 * @package TFS-Portal
 */

/**
 * Prevent switching to TFS-Portal on old versions of WordPress.
 *
 * Switches to the default theme.
 */
function tfs_portal_switch_theme() {
	switch_theme( WP_DEFAULT_THEME );
	unset( $_GET['activated'] );
	add_action( 'admin_notices', 'tfs_portal_upgrade_notice' );
}
add_action( 'after_switch_theme', 'tfs_portal_switch_theme' );

/**
 * Adds a message for unsuccessful theme switch.
 *
 * Prints an update nag after an unsuccessful attempt to switch to
 * TFS-Portal on WordPress versions prior to 4.7.
 */
function tfs_portal_upgrade_notice() {
	$message = __( 'TFS-Portal requires WordPress 4.7 or higher. Please update your wordpress installation and try again.', 'tfs-portal' );
	printf( '<div class="error"><p>%s</p></div>', $message ); /* WPCS: xss ok. */
}

/**
 * Prevents the Customizer from being loaded on WordPress versions prior to 4.7.
 *
 * @since TFS-Portal 0.0.1
 */
function tfs_portal_customize() {
	wp_die( __( 'TFS-Portal requires WordPress 4.7 or higher. Please update your wordpress installation and try again.', 'tfs-portal' ), '', array(
		'back_link' => true,
	) );
}
add_action( 'load-customize.php', 'tfs_portal_customize' );

/**
 * Prevents the Theme Preview from being loaded on WordPress versions prior to 4.7.
 *
 * @since TFS-Portal 0.0.1
 */
function tfs_portal_preview() {
	if ( isset( $_GET['preview'] ) ) {
		wp_die( __( 'TFS-Portal requires WordPress 4.7 or higher. Please update your wordpress installation and try again.', 'tfs-portal' ) );
	}
}
add_action( 'template_redirect', 'tfs_portal_preview' );
