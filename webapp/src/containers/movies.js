import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TileList from '../components/tile_list';
import SubHeader from '../components/sub_header';

import { fetchMovies } from '../actions'

class Movies extends Component {

	componentWillMount() {
		this.props.fetchMovies();
	}

	render() {
		const styles = {
		    	display: 'flex',
		    	flexWrap: 'wrap',
		    	justifyContent: 'space-around'
		};

		// I get a bad code smell from this...
		// Whats the best way of globally handling errors and displaying a message to the user. 
		// It feels like it would be done at the reducer stage but reading around it doesnt seem to be
		// the 'redux way' .... I will definitly be going away to reserch this some more.....
		if(this.props.status === '500') { return ( <div> Oops, something went wrong ... </div> ) }
		if(!this.props.data) { return ( <div> Loading ... </div> ) }

		return (
			<div style={styles}>
				<SubHeader title="Popular Movies" />
				<TileList data={this.props.data} cols={3}></TileList>
			</div>
		) 
	}
}

function mapDispatchToProps(dispatch) { 
	return bindActionCreators({ fetchMovies }, dispatch);
}

// Error handling with react-router seems like a contentious issue. 
// Would probably choose to move away from react-router and handle errors better in a middleware.
// This way we pass the status of the http call through to the view to then display error messages if needed. 
function mapStateToProps(state) {
	let { data, status } = state.movies;
	return { data, status }  
}

export default connect( mapStateToProps, mapDispatchToProps )( Movies );
