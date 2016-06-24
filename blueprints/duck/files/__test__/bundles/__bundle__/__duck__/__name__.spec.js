import reducer, { initialState } from 'bundles/<%= bundlePath %>/<%= entityPath %>/<%= camelEntityName %>';

describe('(Redux) <%= camelEntityName %>', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState);
    });
  });
});
