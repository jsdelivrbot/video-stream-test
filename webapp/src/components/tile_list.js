import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import Tile from '../components/tile';

const styles = {
	width: '75%',
	overflowY: 'auto',
	margin: '20px'
};

export default ( {data, cols, callback} ) => {
	return (
		<GridList cellHeight={ 180 } style={ styles } cols={ cols }>
			{
				data.map(datum => { 
					return ( 
						<Tile key={ datum.title } props={ datum } callback={callback}></Tile>
					) 
				}) 
			}
		</GridList>
	)
}