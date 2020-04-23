import React from 'react';
import PropTypes from 'prop-types';

const PrintObject = (object) => (
  <code>
    <pre style={{ margin: '0 0 20px' }}>
      {JSON.stringify(object, (k, v) => (v === undefined ? 'undefined' : v), 2)}
    </pre>
  </code>
);

PrintObject.defaultProps = {
  object: {},
};

PrintObject.propTypes = {
  object: PropTypes.shape({}),
};

export default PrintObject;
