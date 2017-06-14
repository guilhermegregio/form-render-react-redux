import { createStore, combineReducers } from 'redux';

import 'rxjs';

import ping from '../reducers/ping.reducer';
import formRender from '../reducers/formRender.reducer';
import formDataReducer from '../reducers/formData.reducer';

const reducers = combineReducers({ ping, formRender, formDataReducer });

export default (inititalState) => createStore(reducers, inititalState);