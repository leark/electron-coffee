import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewBrewMethodStepForm from './NewBrewMethodStepForm';

function BrewMethodDetail(props) {
  const { brewMethod, onAddNewStep } = props;
  const [newStepFormVisible, setNewStepFormVisible] = useState(false);
  const stepStyle = {
    border: 'solid 1px black',
    width: '300px',
  };

  const handleShowAddNewStep = () => {
    setNewStepFormVisible(!newStepFormVisible);
  };

  const handleAddNewStep = (stepInfo) => {
    onAddNewStep(stepInfo);
    setNewStepFormVisible(!newStepFormVisible);
  };

  let stepForm = null;
  let buttonText = null;
  let steps = brewMethod.steps.map((step) => (
    <div className='text-center mx-auto' style={stepStyle} key={step.stepId}>
      <p>{step.stepName}</p>
      <p>{step.stepInfo}</p>
    </div>
  ));

  if (newStepFormVisible) {
    stepForm = (
      <div id='steps'>
        <NewBrewMethodStepForm
          onAddNewStep={handleAddNewStep}
          id={brewMethod.id}
        />
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
      {steps}
      {stepForm}
      <div className='text-center m-1'>
        <button
          className='rounded-full bg-slate-400 px-4 py-1.5'
          onClick={handleShowAddNewStep}
        >
          {buttonText}
        </button>
      </div>
    </React.Fragment>
  );
}

BrewMethodDetail.propTypes = {
  brewMethod: PropTypes.object,
  onAddNewStep: PropTypes.func,
};

export default BrewMethodDetail;
