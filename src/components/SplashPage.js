import React from 'react';
import PropTypes from 'prop-types';
import BrewMethod from './BrewMethod';

function SplashPage(props) {
  const sectionStyles = {
    border: 'solid 1px black',
    width: '500px',
    height: '300px',
  };

  return (
    <React.Fragment>
      <div
        id='new-brew-method'
        className='splash-section'
        style={sectionStyles}
      >
        <h3 className='text-2xl font-bold underline'>Create new method here</h3>
      </div>
      <div className='splash-section' style={sectionStyles}>
        <h3 className='text-2xl font-bold underline'>
          Show all the saved methods here
        </h3>
        {props.brewMethodList.map((brewMethod) => (
          <BrewMethod
            whenBrewMethodClicked={props.onBrewMethodSelection}
            id={brewMethod.id}
            name={brewMethod.name}
            type={brewMethod.type}
            method={brewMethod.method}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

SplashPage.propTypes = {
  brewMethodList: PropTypes.array,
  onBrewMethodSelection: PropTypes.func,
};

export default SplashPage;
