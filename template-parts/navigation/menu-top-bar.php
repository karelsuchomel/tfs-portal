<input type="checkbox" name="toggle-menu" id="toggle-menu-checkbox">
<nav id="top-bar">
	<div id="menu-top-bar" class="clear-both">

		<label for="toggle-menu-checkbox" class="icon-hamburger-menu">
			<div class="menu-icon-container">
				<div id="hamburger-line-1" class="line"></div>
				<div id="hamburger-line-2" class="line"></div>
				<div id="hamburger-line-3" class="line"></div>
			</div>
			<span>
				Navigace
			</span>
		</label>

		<a id="logo-wrapper" href="<?php echo get_home_url(); ?>">
			<img src="<?php bloginfo('template_directory'); ?>/assets/images/logo-light.svg" alt="logo - Základní škola Brno, Hrnoznová 1">
		</a>

		<!-- search -->
		<div class="control-buttons-container">
			<form role="search" method="get" id="searchform" class="searchform" action="<?php echo get_home_url(); ?>">
				<div id="search-field-container">
					<input type="checkbox" id="search-box-toggle">
					<input name="s" id="search-field-top-bar" type="text" placeholder="Hledat">
					<label id="searchsubmit" for="search-box-toggle"></label>
				</div>
			</form>
		</div>

		<?php

		$args = array('theme_location' => 'menu-top-bar','container_id' => 'menu-top-bar-list-container');

		wp_nav_menu( $args );

		?>

	</div>
</nav>
