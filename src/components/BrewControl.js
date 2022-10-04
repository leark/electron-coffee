import React, { useState } from 'react';
import BrewMethod from './BrewMethod';
import BrewMethodDetail from './BrewMethodDetail';
import NewBrewMethodForm from './NewBrewMethodForm';
import SplashPage from './SplashPage';

function BrewControl() {
  const [brewMethodList, setBrewMethodList] = useState([
    {
      id: '1',
      name: 'my first brew method',
      type: 'drip',
      method: 'chemex',
    },
    {
      id: '2',
      name: 'I like espresso shots',
      type: 'pressure',
      method: 'espresso',
    },
  ]);
  const [selectedBrewMethod, setSelectedBrewMethod] = useState(null);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);

  const handleLoadingBrewMethod = (id) => {
    const selected = brewMethodList.filter((method) => method.id === id)[0];
    setSelectedBrewMethod(selected);
  };

  const handleClick = () => {
    if (selectedBrewMethod) {
      setSelectedBrewMethod(null);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleAddNewBrewMethod = (newBrewMethod) => {
    const newBrewMethodList = brewMethodList.concat(newBrewMethod);
    setBrewMethodList(newBrewMethodList);
  };

  let currScreen = null;
  let button = null;
  const backToSplashButton = (
    <button
      className='rounded-full bg-slate-400 px-4 py-1.5'
      onClick={handleClick}
    >
      Back to Start
    </button>
  );

  if (selectedBrewMethod) {
    currScreen = <BrewMethodDetail brewMethod={selectedBrewMethod} />;
    button = backToSplashButton;
  } else if (formVisibleOnPage) {
    currScreen = (
      <NewBrewMethodForm onAddNewBrewMethod={handleAddNewBrewMethod} />
    );
    button = backToSplashButton;
  } else {
    currScreen = (
      <SplashPage
        brewMethodList={brewMethodList}
        onBrewMethodSelection={handleLoadingBrewMethod}
        onClickNewBrewMethod={handleClick}
      />
    );
    button = null;
  }

  return (
    <React.Fragment>
      <div className='container'>
        {currScreen}
        <div className='text-center'>{button}</div>
      </div>
    </React.Fragment>
  );
}

export default BrewControl;
