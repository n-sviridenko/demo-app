import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import formSubmit from 'bundles/Form/utils/formSubmit';
import FormControl from 'bundles/Form/components/FormControl';
import FormError from 'bundles/Form/components/FormError';
import { setUser, hideLoginForm } from '../modules/auth';

export const fields = ['username', 'password', 'remember'];

const submit = formSubmit({
  endpoint: '/api/v1/auth/login',
  method: 'POST',
  successAction: ({ payload, dispatch }) => {
    dispatch(setUser(payload.user));
    dispatch(hideLoginForm());
  },
});

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  error: PropTypes.string,
  submitting: PropTypes.bool.isRequired,
};

export function AuthForm(props) {
  const {
    fields: { username, password, remember },
    error,
    handleSubmit,
    submitting,
  } = props;

  return (
    <form className="form-horizontal" onSubmit={handleSubmit(submit)}>
      <FormError message={error} />
      <FormControl field={username} label="Login">
        <input type="text" className="form-control" {...username} />
      </FormControl>
      <FormControl field={password} label="Password">
        <input type="password" className="form-control" {...password} />
      </FormControl>
      <FormControl field={remember}>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="1" {...remember} />
            Remember me
          </label>
        </div>
      </FormControl>
      <div>
        <Button type="submit" bsStyle="danger" disabled={submitting}>Sign in</Button>
      </div>
    </form>
  );
}

AuthForm.propTypes = propTypes;

export default reduxForm({
  form: 'auth',
  fields,
})(AuthForm);
