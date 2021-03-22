import { serialsAddReducer } from './serialsAddReducer';
import { combineReducers } from "redux";
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
    serialsPage: serialsAddReducer,
    appPage: appReducer
})