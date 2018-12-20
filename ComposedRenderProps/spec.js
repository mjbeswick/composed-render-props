import ComposedRenderProps from '.';

import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('ComposedRenderProps', () => {
  // let cmp;
  // let setStateStub;

  beforeEach(() => {
    // cmp = shallow(<CurrencyPicker onChange={sinon.spy()} />);
    // setStateStub = sinon.stub(cmp.instance(), "setState");
  });

  afterEach(() => {
    // sinon.restore();
  });

  const RenderPropsTest = props => {
    // return props.children(true);
    console.log(props.children);

    return (
      <div {...props}>
        {props.children.constructor === Function
          ? props.children(props)
          : props.children}
      </div>
    );
  };

  const Composed = ComposedRenderProps(
    [RenderPropsTest, { name: 'a' }],
    [RenderPropsTest, { name: 'b' }],
    [RenderPropsTest, { name: 'c' }]
  );

  test('default', () => {
    const cmp = mount(
      <Composed>{props => JSON.stringify(props, null, 2)}</Composed>
    );

    console.log(cmp.html());
  });
});
