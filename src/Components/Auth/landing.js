import React, {useState} from 'React'

const Landing = (props) => {
    const [newUser, setNewUser] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const addUser = (e) => {
        e.preventDefault()
        setNewUser(true)
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
                    <button className='login-button'> Log In </button>
                    {
                        !newUser
                        ?
                        <button className='login-button'
                            onClick={addUser} > New User </button>
                        :
                        <button className='login-button'> Register </button>
                    }
                </section>
            </form>
        </div>
    )
}

export default Landing
