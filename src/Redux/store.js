//Step 1 Process
// import { createStore, applayMiddleware } from "redux";
// import logger from "redux-logger";
// import reduxThunk from "redux-thunk";
// import rootReducer from "./root-reducer";

// const middlewares = [reduxThunk];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }
// const store = createStore(rootReducer, applayMiddleware(...middlewares));

// export default store;

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";

const middleware = rootReducer();

export const store = createStore(
  middleware,
  {},
  composeWithDevTools(applyMiddleware(thunk, promiseMiddleware))
);
export default store;
