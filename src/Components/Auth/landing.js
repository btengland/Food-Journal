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
        <div className='landing'>
            <form className='login'>
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
                <section className='button-box'>
                    <button className={newUser ? 'hide' : 'login-button'}
                        onClick={login} > Log In </button>
                    {
                        !newUser
                            ?
                            <button className={newUser ? 'hide' : 'login-input'}
                                onClick={addUser} > New User </button>
                            :
                            <button className='login-button'
                                onClick={register} > Register </button>
                    }
                    {newUser && <button onClick={addUser}> Back to Login </button>}
                </section>
            </form>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { setUser })(Landing)
