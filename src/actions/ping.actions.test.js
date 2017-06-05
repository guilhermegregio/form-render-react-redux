import * as pingActions from './ping.actions';

describe('ping actions', () => {
  it('should create an action ping', () => {
    const expectedAction = {
      type: pingActions.PING
    };

    expect(pingActions.ping()).toEqual(expectedAction);
  });
});