// We need: 
// 1. Provider ( react- redux)
// 2. createStore (redux)
// 3. reducers to pass to createStore (./reducer) (rootReducer)
// 4. make a root reducer to import other reducers 
// 5. Make a single reducer to import into root reducer
// 6. create the store (2) with the reducer (3) 
// 7. wrap the provider (1) with store prop (4) around the app 

// glue between redux and react
import { Provider } from 'react-redux'; 
import { createStore } from 'redux'

import reducers from './reducers/index.js';
const theStore = createStore(reducers);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
