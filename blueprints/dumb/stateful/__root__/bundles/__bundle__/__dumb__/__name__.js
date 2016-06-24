import React, { PropTypes } from 'react';

const propTypes = {
};

const defaultProps = {
};

class <%= pascalEntityName %> extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const {  } = this.props;

    return (
      <div></div>
    );
  }
}

<%= pascalEntityName %>.propTypes = propTypes;
<%= pascalEntityName %>.defaultProps = defaultProps;

export default <%= pascalEntityName %>;
