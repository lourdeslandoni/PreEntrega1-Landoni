import { useState, useEffect } from "react";
import { getProduct, getProducts } from "../../asyncMock"
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import Counter from "../Counter/Counter";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    
    useEffect(() => {
        getProduct(productId).then(product => {
        setProduct(product)
    }).finally(() => {
        setLoading(false)
    })
}, [])

console.log(product)

if(loading) {
    return <h1>Cargando Productos...</h1>
}

    return (
        <div>
            <h1>Detalle de Producto</h1>
            <div>
                <Item key={product.id} prod={product}/>
                <Counter />
            </div>
        </div>
    )
}

export default ItemDetailContainer;