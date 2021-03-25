import '../../reset.css'
import Meals from '../Meals/Meals'
import { setUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'

const Main = (props) => {

    if (props.user.isLoggedIn === false) {
        props.history.push('/')
    }

    return (
        <div>
            <Meals/>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { setUser })(Main)