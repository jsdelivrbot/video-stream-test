import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Subheader from 'material-ui/Subheader';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

import SubHeader from '../components/sub_header';
import TileList from '../components/tile_list';

import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const entries = [
	{
	  "title": "Popular Movies",
	  "images": {
	    "Poster Art": {
	      "url": "https://netflowers.files.wordpress.com/2012/06/figpoh.jpg"
	    }
	  },
	  "releaseYear": "Recently Released: Spiderman, The Avengers",
	  "url": "movies"
	},
	{
	  "title": "Popular Series",
	  "images": {
	    "Poster Art": {
	      "url": "http://www.wallpaperup.com/uploads/wallpapers/2015/12/12/858715/big_thumb_38ab8700ce1051a9b2311504d06f8289.jpg"
	    }
	  },
	  "releaseYear": "Recently Released: The Arrow, Suits, The 100",
	  "url": "series"
	}
]

const styles = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-around'
};

class FormExample extends Component {

	navigate(url) {
		if(!url) { 
			console.log(`Stubbing navigation to /${url}`)
		} else {
			this.props.history.push(url)
		}
	}

	render() { 
		return (
			<div style={styles}>
				<SubHeader title="Popular Titles" />
				<TileList data={entries} cols={2} callback={this.navigate.bind(this)}></TileList>
			</div>
		) 
	}
}

export default FormExample;


