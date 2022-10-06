import cart from './assets/cart.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cart'>
            <img src={cart}/>
            0
        </div>
    )
}

export default CartWidget;