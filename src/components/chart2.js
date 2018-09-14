import React from 'react';


// Import module and default styles
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const percentage = 50;

const Chart = () => (
  <div>
    <div style={{ width: '100px' }}>
      <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
    </div>
  </div>
);

export default Chart;
