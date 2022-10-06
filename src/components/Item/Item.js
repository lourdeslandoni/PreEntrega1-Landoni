import { Link } from "react-router-dom" 

const Item = ({ prod }) => {
    return (
        <div key={prod?.id}>
            <img src={prod?.img} alt="imagen de producto" />
            <h1>{prod?.name}</h1>
            <h2>${prod?.price}</h2>
            <h2>Stock Disponible: {prod?.stock}</h2>
            <Link to={`/detail/${prod?.id}`}>Ver Detalle</Link>
        </div>
    )
}

export default Item