import React from 'react';
import PropTypes from 'prop-types';
import BrewMethod from './BrewMethod';

function SplashPage(props) {
  const sectionStyles = {
    border: 'solid 1px black',
    width: '500px',
    height: '300px',
  };

  const sectionClassName = 'splash-section mx-auto container';

  return (
    <React.Fragment>
      <div className='container columns-2'>
        <div
          id='new-brew-method'
          className={sectionClassName}
          style={sectionStyles}
          onClick={props.onClickNewBrewMethod}
        >
          <h3 className='text-2xl font-bold underline'>Create New Method</h3>
        </div>
        <div className={sectionClassName} style={sectionStyles}>
          <h3 className='text-2xl font-bold underline'>
            Saved Brewing Methods
          </h3>
          {props.brewMethodList.map((brewMethod) => (
            <BrewMethod
              whenBrewMethodClicked={props.onBrewMethodSelection}
              id={brewMethod.id}
              key={brewMethod.id}
              name={brewMethod.name}
              type={brewMethod.type}
              method={brewMethod.method}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

SplashPage.propTypes = {
  brewMethodList: PropTypes.array,
  onBrewMethodSelection: PropTypes.func,
  onClickNewBrewMethod: PropTypes.func,
};

export default SplashPage;
