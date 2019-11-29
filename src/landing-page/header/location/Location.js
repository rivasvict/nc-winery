import React from 'react';
import { FaMapMarker, FaCartPlus } from 'react-icons/fa';

const locationContainerStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
  placeSelf: 'flex-end'
};

const cartIconStyle = {
  marginLeft: '10px',
  fontSize: '1.5em'
};

function Location () {
  return (
    <div style={locationContainerStyle}>
      <FaMapMarker /> 135 Taylor Rd, Niagara-on-the-Lake, ON L0S 1J0 <FaCartPlus style={cartIconStyle} />
    </div>
  );
}

export default Location;