import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Auth/landing'
import Main from './Components/Main/Main'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/main' component={Main}/>
    </Switch>
)