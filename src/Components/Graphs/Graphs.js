import '../../reset.css'
import { setUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'

const Graphs = (props) => {

    if (props.user.isLoggedIn === false) {
        props.history.push('/')
    }

    return (
        <div>Graphs</div>
    )
}

const mapStateToProps = state => state

export default  connect(mapStateToProps, { setUser })(Graphs)