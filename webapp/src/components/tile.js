import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';


const titleBackground = 'linear-gradient(to top, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.8) 70%,rgba(0,0,0,0) 100%)';

function navigate(url) {
	if(!url) { 
		console.log(`Playing ${title}`)
	} else {
		console.log('navigating', url)
		this.props.history.push(url)
	}
}

function renderTile(title, subtitle, backgroundUrl, url, callback) {
	return ( 
		<GridTile 	key={title} 
					title={title} 
					subtitle={subtitle} 
					onClick={() => callback(url)}
					titleBackground={titleBackground}>
			<img src={backgroundUrl} />
		</GridTile> 
	)
}

export default ( { callback, props: { title, releaseYear, images, url } } ) => {
	const imgUrl = images['Poster Art'].url;
	return renderTile(title, releaseYear, imgUrl, url, callback)
}
