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
                <input className='login-input'
                    placeholder='Username'/>
                <input className='login-input'
                    placeholder='Email'/>
                <input className='login-input'
                    placeholder='Password'/>
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
