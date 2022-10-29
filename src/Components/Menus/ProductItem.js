import { useEffect, useState } from "react";
import {Card,Button} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import CartService from "../../Services/CartService";

function ProductItem(props){

  let params=useParams();
  const {id} = params;
  const {productId,name,price} = props;
  // console.log(number);
  
  const [cartProducts, setCartProducts] = useState([]);

  let handleAddToCart= ()=>{
    CartService.addToCart(id,productId)
    .then(res => window.location.reload())
    .catch(e=>console.log(e))
  }

  useEffect(()=>{
    CartService.showCart(id).then(res => {
      setCartProducts(res.data)
      // console.log(cartProducts);
  }
  )
      .catch(e => console.log(e))

}, [])



    
return(
<Card style={{ width: '18rem',boxShadow:" 5px 10px 8px #888888"}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1568051243857-068aa3ea934d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         Rs.{price}
        </Card.Text>

       {
       ((cartProducts.filter(p=>p.id===productId)).length != 0) ? 
       <Button variant="warning"><Link to={`/Cart/${id}`} style={{textDecoration:"none",color:"black"}}>Go to cart</Link></Button> :
       <Button variant="warning" onClick={handleAddToCart}>Add to Cart</Button>
       }

        
      </Card.Body>
    </Card>
)
}

export default ProductItem;