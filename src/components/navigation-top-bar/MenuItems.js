import React from 'react';

export default class MenuItems extends React.Component {
	render() {
		return(
			<div id="menu-top-bar-list-container" className="menu-horni-lista-container">
				<ul id="menu-horni-lista" className="menu">
					<li id="menu-item-8" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8">
						<a href="http://192.168.1.190/zs-hroznova/obedy/">Obědy</a>
					</li>
					<li id="menu-item-9" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9">
						<a href="http://192.168.1.190/zs-hroznova/sample-page/">Rozvrhy</a>
					</li>
					<li id="menu-item-10" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10">
						<a href="https://zshroznova.edookit.net/user/login?backlink=bd1dh">Edookit</a>
					</li>
				</ul>
			</div>
		);
	}
}