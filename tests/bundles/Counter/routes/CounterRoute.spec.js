import CounterRoute from 'bundles/Counter/routes/CounterRoute'

describe('(Route) Counter', () => {
  let _route

  beforeEach(() => {
    _route = CounterRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof(_route)).to.equal('object')
  })

  it('Configuration should contain path `counter`', () => {
    expect(_route.path).to.equal('counter')
  })

})
