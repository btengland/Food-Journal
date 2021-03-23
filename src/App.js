import './reset.css'
import { connect } from 'react-redux'
import Routes from './routes'
import Header from './Components/Header/Header'
import './App.css'
import { NotificationContainer } from 'react-notifications'
import { useEffect } from 'react'
import { getUser } from './ducks/userReducer'

const App = (props) => {

  useEffect(() => {
    props.getUser()
  }, [])

  return (
    <div className="App">
      {props.user.isLoggedIn === true && <Header />}
      {Routes}
      <NotificationContainer />
    </div>
  );
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { getUser })(App);