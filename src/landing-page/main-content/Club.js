import React from 'react';

const callToActionBottom = {
  backgroundColor: '#3c3a3a',
  flex: 1,
  width: '100%',
  height: '25vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
  fontSize: '2em',
  fontWeight: 'bold'
};

const textContent = {
  margin: '1.5% 0px',
  fontWeight: '200'
}

const subscribeButtonStyle = {
  color: 'white'
};

function Club() {
  return (
    <div style={callToActionBottom}>
      <div>
        Join our Club
      </div>
      <div style={textContent}>
        To enjoy a full experience of true wine and discover the best sensations
      </div>
      <div className='call-to-action' style={subscribeButtonStyle}>Subscribe</div>
    </div>
  )
}

export default Club;