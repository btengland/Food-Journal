import './reset.css'
import { connect } from 'react-redux'
import Routes from './routes'
import Header from './Components/Header/Header'
import './App.css'
import { NotificationContainer } from 'react-notifications'
import { useEffect } from 'react'
import { getUser } from './ducks/userReducer'
import Footer from './Components/Footer/Footer'
// import Chart from './components/chart';

const App = (props) => {

  useEffect(() => {
    props.getUser()
  }, [])

  return (
    <div className="App">
      {props.user.isLoggedIn === true && <Header />}
      {Routes}
      {props.user.isLoggedIn === true && <Footer />}
      <NotificationContainer />
      
    </div>
  );
}
const mapStateToProps = state => state

export default connect(mapStateToProps, { getUser })(App);