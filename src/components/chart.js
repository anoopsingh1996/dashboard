import React from 'react';
import { Grid, Cell , } from 'react-mdl';

// Import module and default styles
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Import custom examples
import StyledProgressbar from './StyledProgressbar';

function Label(props) {
  return <div style={{ marginTop: 25, marginBottom: 5 }}>{props.children}</div>;
}

const percentage = 50;
const score = 75;

const Chart = () => (
  <div>
  <Grid>
  <Cell col={6}>
    <div style={{ width: '100px' }}>
      <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
    </div>
     <Label>COMPLETION</Label>
    </Cell>
    <Cell col={6}>
    <div style={{ width: '100px' }}>
      <StyledProgressbar percentage={score} text={`${score}%`} />
    </div>
       <Label>SCORE</Label>
    </Cell>
    </Grid>
  </div>
);

export default Chart;
