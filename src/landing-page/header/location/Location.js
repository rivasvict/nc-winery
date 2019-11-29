import React from 'react';
import { FaMapMarker } from 'react-icons/fa';

const locationContainerStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
  placeSelf: 'flex-end'
};

function Location () {
  return (
    <div style={locationContainerStyle}>
      <FaMapMarker /> 135 Taylor Rd, Niagara-on-the-Lake, ON L0S 1J0
    </div>
  );
}

export default Location;