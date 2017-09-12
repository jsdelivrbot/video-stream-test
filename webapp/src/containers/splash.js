import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Subheader from 'material-ui/Subheader';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';

import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import { textFieldFactory } from '../factories/inputs';


class FormExample extends Component {

	render() { 
		const styles = {
		   	root: {
		    	display: 'flex',
		    	flexWrap: 'wrap',
		    	justifyContent: 'space-around',
		  	},
		  	gridList: {
		    	width: '75%',
		    	overflowY: 'auto',
		    	margin: '20px'
		  	}
		};

		return (
			<div style={styles.root}>
				<AppBar className="sub-menu-grey" title="Popular Titles" iconElementLeft={(<div />)} />
				<GridList cellHeight={180} style={styles.gridList} >
    				<GridTile	key='1' title='Popular Movies' subtitle={<span>Recently Added: The Avengers, Spiderman</span>} onClick={() => this.props.history.push('movies')} >
     					<img src="https://netflowers.files.wordpress.com/2012/06/figpoh.jpg" />
    				</GridTile>

    				<GridTile	key='2' title='Popular Series' subtitle={<span>Recently Added: The 100, Suits</span>}  onClick={() => this.props.history.push('series')}>
     					<img src="http://www.wallpaperup.com/uploads/wallpapers/2015/12/12/858715/big_thumb_38ab8700ce1051a9b2311504d06f8289.jpg" />
    				</GridTile>
    			</GridList>
			</div>
		) 
	}
}

export default FormExample;


