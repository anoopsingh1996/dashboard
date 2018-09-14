import React, { Component } from 'react';
import { Grid, Cell, Card, CardMenu, CardText, IconButton, Checkbox,  } from 'react-mdl';
import Chart from './chart';



class Landing extends Component {
  render() {
    return(
<div style={{width: '100%', margin: 'auto'}}>
    <Grid >
        <Cell col={12}>
            <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                <CardText>
                  <Grid >
                    <Cell col={2}>
                      <img src="assets/pro.png" height="30" width="41" alt="Profile" />
                    </Cell>
                    <Cell col={10}>
                      <h4>Welcome, Josh.</h4>
                      <Grid>
                        <Cell col={1}>
                          1/8/2018
                          1/8/2018
                          <br />
                          1/8/2018
                        </Cell>
                        <Cell col={3}>
                          <strong>Business Development</strong>
                          <strong> Business Ethics</strong>
                          <br />
                          <strong> Update Form Champ..</strong>
                        </Cell>
                      </Grid>
                    </Cell>
                  </Grid>
                </CardText>
                <CardMenu style={{color: '#27221F'}}>
                    <IconButton name="arrow_upward" />
                </CardMenu>
            </Card>
        </Cell>
    </Grid>
    <Grid>
       <Cell col={2}>
          <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
             <img src="assets/p1.png" alt="Profile" />
          </Card>
          <br />
          <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
           <img src="assets/p2.png" alt="Profile" />
          </Card>
          <br />
          <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
          <CardText className="text-cente ">
            <h4>Success</h4>
          <div className=" chec-position">
             <Checkbox  label="goal" ripple defaultChecked />
             <Checkbox  label="plan" />
             <Checkbox  label="action"/>
           </div>
          </CardText>
          </Card>
       </Cell>
       <Cell col={4}>
         <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
          <CardText className="text-center">
          <h4>Business Development</h4>
          Estimated Time: 15 minutes
          </CardText>
         </Card>
         <br />
         <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
          <CardText className="text-center">
          <h4>Business Ethics</h4>
          Estimated Time: 15 minutes
          </CardText>
         </Card>
         <br />
         <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
          <CardText className="text-center">
          <h4>Business Development</h4>
          Estimated Time: 15 minutes
          </CardText>
         </Card>
       </Cell>
       <Cell col={6}>
         <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
         <CardText className="text-center">
             <h6>TRAINING INSIGHTS</h6>
             </CardText>
               <Chart />
             </Card>
             <br />
             <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
             <CardText>
             <h4>Update</h4>
             <p>
             While the term education system is widely and frequently used in news media and public discourse, it may be difficult to determine precisely what the term is referring to when it is used without qualification, specific examples, or additional explanation.
            Like the teaching profession, education systems are, by nature, extremely complex and multifaceted, and the challenges entailed in reforming or improving them can be similarly complex and multifaceted. Even reforms that appear to be straightforward, simple, or easily achieved may, in practice, require complicated state-policy changes, union-contract negotiations, school-schedule modifications, or countless other conditions. For a related discussion,</p>
         </CardText>
         </Card>
       </Cell>
  </Grid>
</div>
    )
  }
}

export default Landing;
