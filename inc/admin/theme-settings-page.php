<?php

require get_template_directory() . '/inc/admin/field-validation.php';

//
// Registering new admin settings page and section identifier
//

function theme_settings_page()
{
?>
	<div class="wrap">
		<h1>TFS Portal theme customization</h1>
		<form method="post" action="options.php">
			<?php
				settings_fields("section");
				// This is the identifier, to add
				// markup/functionality to this specific section
				do_settings_sections("tfs-portal-theme-options");      
				submit_button(); 
			?>          
		</form>
	</div>
<?php
}

function add_theme_menu_item()
{
	add_menu_page("Theme Options", "Theme Options", "manage_options", "theme-panel", "theme_settings_page", null, 99);
}

add_action("admin_menu", "add_theme_menu_item");

//
// Add all your sections, fields and settings during admin_init
//

function display_theme_panel_fields()
{
	// Add Section for option fields
	add_settings_section("section", "", null, "tfs-portal-theme-options");
	
	// Add fields
	add_settings_field("home-page-title", "Home page title", "home_page_title_field", "tfs-portal-theme-options", "section");
	add_settings_field("base-color", "Base color", "base_color_field", "tfs-portal-theme-options", "section");
	add_settings_field("highlight-color", "Highlight color", "highlight_color_field", "tfs-portal-theme-options", "section");

	// Save and update field options
	register_setting("section", "home_page_title");
	register_setting("section", "base_color");
	register_setting("section", "highlight_color");
}

add_action("admin_init", "display_theme_panel_fields");

//
// Callback functions for our setting fields
//

function home_page_title_field()
{
	$val = get_option('home_page_title');
	echo '<input type="text" name="home_page_title" value="' . $val . '" />';
}

function base_color_field()
{
	$val = get_option('base_color');
	echo '<input type="text" class="color-picker" name="base_color" value="' . $val . '" />';
}

function highlight_color_field()
{
	$val = get_option('highlight_color');
	echo '<input type="text" class="color-picker" name="highlight_color" value="' . $val . '" />';
}

