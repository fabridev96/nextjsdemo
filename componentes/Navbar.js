import Link from 'next/link';

const Navbar = () => {

    return (
        <ul>

            <li>
                <Link href="/">
                    <a>Inicio</a>
                </Link>
            </li>

            <li>
                <Link href="/acercade">
                    <a>Acerca de</a>
                </Link>
            </li>

            <li>
                <Link href="/servicios">
                    <a>Servicios</a>
                </Link>
            </li>

        </ul>
    )

}

export default Navbar;