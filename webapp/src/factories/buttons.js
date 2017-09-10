import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export function buttonFactory(type, label, callback) {
	return ( <FlatButton label={label} onClick={ callback } /> )
}

