import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../redux/cartSlice"

const Cart = () => {
    const {items} = useSelector(store => store.cart)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="p-2 m-2 bg-black rounded-lg text-white" onClick={handleClearCart}>Clear</button>
            <div className="w-6/12 m-auto">
                <ItemList items={items} />
            </div>
            {
                items?.length === 0 && (
                    <h2>Cart is empty, Add item to the cart!</h2>
                )
            }
        </div>
    )
}

export default Cart