import React from 'react'
import { Home } from 'bundles/Home/components/Home'
import { render } from 'enzyme'

describe('(Component) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<Home />)
  })

  it('Renders a home message', () => {
    const welcome = _component.find('p')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/home/)
  })

})

