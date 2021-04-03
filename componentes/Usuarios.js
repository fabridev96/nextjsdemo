import Router from 'next/router/';

const Usuarios = (props) => {

    return (
        <ul className="list-group">

            {
                props.usuarios.map(usuario => (

                    <li 
                        className="p-3 list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                        key={usuario.id} 
                        onClick={e => {Router.push('/usuarios/[id]', `/usuarios/${usuario.id}`)}}
                    >

                        <div>
                            <h5>{usuario.first_name} {usuario.last_name}</h5>
                            <p>Email: {usuario.email}</p>
                        </div>

                        <img 
                            src={usuario.avatar} 
                            alt="" 
                            style={{borderRadius: '50%'}} 
                        />

                    </li>

                ))
            }

        </ul>
    );

}

export default Usuarios;