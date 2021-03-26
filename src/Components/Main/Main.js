import '../../reset.css'
import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {getUser} from '../../ducks/userReducer'
import { getMeals } from '../../ducks/mealReducer'
import Meals from '../Meals/Meals'
import Linegraph from '../Graphs/Linegraph'


const Main = (props) => {

    if (props.user.isLoggedIn === false) {
        props.history.push('/')
    }

    useEffect(() => {
        props.getUser()
      }, [])

    useEffect(async () => {
        try {
            const mealList = await axios.get('/api/foods')
            console.log(mealList.data)
            props.getMeals(mealList.data)
        }
        catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <div>
            <Linegraph/>
            <Meals />
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { getMeals, getUser })(Main)
