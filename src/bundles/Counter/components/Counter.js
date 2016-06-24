import React, { PropTypes } from 'react';

import classes from '../assets/counter.scss';

const propTypes = {
  counter: PropTypes.number.isRequired,
  doubleAsync: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};

function Counter(props) {
  return (
    <div>
      <h2 className={classes.counterContainer}>
        Counter:
        {' '}
        <span className={classes['counter--green']}>
          {props.counter}
        </span>
      </h2>
      <button className="btn btn-secondary" onClick={props.increment}>
        Increment
      </button>
      {' '}
      <button className="btn btn-secondary" onClick={props.doubleAsync}>
        Double (Async)
      </button>
    </div>
  );
}

Counter.propTypes = propTypes;

export default Counter;
