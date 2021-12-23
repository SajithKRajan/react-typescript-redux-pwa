import { Reducer } from "redux";
import { AppActionTypes, AppState } from "./types";

// Type-safe initialState!
export const initialState: AppState = {
  authData: {
    isAuthenticated: false,
    token: "",
  },
  language: "en",
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<AppState> = (state = initialState, action) => {
  switch (action.type) {
    case AppActionTypes.INITIALIZE:
      return state;
    case AppActionTypes.SET_AUTHENTICATION_DATA:
      const newState = { ...state };
      newState.authData = action.payload;
      return newState;
    case AppActionTypes.CLEAR_AUTHENTICATION_DATA:
      return initialState;
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as appReducer };
