import reducer from './ping.reducer';
import * as pingActions from '../actions/ping.actions';

describe('todos reducer', () => {
  
  it('should return the initial state', () => {
    expect(
        reducer(undefined, {})
    ).toEqual({
        isPinging: false
    })
  });

  it('should handle PING', () => {
    const expectedStatePing = {
        isPinging: true
    };

    const statePing = reducer([], {type: pingActions.PING});
    const statePingFalse = reducer([{isPinging: false}], {type: pingActions.PING});
    const statePingTrue = reducer([{isPinging: true}], {type: pingActions.PING});

    
    expect(statePing).toEqual(expectedStatePing);
    expect(statePingFalse).toEqual(expectedStatePing);
    expect(statePingTrue).toEqual(expectedStatePing);
  });

  it('should handle PONG', () => {
    const expectedStatePong = {
        isPinging: false
    };

    const statePong = reducer([], {type: pingActions.PONG});
    const statePongFalse = reducer([{isPinging: false}], {type: pingActions.PONG});
    const statePongTrue = reducer([{isPinging: true}], {type: pingActions.PONG});
    
    expect(statePong).toEqual(expectedStatePong);
    expect(statePongFalse).toEqual(expectedStatePong);
    expect(statePongTrue).toEqual(expectedStatePong);
  });

});