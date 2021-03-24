import '../../reset.css'
import './Header.css'
import { Link } from 'react-router-dom'
import { logOut } from '../../ducks/userReducer'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

const Header = (props) => {

    const logout = async () => {
        try {
            const user = await axios.post('/auth/logout')
            props.logOut(user.data)
            props.history.push('/')
        }
        catch {
            console.log(err => err)
        }
    }

    return (
        <div className='header-outer'>
            <div className='header-inner'>
                <div>
                    <Link to='/graphs'>
                        <h2 className='link'>Graph</h2>
                    </Link>
                </div>
                <div>
                    <Link to='/main'>
                        <h2 className='link'>Journal</h2>
                    </Link>
                </div>
                <div>
                    <button onClick={logout} className='logoutbtn'>Logout</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { logOut })(Header)