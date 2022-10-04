import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewBrewMethodForm(props) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onAddNewBrewMethod({
      name: event.target.name.value,
      type: event.target.type.value,
      method: event.target.method.value,
      id: v4(),
    });
  };

  return (
    <React.Fragment>
      <div className='mt-8 text-gray-900 px-6'>
        <form className='mx-auto md:max-w-2xl' onSubmit={handleFormSubmit}>
          <label className='block'>
            <span className='text-gray-700'>Name</span>
            <input        
              type='text'
              name='name'
              className='
                mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </label>
          <label className='block'>
            <span className='text-gray-700'>Type</span>
            <input
              type='text'
              name='type'
              className='
                mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </label>
          <label className='block'>
            <span className='text-gray-700'>Method</span>
            <input
              type='text'
              name='method'
              className='
                mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </label>
          <div className='text-center m-1'>
            <button
              className='rounded-full bg-slate-400 px-4 py-1.5'
              type='submit'
            >
              Create New Method
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

NewBrewMethodForm.propTypes = {
  onAddNewBrewMethod: PropTypes.func,
};

export default NewBrewMethodForm;
