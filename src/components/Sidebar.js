import React from 'react';

function Sidebar() {
  const sidebarStyle = {
    backgroundColor: '#562A0E',
    color: '#E4CEAF',
  };

  return (
    <React.Fragment>
      <div style={sidebarStyle} className='flex-none basis-1'>
        This is where sidebar is
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
