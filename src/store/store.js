import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import 'rxjs';

import ping from '../reducers/ping.reducer';
import formRender from '../reducers/formRender.reducer';
import formDataReducer, { submitEpic } from '../reducers/formData.reducer';

const epicMiddleware = createEpicMiddleware(combineEpics(submitEpic));

const reducers = combineReducers({ ping, formRender, formDataReducer });

const middlewares = applyMiddleware(epicMiddleware);

export default (inititalState) => createStore(reducers, inititalState, middlewares);