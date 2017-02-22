import React from 'react';
import { render }  from 'react-dom';
import Routes from './components/Routes';
import './style/style.css';

render(
	<Routes />,
	document.getElementById('app')
);
