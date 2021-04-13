import React from 'react';
import withSecretToLife from './withSecretToLife';

const DisplayTheSecret = props => (
  <div>
    Любимое число  {props.secretToLife}.
  </div>
);

const WrappedComponentTest = withSecretToLife(DisplayTheSecret);

export default WrappedComponentTest;
