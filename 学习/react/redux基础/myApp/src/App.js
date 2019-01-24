import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';


import AddList from './pages/AddList/AddList';
import './App.css';

class App1 extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/AddList' component={AddList}></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App1);
