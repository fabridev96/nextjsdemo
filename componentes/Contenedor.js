import Navbar from '../componentes/Navbar';
import Head from 'next/head';

const Contenedor = (props) => {

    return (
        <div>

            <Head>

                <title>Proyecto Next JS</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />

            </Head>

            <Navbar />

            <div>
                {props.children}
            </div>

        </div>
    )

}

export default Contenedor;