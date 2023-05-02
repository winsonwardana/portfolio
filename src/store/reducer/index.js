import { legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";

const store = createStore(profileReducer);

export default store;
