import React from 'react';

const BreakdownBarLabels = (props) => {

  const generateLabels = () => {
    switch (props.char) {
      case 'Size':
        return (
          <div className="labels-container">
            <div>Too small</div>
            <div>Too big</div>
          </div>
        )
      case 'Fit':
        return (
          <div className="labels-container">
            <div>Too small</div>
            <div>Too big</div>
          </div>
        )
      case 'Quality':
        return (
          <div className="labels-container">
            <div>Poor</div>
            <div>Great</div>
          </div>
        )
      case 'Comfort':
        return (
          <div className="labels-container">
            <div>Uncomfortable</div>
            <div>Perfect</div>
          </div>
        )
      case 'Width':
        return (
          <div className="labels-container">
            <div>Too narrow</div>
            <div>Too wide</div>
          </div>
        )
      case 'Length':
        return (
          <div className="labels-container">
            <div>Too short</div>
            <div>Too long</div>
          </div>
        )
      default:
        break;
    }
  }

  return (
    <>
      {generateLabels()}
    </>
  )
}

export default BreakdownBarLabels;