import Link from 'next/link';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-info bg-warning">
            <Link href="/"><a className="navbar-brand">Proyecto Next.js</a></Link>

            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <Link href="/acercade"><a className="nav-link">Acerca de</a></Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/servicios"><a className="nav-link">Servicios</a></Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a 
                            className="nav-link dropdown-toggle" 
                            href="#" 
                            id="navbarDropdown" 
                            role="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                        >
                            Desplegar
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    
                </ul>

                <form className="form-inline my-2 my-lg-0">
                    <input 
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Buscar algo..." 
                        aria-label="Search" 
                    />
                    <button 
                        className="btn btn-outline-dark my-2 my-sm-0" 
                        type="submit"
                    >
                        Buscar
                    </button>
                </form>
            </div>
        </nav>

    )

}

export default Navbar;