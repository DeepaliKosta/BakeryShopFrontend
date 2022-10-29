import { useReducer } from "react";
import { useParams } from "react-router-dom";
import CartService from "../../Services/CartService";
import "./CartItem.css";


function CartItem(props) {

    let params = useParams();


    const { id } = params;
    const { productId, name, price } = props



    const handleRemoveItem = () => {
        console.log(id, productId);
        CartService.removeFromCart(id, productId).then(res => window.location.reload())
            .catch(e => console.log(e))
    }


    const reducer = (state, dispatch) => {
        switch (dispatch.type) {

            case "INCREMENT":
               
                return {
                    count: state.count + 1,
                    quantity: state.count + 1

                }
            case "DECREMENT":

                if (state.count <= 1) {
                    return {
                        count: 1,
                        quantity: 1
                    };
                }

                return {

                    count: state.count - 1,
                    quantity: state.count - 1
                }

        }
    }


    const [state, dispatch] = useReducer(reducer, { count: 1, quantity: 1 })



    return (
        <div>
            <div className="cartItem-wrapper">
                <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" style={{ width: "150px", height: "150px" }}></img>
                <div className="data">
                    <h4 className="item-name">{name}</h4>
                    <div>
                        <input type="text" id="input" className="number-input" min={1} value={state.count} onKeyDown={(event) => {
                            event.preventDefault();
                        }} ></input>
                        <button className="input-button" onClick={() => { dispatch({ type: "INCREMENT" }) }}>+</button>
                        <button className="input-button" onClick={() => { dispatch({ type: "DECREMENT" }) }}>-</button>
                    </div>
                    {/* <input type="number" id="input" className="number-input" min={1} value={quantity} onKeyDown={(event) => {
                        event.preventDefault();
                    }} onChange={(e) => handleQuantityInput(e.target.value)}></input> */}
                </div>
                <p className="data-p">Rs.{price * state.quantity}</p>
                <button className="remove-button" onClick={handleRemoveItem}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem;