import React, { useState } from 'react';
import BrewMethod from './BrewMethod';
import BrewMethodDetail from './BrewMethodDetail';
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
  const handleLoadingBrewMethod = (id) => {
    const selected = brewMethodList.filter((method) => method.id === id)[0];
    setSelectedBrewMethod(selected);
  };

  const handleClick = () => {
    if (selectedBrewMethod) {
      setSelectedBrewMethod(null);
    }
  };

  let currScreen = null;
  let button = null;
  if (selectedBrewMethod) {
    currScreen = <BrewMethodDetail brewMethod={selectedBrewMethod} />;
    button = <button onClick={handleClick}>Back to Splash</button>;
  } else {
    currScreen = (
      <SplashPage
        brewMethodList={brewMethodList}
        onBrewMethodSelection={handleLoadingBrewMethod}
      />
    );
    button = null;
  }

  return (
    <React.Fragment>
      {currScreen}
      {button}
    </React.Fragment>
  );
}

export default BrewControl;
