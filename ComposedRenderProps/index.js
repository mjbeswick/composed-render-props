import React from 'react';

const ComposedRenderProps = (...options) => props => {
  let last = props.children;
  const renderProps = [];

  for (var i = options.length - 1; i >= 0; i--) {
    const [component, componentProps] = options[i];

    renderProps[i] = componentProps;

    console.log([component, componentProps]);

    const childFunc = function(props) {
      renderProps[i] = props;

      console.log('childFunc', props);

      return last.call ? last.call() : last;
    };

    childFunc.bind(renderProps);

    console.log(i, props, component, componentProps, childFunc);

    last = React.createElement(component, componentProps, childFunc);
  }

  return last;
};

export default ComposedRenderProps;
