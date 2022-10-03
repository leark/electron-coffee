import React from 'react';
import PropTypes from 'prop-types';

function BrewMethodDetail(props) {
  const { brewMethod } = props;
  return (
    <React.Fragment>
      <h1>{brewMethod.name}</h1>
      <h3>
        {brewMethod.type} - {brewMethod.method}
      </h3>
    </React.Fragment>
  );
}

BrewMethodDetail.propTypes = {
  brewMethod: PropTypes.object,
};

export default BrewMethodDetail;
