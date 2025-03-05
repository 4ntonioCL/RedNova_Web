import './css/navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <header>
                <div className="logo-container">
                    <h1 className='name'>RedNova</h1>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/services">Servicios</a></li>
                        <li><a href="/planes">Planes</a></li>
                        <li><a href="/soporte">Soporte</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
// <img src="/ruta-del-logo.png" alt="Logo" className="logo" />