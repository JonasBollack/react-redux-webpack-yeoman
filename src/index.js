import React from 'react';
import {
	render
} from 'react-dom';
import {
	Provider
} from 'react-redux';
import configureStore from './stores';
import App from './containers/App';

const store = configureStore({
	todo: {
		items: []
	}
});
console.log(store.getState());
render(
	<Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('app')
);