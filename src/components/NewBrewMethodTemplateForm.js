import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import sleep from './sleep';

function NewBrewMethodTemplateForm(props) {
  const defaultTemplate = {
    id: '0',
    author: '',
    title: '',
    type: '',
    method: '',
    steps: [],
  };

  const [templates, setTemplates] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(defaultTemplate);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [method, setMethod] = useState('');
  const [showingTemplate, setShowingTemplate] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onAddNewBrewMethod({
      ...selectedTemplate,
      name: selectedTemplate.title,
      id: v4(),
    });
  };

  const loadTemplate = useCallback(async () => {
    const response = await fetch('templates.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const json = await response.json();
    setTemplates(json.presets);
    setLoading(false);
    // console.log(json);
  }, []);

  useEffect(() => {
    loadTemplate().catch(console.error);
  }, [loadTemplate]);

  const handleChange = async (event) => {
    if (event.target.value !== 'default') {
      setSelectedTemplate(
        templates.filter((template) => template.id === event.target.value)[0]
      );
    }
  };

  useEffect(() => {
    handleFormChange();
  }, [selectedTemplate]);

  const handleFormChange = () => {
    setName(selectedTemplate.title);
    setType(selectedTemplate.type);
    setMethod(selectedTemplate.method);
    setShowingTemplate(true);
  };

  let options = null;
  let steps = null;

  if (!loading) {
    options = templates.map((template) => (
      <option key={template.id} value={template.id}>
        {template.title}
      </option>
    ));
    if (showingTemplate) {
      steps = selectedTemplate.steps.map((step) => (
        <div
          className='text-center mx-auto rounded-lg border-orangerust border-2 bg-beige m-1'
          key={step.stepId}
        >
          <p>{step.stepName}</p>
          <p>{step.stepInfo}</p>
        </div>
      ));
    }
  }

  return (
    <React.Fragment>
      <div className='pt-8 text-gray-900 px-6'>
        <h3 className='text-center text-lg'>new method</h3>
        <form className='mx-auto md:max-w-2xl' onSubmit={handleFormSubmit}>
          <label className='block'>
            <select className='' onChange={handleChange}>
              <option value='default'>select a template</option>
              {options}
            </select>
          </label>
          <label className='block'>
            <span className='text-gray-700'>name</span>
            <input
              id='name'
              type='text'
              name='name'
              className='
                mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orangebrown
                focus:ring-orangebrown
                focus:ring-opacity-50'
              defaultValue={name}
            />
          </label>
          <label className='block'>
            <span className='text-gray-700'>type</span>
            <input
              id='type'
              type='text'
              name='type'
              className='
                mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orangebrown focus:ring-orangebrown focus:ring-opacity-50'
              defaultValue={type}
            />
          </label>
          <label className='block'>
            <span className='text-gray-700'>method</span>
            <input
              id='method'
              type='text'
              name='method'
              className='
                mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orangebrown focus:ring-orangebrown focus:ring-opacity-50'
              defaultValue={method}
            />
          </label>
          {steps}
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
