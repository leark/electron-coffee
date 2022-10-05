import React, { useEffect, useState, useCallback } from 'react';
import BrewMethod from './BrewMethod';
import BrewMethodDetail from './BrewMethodDetail';
import NewBrewMethodForm from './NewBrewMethodForm';
import SplashPage from './StartPage';
import sleep from './sleep';
import { v4 } from 'uuid';

function BrewControl() {
  // add date that gets updated with edit or last accessed
  // or have both
  // const [brewMethodList, setBrewMethodList] = useState([
  //   {
  //     id: '1',
  //     name: 'my first brew method',
  //     type: 'drip',
  //     method: 'chemex',
  //     steps: [],
  //   },
  //   {
  //     id: '2',
  //     name: 'I like espresso shots',
  //     type: 'pressure',
  //     method: 'espresso',
  //     steps: [
  //       {
  //         stepName: 'Grind beans',
  //         stepInfo: '15g',
  //         stepId: '1',
  //       },
  //     ],
  //   },
  // ]);
  const [brewMethodList, setBrewMethodList] = useState(null);
  const [selectedBrewMethod, setSelectedBrewMethod] = useState(null);
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadFromFile = async (fileName) => {
    await fetch(fileName, {
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
        // console.log(jsonObj);
        return jsonObj;
      });
  };

  const loadSaved = useCallback(async () => {
    const response = await fetch('test.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const json = await response.json();
    await sleep(1000);
    setBrewMethodList(json.saved);
    setLoading(false);
    // const saved = await loadFromFile('test.json');
    // console.log(saved);
    // setBrewMethodList(saved);
    // setLoading(false);
  }, []);

  useEffect(() => {
    loadSaved().catch(console.error);
  }, [loadSaved]);

  const saveToLocalStorage = () => {
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
  if (!loading) {
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
  } else {
    currScreen = <div>Loading</div>;
  }

  const brewControlStyle = {
    backgroundColor: '#E4CEAF',
    backgroundImage: 'url(/recycledpaper3.png)',
    color: '#330E01',
  };

  return (
    <React.Fragment>
      <div style={brewControlStyle} className='h-full flex-1'>
        {currScreen}
        <div className='text-center'>{button}</div>
      </div>
    </React.Fragment>
  );
}

export default BrewControl;
