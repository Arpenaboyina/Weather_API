import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from './actions';  // Use relative path

const Inc = ({ count, increase, decrease }) => {
  return (
    <div>
      count from Inc Component: {count}
      <br />
      <br />
      <button onClick={() => increase()}>Increment</button> &nbsp; &nbsp;
      <button onClick={() => decrease()}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count, // Assuming `count` is a property in your Redux state
});

export default connect(mapStateToProps, { increase, decrease })(Inc);
