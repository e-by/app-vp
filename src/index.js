import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import App from './containers/App';
import { loadHeroes } from './actions/heroesApiActions';
import { loadHero } from './actions/HeroApiActions';

import './css/App.css';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
// on start, load thumbnail menu
store.dispatch(loadHeroes());

// load default content 3-D man
store.dispatch(loadHero(1011334));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
