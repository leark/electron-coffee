import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewBrewMethodTemplateForm(props) {
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
      <div className='pt-8 text-gray-900 px-6'>
        <h3 className='text-center text-lg'>new method</h3>
        <form className='mx-auto md:max-w-2xl' onSubmit={handleFormSubmit}>
          <label className='block'>
            <span className='text-gray-700'>name</span>
            <input
              type='text'
              name='name'
              className='
                mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orangebrown
                focus:ring-orangebrown
                focus:ring-opacity-50'
            />
          </label>
          <label className='block'>
            <span className='text-gray-700'>type</span>
            <input
              type='text'
              name='type'
              className='
                mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orangebrown focus:ring-orangebrown focus:ring-opacity-50'
            />
          </label>
          <label className='block'>
            <span className='text-gray-700'>method</span>
            <input
              type='text'
              name='method'
              className='
                mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orangebrown focus:ring-orangebrown focus:ring-opacity-50'
            />
          </label>
          <div className='text-center m-1'>
            <button
              className='rounded-full bg-darkbrown text-beige px-4 py-1.5'
              type='submit'
            >
              create new method
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

NewBrewMethodTemplateForm.propTypes = {
  onAddNewBrewMethod: PropTypes.func,
};

export default NewBrewMethodTemplateForm;
