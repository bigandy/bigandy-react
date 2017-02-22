import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const Routes = (props) => (
	<Router {...props}>
		<App />
	</Router>
);
export default Routes;
