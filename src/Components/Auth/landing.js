import React, {useState} from 'react'
import { setUser } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import axios from 'axios'

const Landing = (props) => {
    const [newUser, setNewUser] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const addUser = (e) => {
        e.preventDefault()
        setNewUser(true)
    }

    const register = async (e) => {
        e.preventDefault();
        setNewUser(false)
        try {
            const user = await axios.post('/auth/register', { email, password, username })
            props.setUser(user.data);
            props.history.push('/main')
        }
        catch {
            alert('failed register attempt')
        }
    }

    const login = async (e) => {
        e.preventDefault()
        setNewUser(false)
        try {
            const user = await axios.post('/auth/login', { email, password })
            props.setUser(user.data)
            props.history.push('/Main')
        }
        catch {
            alert('failed login attempt')
        }
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
                    value={password} />
                <section className='button-box'>
                    <button className='login-button'
                    onClick={login} > Log In </button>
                    {
                        !newUser
                        ?
                        <button className='login-button'
                            onClick={addUser} > New User </button>
                        :
                        <button className='login-button'
                            onClick={register} > Register </button>
                    }
                </section>
            </form>
        </div>
    )
}  

const mapStateToProps = state => state

export default connect(mapStateToProps, { setUser })( Landing )
