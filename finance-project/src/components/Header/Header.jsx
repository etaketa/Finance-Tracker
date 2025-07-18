import dark from '../../assets/sun.png';
import light from '../../assets/moon.png';
import './Header.css'

function Header({theme, setTheme}) {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    return(
        <header>
            <div className={`navbar ${theme}`}>
                <h1>Fianance Tracker</h1>
                <img src="" alt="" className="logo"/>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="">Budget</a></li>
                    <li><a href="">Transactions</a></li>
                    <li><a href="">Reports</a></li>
                </ul>
                <img onClick={() => {toggle_mode()}} src={theme == 'light' ? light : dark} alt="" className="toggle-icon"/>
            </div>
        </header>
    );
}

export default Header