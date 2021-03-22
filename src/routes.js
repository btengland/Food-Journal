import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Auth/landing'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
    </Switch>
)