import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import jobReducer from './feature/jobReducer';

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  jobReducer
});

const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer;
