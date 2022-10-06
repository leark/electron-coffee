import React from 'react';

function Sidebar() {
  const sidebarStyle = {
    backgroundColor: '#562A0E',
    color: '#E4CEAF',
  };

  return (
    <React.Fragment>
      <div style={sidebarStyle} className='flex basis-8'></div>
    </React.Fragment>
  );
}

export default Sidebar;
