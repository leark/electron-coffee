import React from 'react';
import PropTypes from 'prop-types';

function BrewMethod(props) {
  const brewMethodCSS = {
    border: 'solid 3px black',
    cursor: 'pointer',
  };
  return (
    <React.Fragment>
      <div
        className='rounded-lg m-2 p-0.5'
        style={brewMethodCSS}
        onClick={() => props.whenBrewMethodClicked(props.id)}
      >
        <h4 className='font-bold'>{props.name}</h4>
        <p>
          {props.type} - {props.method}
        </p>
        <p>{props.steps.length} step process</p>
      </div>
    </React.Fragment>
  );
}

BrewMethod.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  method: PropTypes.string,
  whenBrewMethodClicked: PropTypes.func,
};

export default BrewMethod;
