import '../../reset.css'
import './Landing.css'
import React, { useState } from 'react'
import { setUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import axios from 'axios'
import { NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

const Landing = (props) => {
    const [newUser, setNewUser] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const addUser = (e) => {
        e.preventDefault()
        if (!newUser) {
            setNewUser(true)
        } else {
            setNewUser(false)
        }
    }

    const register = async (e) => {
        e.preventDefault()
        try {
            const user = await axios.post('/auth/register', { email, password, username })
            props.setUser(user.data);
            props.history.push('/main')
            NotificationManager.success('Successfully created account')
        }
        catch (err) {
            if (err.response.status === 400) {
                NotificationManager.error('User already exists. Please login')
            } else if (err.response.status === 500) {
                NotificationManager.error('Invalid email')
            } else if (err.response.status === 502) {
                NotificationManager.error('Please enter a username')
            }
        }
    }

    const login = async (e) => {
        e.preventDefault()
        setNewUser(false)
        try {
            const user = await axios.post('/auth/login', { email, password })
            props.setUser(user.data)
            props.history.push('/main')
        }
        catch {
            NotificationManager.error('Failed login attempt')
        }
    }

    if (props.user.isLoggedIn === true) {
        props.history.push('/main')
    }

    return (
        <div className='landing-outer'>
            <h1 className='welcome'>Welcome to The Food Journal</h1>
            <div className='landing'>
                <form className='login'>
                    <div className='input-outer'>
                        {!newUser && <h2 className='button-box'>Login here!</h2>}
                        {newUser && <h2 className='button-box'>Register here!</h2>}
                        <div>
                            <input className={!newUser ? 'hide' : 'login-input'}
                                placeholder='Username'
                                onChange={e => setUsername(e.target.value)}
                                value={username} />
                            <input className='login-input'
                                placeholder='Email'
                                onChange={e => setEmail(e.target.value)}
                                value={email} />
                            <input className='login-input'
                                placeholder='Password'
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                type='password' />
                        </div>
                        <section className='button-box'>
                            <button className={newUser ? 'hide' : 'login-button'}
                                onClick={login} > Log In </button>
                            {newUser && <button className='login-button'
                                onClick={register} > Register </button>}
                        </section>
                    </div>
                </form>
                <div className='newuser'>
                    {newUser &&
                        <div className='btn-container'>
                            <h2>Already have an account? Click "To Login" to login.</h2>
                            <button onClick={addUser}> To Login </button>
                        </div>}
                    {!newUser &&
                        <div className='btn-container'>
                            <h2>Don't have an account? Click "New User" to register for a new account.</h2>
                            <button onClick={addUser}> New User </button>
                        </div>}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { setUser })(Landing)
