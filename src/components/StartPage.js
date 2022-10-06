import React from 'react';
import PropTypes from 'prop-types';
import BrewMethod from './BrewMethod';

function StartPage(props) {
  const sectionStyles = {
    width: '300px',
    height: '400px',
  };
  const brewMethodCSS = {
    border: 'solid 3px black',
    cursor: 'pointer',
  };

  const sectionClassName =
    'start-section m-2 p-1 rounded-lg border-brown border-4 text-brown';

  return (
    <React.Fragment>
      <div className='flex flex-row m-5 justify-center h-full'>
        <div
          id='new-brew-method'
          className={sectionClassName}
          style={sectionStyles}
          onClick={props.onClickNewBrewMethod}
        >
          <h3 className='text-2xl font-bold underline'>start</h3>
          <div
            className='rounded-lg m-2 p-0.5'
            style={brewMethodCSS}
            onClick={props.onClickNewBrewMethod}
          >
            <h4 className='font-bold'>new method</h4>
            <p>create new workflow from scratch</p>
          </div>
          <div
            className='rounded-lg m-2 p-0.5'
            style={brewMethodCSS}
            onClick={props.onClickNewBrewMethodFromTemplate}
          >
            <h4 className='font-bold'>new from template</h4>
            <p>create new using a template</p>
          </div>
        </div>
        <div className={sectionClassName} style={sectionStyles}>
          <h3 className='text-2xl font-bold underline'>
            saved brewing methods
          </h3>
          {props.brewMethodList.map((brewMethod) => (
            <BrewMethod
              whenBrewMethodClicked={props.onBrewMethodSelection}
              id={brewMethod.id}
              key={brewMethod.id}
              name={brewMethod.name}
              type={brewMethod.type}
              method={brewMethod.method}
              steps={brewMethod.steps}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

StartPage.propTypes = {
  brewMethodList: PropTypes.array,
  onBrewMethodSelection: PropTypes.func,
  onClickNewBrewMethod: PropTypes.func,
  onClickNewBrewMethodFromTemplate: PropTypes.func,
};

export default StartPage;
