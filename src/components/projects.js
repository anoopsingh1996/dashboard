import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Layout, Drawer, Navigation } from 'react-mdl';
import Chart from './chart2';



class Projects extends Component {
  render() {
    return(
  <div style={{width: '100%', margin: 'auto'}}>
  <Grid >
      <Cell col={12}>
          <Card shadow={0} style={{width: '130%', margin: 'auto'}}>
              <CardText>
                <Grid >
                  <Cell col={2}>
                    <img src="assets/p1.png" height="50" width="50" alt="Profile" />
                  </Cell>
                  <Cell col={6}>
                    <h4>Business Development</h4>
                  </Cell>
                  <Cell col={4}>
                    <Chart />
                  </Cell>
                </Grid>
              </CardText>
              <CardMenu style={{color: '#27221F'}}>
                  <IconButton name="share" />
              </CardMenu>
          </Card>
      </Cell>
  </Grid>
  <Grid>
  <Cell col={2}>
  <Layout fixedDrawer>
       <Drawer title="TRAINING">
           <Navigation>
               <a href="#">INTRODUCTION</a>
               <a href="#">VEDIO</a>
               <a href="#">SUMMARY</a>
               <a href="#">QUIZE</a>
               <a href="#">RESULT</a>
           </Navigation>
       </Drawer>
   </Layout>
   </Cell>
   <Cell col={10}>
   <Card shadow={0} style={{width: '95%', margin: 'auto'}}>
   <CardText>
    <h4>
      What is the Business Development and why it is matter??
    </h4>
    <p> While the term education system is widely and frequently used in news media and public discourse, it may be difficult to determine precisely what the term is referring to when it is used without qualification, specific examples, or additional explanation.
    Like the teaching profession, education systems are, by nature, extremely complex and multifaceted, and the challenges entailed in reforming or improving them can be similarly complex and multifaceted. Even reforms that appear to be straightforward, simple, or easily achieved may, in practice, require complicated state-policy changes, union-contract negotiations, school-schedule modifications, or countless other conditions. For a related discussion,
    Business development is the creation of long-term value for an organization from customers, markets, and relationships. Business development can be taken to mean any activity by either a small or large organisation, non-profit or for-profit enterprise which serves the purpose of 'developing' the business in some way.</p>
    <Button raised colored>NEXT</Button>

   </CardText>
   </Card>
   </Cell>
   </Grid>
  </div>
);
  }
}

export default Projects;
