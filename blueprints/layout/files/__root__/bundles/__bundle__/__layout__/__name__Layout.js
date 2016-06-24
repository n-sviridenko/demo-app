import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element,
};

function <%= pascalEntityName %>Layout({ children }) {
  return (
    <div className="<%= snakeEntityName %>-layout">
      {children}
    </div>
  );
}

<%= pascalEntityName %>Layout.propTypes = propTypes;

export default <%= pascalEntityName %>Layout;
