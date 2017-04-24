import React from 'react';

const Notes = () => {
	return (
		<div className="notes">
			<h2 className="main__introduction">I'm a front-end developer based in sunny Oxfordshire. hello!</h2>

			<img className="avatar" src="/images/me-avatar.jpg" width="280" height="280" alt="Andrew Hudson" />

			<p>This should be:</p>
			<ul className="notes__list">
				<li>Utilise the full-width of the browser</li>
				<li>Using grid or flexbox with fallback</li>
				<li>loaded from the WP-API,</li>
				<li>cached in Service Worker,</li>
				<li>Using React Router</li>
				<li>Should work without JS i.e. server-rendered initially if possible</li>
				<li>Posts and Pages both served from the WP-API</li>
				<li>Style Guide</li>
			</ul>

			<h3>Optional Extras:</h3>
			<ul className="notes__list">
				<li>Have some kind of real-time thing using socket.io</li>
				<li>Use external API e.g. Strava API to grab latest running statistics. Done daily, at the end of each  day or triggered by external node tracker?? Investigate this.</li>
			</ul>
		</div>
	)
};

export default Notes;
