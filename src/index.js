import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import {}  from './sdk';

import * as reducers from './reducers';
import App from './components/App.jsx';
import Home from './components/Home.jsx';

const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer
	})
)

const history = syncHistoryWithStore(hashHistory, store);

window.env.init({
	url :{
		zhuboListDay : '/service/activity/rank/tinytimeAutumnAnchorDay',
	}
});
window.sdk.init(() => {
    window.sdk.getUser((user) => {
        window.sdk.user = {
            uid: user.uid,
        }
		render(
			<Provider store={store}>	
				<Router history={history}>
					<Route path="/" component={App}>
						<IndexRoute component={Home}/>
					</Route>
				</Router>
			</Provider>
		, document.getElementById('app'))
    })
})