import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
// import SingleArticle from './SingleArticle';
// import Posts from './Posts';

const Routes = (props) => (
	<Router {...props}>
		<App />
		{/* <Route path="/posts/:id" component={ SingleArticle }></Route> */}
	</Router>
);





export default Routes;
