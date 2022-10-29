import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartService from "../../Services/CartService";
import Header from "../Header/Header";
import CartItem from "./CartItem";
import "./Cart.css";
import { Button } from "react-bootstrap";


function Cart() {
    let params = useParams();
    const { id } = params;
    // console.log(id);

    const [cartProducts, setCartProducts] = useState([]);

    const [total,setTotal] = useState(0);

    useEffect(() => {
        CartService.showCart(id).then(res => {
            setCartProducts(res.data)
            // console.log(cartProducts);
        }
        )
            .catch(e => console.log(e))

    }, [])

    useEffect(()=>{
        CartService.totalInCart(id).then(res=>setTotal(res.data))
        .catch(e=>console.log(e))
    },[])

    

    return (
        <div>
            <Header></Header>
            <h1>Your Cart</h1>
            <br></br>
            <div className="cart-block">
            <div className="main-div">
                {
                    cartProducts.map(p => {
                        return (
                            <Fragment>
                                <CartItem
                                
                                productId={p.id}
                                    name={p.name}
                                    price={p.price}
                                >
                                </CartItem>
                                <br></br>
                                </Fragment>
                        )
                    })
                }

            </div>
            <div className="total-div">
             <h2>Order Details</h2>
             <div className="total-data">
                 Total :   Rs.{total}
                <p>Delievery : FREE</p>
                <hr></hr>
                <br></br>
                Grand Total : Rs.{total}
             </div>
             <Button>Check Out</Button>
             
            </div>
            
        </div>
        </div>
    )
}

export default Cart;