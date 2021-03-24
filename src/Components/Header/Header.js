import '../../reset.css'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
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
                    <button className='logoutbtn'>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Header