import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { AppState } from "./app/types";
import { appReducer } from "./app/reducer";
// The top-level state object
export interface ApplicationState {
  app: AppState;
  router: RouterState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
  });

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// export function* rootSaga() {
//   yield all([
//     fork(apiListSaga),
//     fork(historySaga),
//     fork(settingsSaga),
//     fork(redocSaga),
//   ]);
// }

export function* rootSaga() {
  yield all([]);
}
