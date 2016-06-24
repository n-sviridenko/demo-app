import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MainLayout from 'bundles/App/layouts/MainLayout';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);

  return renderer.getRenderOutput();
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<MainLayout {...props} />);
}

describe('(Layout) Main', function () {
  let _component;
  let _props;
  let _child;

  beforeEach(function () {
    _child = <h1 className="child">Child</h1>;
    _props = {
      children: _child
    };

    _component = shallowRenderWithProps(_props);
  });

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div');
  });
});
