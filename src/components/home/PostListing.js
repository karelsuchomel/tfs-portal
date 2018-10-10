import React from 'react';

import TabSwitcher from './TabSwitcher'

export default class PostListing extends React.Component {
	render() {
		return(
			<div id="posts-wrap" className="size-medium">
				<div className="single-page-of-posts">
					<article className="post-wrap clear-both aside">
						<a className="link-overlay" href="http://192.168.1.190/zs-hroznova/2018/04/mezinarodni-jazykova-zkouska-podevate/" rel="bookmark" title="Permanent Link to 15. – 30. 4. 2018 proběhne dotazníkové šetření SCIO “Mapa školy”"></a>
						<h2 className="aside-headline">15. – 30. 4. 2018 proběhne dotazníkové šetření SCIO “Mapa školy”  |<span className="one-line-excerpt">V pátek 16. června vyrazili zájemci z 5. tříd skládat mezinárodní jazykovou  </span></h2>
						<div className="basic-info-wrap">
							<div className="post-details-wrap"><span>před 5 měsíci   </span></div>
						</div>
					</article>
					<article className="post-wrap clear-both aside">
						<a className="link-overlay" href="http://192.168.1.190/zs-hroznova/2018/04/vyhlaseni-vysledku-souteze/" rel="bookmark" title="Permanent Link to Grafická soutěž o velké ceny"></a>
						<h2 className="aside-headline">Grafická soutěž o velké ceny  |<span className="one-line-excerpt">O nejpilnějšího čtenáře knih z anglické knihovny. Soutěže vyhlášené na začátku školního  </span></h2>
						<div className="basic-info-wrap">
							<div className="post-details-wrap"><span>před 5 měsíci   </span></div>
						</div>
					</article>
					<article className="post-wrap clear-both">
						<a className="link-overlay" href="http://192.168.1.190/zs-hroznova/2018/08/sber-papiru-20162017/" rel="bookmark" title="Permanent Link to Sběr papíru 2018/2019"></a><img src="http://192.168.1.190/zs-hroznova/wp-content/uploads/2017/08/1434313801_legrando14-200x150.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" srcset="http://192.168.1.190/zs-hroznova/wp-content/uploads/2017/08/1434313801_legrando14-200x150.jpg 200w, http://192.168.1.190/zs-hroznova/wp-content/uploads/2017/08/1434313801_legrando14-300x225.jpg 300w, http://192.168.1.190/zs-hroznova/wp-content/uploads/2017/08/1434313801_legrando14-252x189.jpg 252w" sizes="(max-width: 200px) 100vw, 200px" width="200" height="150" />
						<h2>Sběr papíru 2018/2019 </h2>
						<div className="basic-info-wrap">
						 <div className="post-details-wrap"><span>před měsícem</span></div>I v letošním roce proběhla na naší škole soutěž ve... </div>
					</article>
				</div>
				<div id="load-more-wrap">
					 <button id="fetch-older-posts-button">Načíst starší</button>
				</div>
			</div>
		);
	}
}