import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  field: PropTypes.object.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  children: PropTypes.element.isRequired,
};

function FormControl(props) {
  const { field, label, children, ...attributes } = props;

  const error = field.touched ? field.error : null;
  const errorElement = error
    ? <div className="help-block">{error}</div>
    : null;
  const labelElement = label
    ? <label htmlFor={field.name}>{label}</label>
    : null;

  return (
    <div className="form-group row" {...attributes}>
      <div className={classNames('col-xs-12', { 'has-error': error })}>
        {labelElement}

        <div>{children}</div>

        {errorElement}
      </div>
    </div>
  );
}

FormControl.propTypes = propTypes;

export default FormControl;
