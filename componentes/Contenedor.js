import Navbar from '../componentes/Navbar';

const Contenedor = (props) => {

    return (
        <div>

            <Navbar />

            <div>
                {props.children}
            </div>

        </div>
    )

}

export default Contenedor;