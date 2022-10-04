import React from 'react';
import PropTypes from 'prop-types';

function BrewMethod(props) {
  const brewMethodCSS = {
    border: 'solid 1px black',
  };
  return (
    <React.Fragment>
      <div
        style={brewMethodCSS}
        onClick={() => props.whenBrewMethodClicked(props.id)}
      >
        <h4>{props.name}</h4>
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
