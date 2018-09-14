import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation,  Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header>
        <img src="assets/p0.png" height="30" width="41" alt="Profile" />
            <Navigation style={{padding: '400px'}}>
                <Link to="/">HOME</Link>
                <Link to="/projects">TRAINING</Link>
                <Link to="/aboutme">WALLET</Link>
            </Navigation>
            <img src="assets/pro.png" height="30" width="41" alt="Profile" />
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
