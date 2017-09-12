import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';


const titleBackground = 'linear-gradient(to top, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.8) 70%,rgba(0,0,0,0) 100%)';

function renderTile(datum) {
	return ( 
		<GridTile 	key={datum.title} 
					title={datum.title} 
					subtitle={datum.releaseYear} 
					onClick={() => console.log(`Playing ${datum.title}`)} 
					titleBackground={titleBackground}>
			<img src={datum.images['Poster Art'].url} />
		</GridTile> 
	)
}

export default ( { props } ) => {
	return renderTile(props)
}
