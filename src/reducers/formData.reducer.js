import { SUBMIT, START_VALIDATE, VALIDATE_ERROR, VALIDATE_SUCCESS } from '../actions/formData.actions';

export const submitEpic = action$ =>
  action$.ofType(SUBMIT)
    .mapTo({ type: START_VALIDATE })
    .debounceTime(1000);

const behaviors = {
  [SUBMIT](state, action) {
    console.log(state, action);

    return { ...state, fields: [...state.fields] };
  },
  [START_VALIDATE](state, action) {
    console.log(state, action);

    return { ...state, fields: [...state.fields] };
  },
  [VALIDATE_ERROR](state, action) {
    console.log(state, action);

    return { ...state, fields: [...state.fields] };
  },
  [VALIDATE_SUCCESS](state, action) {
    console.log(state, action);
    const { field, value } = action.payload;

    return { ...state, fields: [...state.fields, { field, value, error: false }] };
  },
};

const reducer = (state = { lastAction: '', fields: [] }, action) => {
  state.lastAction = action.type;
  const behavior = behaviors[action.type]
  return behavior ? behavior(state, action) : state
}

export default reducer;