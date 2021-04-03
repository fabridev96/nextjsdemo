import {useRouter} from 'next/router';
import fetch from 'isomorphic-fetch';
import Contenedor from '../../componentes/Contenedor';

const Usuario = (props) => {

    const usuario = props.usuario;

    const router = useRouter();
    const {id} = router.query;

    return (
        <Contenedor>

            <div className="row">

                <div className="col-md-6 offset-md-3">

                    <div className="card">

                        <div className="card-header text-center">

                            <img 
                                src={usuario.avatar} 
                                alt="" 
                                style={{borderRadius: '50%'}}
                            />

                        </div>

                        <div className="card-body">

                            <h3>{usuario.id}. {usuario.first_name} {usuario.last_name}</h3>

                            <p>Email: {usuario.email}</p>

                        </div>

                    </div>

                </div>

            </div>

        </Contenedor>
    );

}

Usuario.getInitialProps = async (ctx) => {

    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const resJSON = await res.json();
    return {usuario: resJSON.data}

}

export default Usuario;