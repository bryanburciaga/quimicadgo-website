import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <nav className="nav">

            <Link to="/">
                <div>Home</div>
                
            </Link>
            <Link to="/catalogo">
                <div>Catalogo</div>
            </Link>
            <Link to="/About">
                <div>About</div>
            </Link>
        </nav>
    )
}

export default Header;