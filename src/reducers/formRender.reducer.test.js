import reducer from './formRender.reducer';
import * as actions from '../actions/formRender.actions';

describe('form render reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_FIELD', () => {
    const id = 'field';
    const name = id;
    const type = 'text';

    const expectState = [{ name, id, type }];

    const state = reducer([], actions.addField({ id, name, type }));

    expect(state).toEqual(expectState);
  });

});