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
		const style = 'linear-gradient(to top, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.8) 70%,rgba(0,0,0,0) 100%)';
		return ( 
			<GridTile	key={datum.title} title={datum.title} subtitle={datum.releaseYear} onClick={() => this.props.history.push('movies')} titleBackground={style}>
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

		if(!this.props.series.length) { return ( <div> Loading ... </div> ) }

		return (
			<div style={styles.root}>
				<AppBar className="sub-menu-grey" title="Popular Series" iconElementLeft={(<div />)} />
				<GridList cellHeight={180} style={styles.gridList} cols={3}>
					{this.props.series.map(datum => this.renderTile(datum))}
    			</GridList>
			</div>
		) 
	}
}

function mapDispatchToProps(dispatch) { 
	return bindActionCreators({ fetchSeries }, dispatch);
}

function mapStateToProps({ series }) { return { series } }

export default connect( mapStateToProps, mapDispatchToProps )( Series );
