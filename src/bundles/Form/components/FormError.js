import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  message: PropTypes.string,
};

function FormError(props) {
  const { message, ...attributes } = props;

  return (
    <div
      className={classNames('alert', 'alert-danger', { 'hidden-xs-up': !message })}
      {...attributes}
    >
      {message}
    </div>
  );
}

FormError.propTypes = propTypes;

export default FormError;
