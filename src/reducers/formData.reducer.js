import { SUBMIT } from '../actions/formData.actions';
import * as fieldsWrap from '../infraestruture/fieldsInstance';

import datasource from '../infraestruture/datasource';

const behaviors = {
  [SUBMIT](state, action) {
    const isValid = fieldsWrap.getInstance().validate();
    const values = fieldsWrap.getInstance().getValues();
    const data = [...state.data, values];

    if (!isValid) {
      return state;
    }

    datasource.store(data);

    return { ...state, data };
  }
};

const reducer = (state = { lastAction: '', data: [] }, action) => {
  state.lastAction = action.type;
  const behavior = behaviors[action.type]
  return behavior ? behavior(state, action) : state
}

export default reducer;