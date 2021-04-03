import Contenedor from '../componentes/Contenedor';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import Usuarios from '../componentes/Usuarios';

const Index = (props) => {

    return (
        <div>

            <Contenedor>

                <Head>
                    <title>Inicio | Proyecto con Next JS</title>
                </Head>

                <h1>Página principal</h1>

                <Usuarios usuarios={props.usuarios} />

            </Contenedor>

        </div>
    );

}

Index.getInitialProps = async (ctx) => {

    const res = await fetch('https://reqres.in/api/users');
    const resJSON = await res.json();
    const data = resJSON.data;
    return {usuarios: data};

}

export default Index;