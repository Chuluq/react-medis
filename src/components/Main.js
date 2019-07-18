import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ProfileSetting from './ProfileSetting'
import Menu from './Menu'
import Practicioner from './Practicioner'

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ProfileSetting} />
          <Route path='/menu' component={Menu} />
          <Route path='/practicioner' component={Practicioner} />
        </Switch>    
      </div>
    )
  }
}

export default Main