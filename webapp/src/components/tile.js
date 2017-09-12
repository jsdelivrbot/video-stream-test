import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';

function renderTile(datum) {
	const style = 'linear-gradient(to top, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.8) 70%,rgba(0,0,0,0) 100%)';
	return ( 
		<GridTile key={datum.title} title={datum.title} subtitle={datum.releaseYear} onClick={() => this.props.history.push('movies')} titleBackground={style}>
			<img src={datum.images['Poster Art'].url} />
		</GridTile> 
	)
}

export default ( { props } ) => {
	return renderTile(props)
}
