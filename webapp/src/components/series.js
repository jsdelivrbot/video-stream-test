import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';

import fetchSeries from '../actions'


class Series extends Component {

	componentWillMount() {
		this.props.fetchSeries();
	}

	renderTile(datum) {
		console.log(datum)
		return ( 
			<GridTile	key={datum.title} title={datum.title} subtitle={datum.releaseYear} onClick={() => this.props.history.push('movies')} >
				<img src="https://netflowers.files.wordpress.com/2012/06/figpoh.jpg" />
			</GridTile> 
		)
	}

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

		if(!this.props.series.entries.length) { return ( <div> Loading ... </div> ) }

		return (
			<div>
				<AppBar className="sub-menu-grey" title="Popular Series" iconElementLeft={(<div />)} />
				<GridList cellHeight={180} style={styles.gridList} >
					{this.props.series.entries.map(datum => this.renderTile(datum))}
    			</GridList>
				<Link to="/">Back</Link>
			</div>
		) 
	}
}

function mapDispatchToProps(dispatch) { 
	return bindActionCreators({ fetchSeries }, dispatch);
}

function mapStateToProps({ series }) { return { series } }

export default connect( mapStateToProps, mapDispatchToProps )( Series );
