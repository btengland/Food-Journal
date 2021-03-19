import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Register from './Components/Auth/Register'

export default (
    <Switch>
        <Route exact path='/' component={Register}/>
    </Switch>
)