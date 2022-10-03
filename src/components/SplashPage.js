import React from 'react';

function SplashPage() {
  const sectionStyles = {
    border: '1px black',
    width: '300px',
    height: '300px',
  };

  return (
    <React.Fragment>
      <div id='new-brew-method' class='splash-section' style={sectionStyles}>
        <h3>Create new method here</h3>
      </div>
      <div class='splash-section' style={sectionStyles}>
        <h3>Show all the saved methods here</h3>
      </div>
    </React.Fragment>
  );
}

export default SplashPage;
