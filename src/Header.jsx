import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return(
        <header>
            <h1>
                <Link to="/">Header</Link>
            </h1>

            <div className='menu'>                
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
            </div>
        </header>
    )
}

export default Header;