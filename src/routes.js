import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Components/Auth/landing'
import Main from './Components/Main/Main'
import Graphs from './Components/Graphs/Graphs'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/main' component={Main} />
        <Route path='/graphs' component={Graphs} />
    </Switch>
)