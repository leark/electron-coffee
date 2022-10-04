import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewBrewMethodStepForm from './NewBrewMethodStepForm';

function BrewMethodDetail(props) {
  const { brewMethod } = props;
  const [newStepFormVisible, setNewStepFormVisible] = useState(false);

  const handleAddNewStep = () => {
    setNewStepFormVisible(!newStepFormVisible);
  };

  const stepForm = null;
  const buttonText = null;

  if (newStepFormVisible) {
    stepForm = (
      <div id='steps'>
        <NewBrewMethodStepForm />
      </div>
    );
    buttonText = 'Cancel';
  } else {
    stepForm = null;
    buttonText = 'Add New Step';
  }
  return (
    <React.Fragment>
      <div className='text-center'>
        <h1>{brewMethod.name}</h1>
        <h3>
          {brewMethod.type} - {brewMethod.method}
        </h3>
      </div>
      {stepForm}
      <div className='text-center m-1'>
        <button
          className='rounded-full bg-slate-400 px-4 py-1.5'
          onClick={handleAddNewStep}
        >
          {buttonText}
        </button>
      </div>
    </React.Fragment>
  );
}

BrewMethodDetail.propTypes = {
  brewMethod: PropTypes.object,
};

export default BrewMethodDetail;
