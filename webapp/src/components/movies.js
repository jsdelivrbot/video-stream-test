import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';


class GridExample extends Component {
	render() { 
		return (
			<div>

				<h1>Movies Screen!!!</h1> 
				<Link to="/">Back</Link>
			</div>
		) 
	}
}

export default GridExample;