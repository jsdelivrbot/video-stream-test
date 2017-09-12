import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// Although the implimentation is basic and not exactly elegant
// my aim was to show how some components could be rendered using
// a factory pattern. 
export function buttonFactory(type, label, callback) {
	if(type === 'FlatButton') {
		return ( <FlatButton label={label} onClick={ callback } /> )
	} else {
		return ( <RaisedButton label={label} onClick={ callback } /> )
	}
	
}

