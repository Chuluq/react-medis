import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ProfileSetting from './ProfileSetting'
import Menu from './Menu'
import UserManagement from './UserManagement'
import Practicioner from './Practicioner'
import PracticionerView from './PracticionerView'
import NotFound from './NotFound';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ProfileSetting} />
          <Route path='/menu' component={Menu} />
          <Route path='/user-management' component={UserManagement} />
          <Route exact path='/practicioner' component={Practicioner} />
          <Route path='/practicioner/view' component={PracticionerView} />
          <Route component={NotFound} />
        </Switch>    
      </div>
    )
  }
}

export default Main