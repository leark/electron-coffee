import React, { useState } from 'react';
import BrewMethod from './BrewMethod';
import SplashPage from './SplashPage';

function BrewControl() {
  const [selectedBrewMethod, setSelectedBrewMethod] = useState(null);
  const handleLoadingBrewMethod = (id) => {};

  let currScreen = SplashPage;
  if (selectedBrewMethod) {
    currScreen = <BrewMethod brewMethod={selectedBrewMethod} />;
  }
  return <React.Fragment>{currScreen}</React.Fragment>;
}

export default BrewControl;
