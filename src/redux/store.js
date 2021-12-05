import { createStore } from "redux";
import AfficheReducer from "./reducer";

const devtools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store=createStore(AfficheReducer, devtools)
export default store