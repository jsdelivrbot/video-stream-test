import React from 'react';

import AppBar from 'material-ui/AppBar';

export default ( {title} ) => {
	return (
		<AppBar className="sub-menu-grey" 
				title={title} 
				iconElementLeft={(<div />)} 
		/>
	)
}