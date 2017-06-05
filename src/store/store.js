import { createStore, combineReducers } from 'redux';
import 'rxjs';

import ping from '../reducers/ping.reducer';
import formRender from '../reducers/formRender.reducer';

export default (inititalState)=>createStore(combineReducers({ping, formRender}), inititalState);