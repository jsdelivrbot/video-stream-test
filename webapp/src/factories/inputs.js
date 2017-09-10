import React from 'react';

import TextField from 'material-ui/TextField';

export function textFieldFactory(hint) {
		const style = { width: '100%' }
		return (
			<div>
				<TextField style={style} hintText={hint} />
			</div>
		)
	}