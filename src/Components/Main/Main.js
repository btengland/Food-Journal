import '../../reset.css'
import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getMeals } from '../../ducks/mealReducer'
import Meals from '../Meals/Meals'


const Main = (props) => {

    if (props.user.isLoggedIn === false) {
        props.history.push('/')
    }

    useEffect(async () => {
        try {
            const mealList = await axios.get('/api/foods')
            props.getMeals(mealList.data)
        }
        catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <div>
            <Meals />
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { getMeals })(Main)
