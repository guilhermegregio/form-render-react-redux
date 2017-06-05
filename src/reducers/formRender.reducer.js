import { ADD_FIELD } from '../actions/formRender.actions';

const formRender = (state = [], action) => {
  switch (action.type) {
    case ADD_FIELD:
      return [
        ...state,
        action.field
      ];

    default:
      return state;
  }
};

export default formRender;