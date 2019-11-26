import { createStore, applyMiddleware, compose } from "redux";
import counter from "./reducer/counter";
import logger from "redux-logger";
import thunk from 'redux-thunk'

import rootReducer from "./reducer";

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose;

const enhancer = composeEnhancers(
	applyMiddleware(logger, thunk)
	// other store enhancers if any
);
export const store = createStore(rootReducer, enhancer);
