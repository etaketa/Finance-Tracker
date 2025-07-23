import dark from '../../assets/sun.png';
import light from '../../assets/moon.png';
import './Header.css'
import { Link } from 'react-router-dom';

function Header({theme, setTheme}) {

    return(
        <header>
            <div className={`navbar ${theme}`}>
                <h1>Fianance Tracker</h1>
                <img src="" alt="" className="logo"/>
                <ul>
                    <div className='out-link'><Link to="/home" className='link'>Home</Link></div>
                    <div className='out-link'><Link to="/budget" className='link'>Budget</Link></div>
                    <div className='out-link'><Link to="/transactions" className='link'>Transactions</Link></div>
                    <div className='out-link'><Link to="/reports" className='link'>Reports</Link></div>
                    <div className='out-link'><Link to="/settings" className='link'>Settings</Link></div>
                </ul>
            </div>
        </header>
    );
}

export default Header