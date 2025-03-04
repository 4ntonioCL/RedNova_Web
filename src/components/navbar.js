import './css/navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <header>
                <div className="logo-container">
                    <img src="/ruta-del-logo.png" alt="Logo" className="logo" />
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Planes</a></li>
                        <li><a href="#">Soporte</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;

