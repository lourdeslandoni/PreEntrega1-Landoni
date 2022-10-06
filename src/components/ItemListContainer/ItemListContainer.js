import './ItemListContainer.css'
import { useState, useEffect } from "react";
import { getProducts } from '../../asyncMock'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]) 
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProducts(categoryId).then(products => {
            setProducts(products)
        }).finally(() =>
        setLoading(false)
        )
    }, [categoryId])

    console.log(products)

    if(loading){
        return <h1>Cargando Productos...</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;