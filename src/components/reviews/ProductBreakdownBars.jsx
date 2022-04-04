import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProductBreakdownBars = (props) => {

  const symbol = `<svg width="10px" height="10px" xmlns="http://www.w3.org/2000/svg"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"</path></svg>`;

  const placeSymbol = () => {

  }

  const generateLabels = () => {
    switch (props.char) {
      case 'Size':
        return (
          <div>
            <span style={{ fontSize: '0.7em', margin: '14px' }}>Too small</span>
            <span style={{ fontSize: '0.7em', margin: '30px' }}>Perfect</span>
            <span style={{ fontSize: '0.7em', margin: '18px' }}>Too big</span>
          </div>
        )
      case 'Fit':
        return (
          <div>
            <span style={{ fontSize: '0.7em', margin: '14px' }}>Too small</span>
            <span style={{ fontSize: '0.7em', margin: '30px' }}>Perfect</span>
            <span style={{ fontSize: '0.7em', margin: '18px' }}>Too big</span>
          </div>
        )
      case 'Quality':
        return (
          <div>
            <span style={{ fontSize: '0.7em', margin: '26px' }}>Poor</span>
            <span style={{ fontSize: '0.7em', margin: '126px' }}>Great</span>
          </div>
        )
      case 'Comfort':
        return (
          <div>
            <span style={{ fontSize: '0.7em', margin: '7px' }}>Uncomfortable</span>
            <span style={{ fontSize: '0.7em', margin: '108px' }}>Perfect</span>
          </div>
        )
      case 'Width':
        return (
          <div>
            <span style={{ fontSize: '0.7em', margin: '14px' }}>Too small</span>
            <span style={{ fontSize: '0.7em', margin: '30px' }}>Perfect</span>
            <span style={{ fontSize: '0.7em', margin: '18px' }}>Too big</span>
          </div>
        )
      case 'Length':
        return (
          <div>
            <span style={{ fontSize: '0.7em', margin: '14px' }}>Too small</span>
            <span style={{ fontSize: '0.7em', margin: '30px' }}>Perfect</span>
            <span style={{ fontSize: '0.7em', margin: '18px' }}>Too big</span>
          </div>
        )
      default:
        break;

    }
  }
  return (

    <div className="breakdownBar-container">
      <ProgressBar id="rating-1.9" now={0} min={0} max={1.9} style={{ margin: '3px', height: '10px', width: '80px', display: 'inline-block' }} />
      <ProgressBar id="rating-3.9" now={0} min={2} max={3.9} style={{ margin: '3px', height: '10px', width: '80px', display: 'inline-block' }} />
      <ProgressBar id="rating-5" now={4} min={4} max={5.0} style={{ margin: '3px', height: '10px', width: '80px', display: 'inline-block' }} />

      {generateLabels()}
    </div>

  )
}

export default ProductBreakdownBars;