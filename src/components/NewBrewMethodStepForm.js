import React from 'react';
import PropTypes from 'prop-types';

function NewBrewMethodStepForm(props) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <div className='mt-8 text-gray-900 px-6'>
        <form className='mx-auto md:max-w-2xl' onSubmit={handleFormSubmit}>
          <label className='block'>
            <span className='text-gray-700'>Step Name</span>
            <input
              type='text'
              name='name'
              className='
                mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </label>
          <label className='block'>
            <span className='text-gray-700'>Step Info</span>
            <input
              type='text'
              name='stepInfo'
              className='
                mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </label>
          <div className='text-center m-1'>
            <button
              className='rounded-full bg-slate-400 px-4 py-1.5'
              type='submit'
            >
              Add Step
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default NewBrewMethodStepForm;