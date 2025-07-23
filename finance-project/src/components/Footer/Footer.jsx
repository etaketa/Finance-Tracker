import './Footer.css'

function Footer(){
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Finance Tracker</p>
        </footer>
    );
}

export default Footer