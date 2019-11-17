import React from 'react';

const locationContainerStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'right'
};

function Location () {
  return (
    <div style={locationContainerStyle}>
      <span aria-label='location' role="img">📍</span> 135 Taylor Rd, Niagara-on-the-Lake, ON L0S 1J0
    </div>
  );
}

export default Location;