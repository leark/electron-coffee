import React, { useEffect, useState } from 'react';
import BrewMethod from './BrewMethod';
import BrewMethodDetail from './BrewMethodDetail';
import NewBrewMethodForm from './NewBrewMethodForm';
import SplashPage from './StartPage';
import { v4 } from 'uuid';

function BrewControl() {
  // add date that gets updated with edit or last accessed
  // or have both
  const [brewMethodList, setBrewMethodList] = useState([
    {
      id: '1',
      name: 'my first brew method',
      type: 'drip',
      method: 'chemex',
      steps: [],
    },
    {
      id: '2',
      name: 'I like espresso shots',
      type: 'pressure',
      method: 'espresso',
      steps: [
        {
          stepName: 'Grind beans',
          stepInfo: '15g',
          stepId: '1',
        },
      ],
    },
  ]);
  const [selectedBrewMethod, setSelectedBrewMethod] = useState(null);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);

  useEffect(() => {
    loadFromFile();
  }, []);

  const loadFromFile = () => {
    fetch('test.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((jsonObj) => {
        console.log(jsonObj);
      });
  };

  const saveToFile = () => {
    const jsonString = JSON.stringify({
      saved: brewMethodList,
    });
    localStorage.setItem();
  };
  /*
    TextFile = () => {
        const element = document.createElement("a");
        const textFile = new Blob([[JSON.stringify('pass data from localStorage')], {type: 'text/plain'}); //pass data from localStorage API to blob
        element.href = URL.createObjectURL(textFile);
        element.download = "userFile.txt";
        document.body.appendChild(element); 
        element.click();
      }
  */

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

  const handleAddNewStep = (stepInfo) => {
    const method = brewMethodList.filter(
      (method) => method.id === stepInfo.id
    )[0];
    const newSteps = method.steps.concat({
      stepName: stepInfo.stepName,
      stepInfo: stepInfo.stepInfo,
      stepId: v4(),
    });
    const newMethod = { ...method, steps: newSteps };
    const newMethodList = brewMethodList
      .filter((method) => method.id !== stepInfo.id)
      .concat(newMethod);
    setBrewMethodList(newMethodList);
    setSelectedBrewMethod(newMethod);
    // saveToFile();
  };

  let currScreen = null;
  let button = null;
  const backToSplashButton = (
    <button
      className='rounded-full bg-slate-400 px-4 py-1.5'
      onClick={handleClick}
    >
      back to start
    </button>
  );

  if (selectedBrewMethod) {
    currScreen = (
      <BrewMethodDetail
        brewMethod={selectedBrewMethod}
        onAddNewStep={handleAddNewStep}
      />
    );
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
