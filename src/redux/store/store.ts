import { createStore, 
         combineReducers, 
         applyMiddleware, 
         compose } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ui, auth} from "../reducers"

const reducers = combineReducers({
  ui,
  auth
});

export const store = createStore(
    reducers,
    compose(
             applyMiddleware(thunk), 
             composeWithDevTools())
);
