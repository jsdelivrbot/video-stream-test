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
			<GridTile key={datum.title} title={datum.title} subtitle={datum.releaseYear} onClick={() => this.props.history.push('movies')} titleBackground={style}>
				<img src={datum.images['Poster Art'].url} />
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

		// I get a bad code smell from this...
		// Whats the best way of globally handling errors and displaying a message to the user. 
		// It feels like it would be done at the reducer stage but reading around it doesnt seem to be
		// the 'redux way' .... I will definitly be going away to reserch this some more.....
		if(!(this.props.status === '200')) { return ( <div> Oops, something went wrong ... </div> ) }
		if(!this.props.data) { return ( <div> Loading ... </div> ) }

		return (
			<div style={styles.root}>
				<AppBar className="sub-menu-grey" title="Popular Series" iconElementLeft={(<div />)} />
				<GridList cellHeight={180} style={styles.gridList} cols={3}>
					{this.props.data.map(datum => this.renderTile(datum))}
    			</GridList>
			</div>
		) 
	}
}

function mapDispatchToProps(dispatch) { 
	return bindActionCreators({ fetchSeries }, dispatch);
}

// Error handling with react-router seems like a contentious issue. 
// Would probably choose to move away from react-router and handle errors better in a middleware.
// This way we pass the status of the http call through to the view to then display error messages if needed. 
function mapStateToProps(state) {
	let { data, status } = state.series;
	return { data, status }  
}

export default connect( mapStateToProps, mapDispatchToProps )( Series );
