import dark from '../../assets/sun.png';
import light from '../../assets/moon.png';
import { useEffect, useState } from "react";

function Settings() {

    // const current_theme = localStorage.getItem('current_theme');
    // const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

    // useEffect(() => {
    //     localStorage.setItem('current_theme', theme);
    // }, [theme])

    // const toggle_mode = () => {
    //     theme == 'light' ? setTheme('dark') : setTheme('light');
    // }

    return(
        <> 
            <h2>Settings Page</h2>
                {/* <img onClick={() => {toggle_mode()}} src={theme == 'light' ? light : dark} alt="" className="toggle-icon"/> */}
        </>
    );
}

export default Settings