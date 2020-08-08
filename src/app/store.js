// // import { createStore } from "redux";
// import rootReducer from "../redux/reducer/rootReducer";
// import { composeWithDevTools } from ‘redux-devtools-extension’;

// // export default createStore(rootReducer);



// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk),composeWithDevTools()
// );

// export default store;





import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from "../redux/reducer/rootReducer";

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  var composedEnhancers = composeWithDevTools({
    name: `Redux`,
    realtime: true,
    trace: true,
    traceLimit: 25
});
  composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}

