import './css/servicio.css'

const Servicio = ({ nombre, descripcion }) => {
    return (
        <div className="servicio">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
        </div>
    )
};

export default Servicio;