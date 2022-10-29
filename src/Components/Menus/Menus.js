import { useEffect, useState } from "react";
import ProductService from "../../Services/ProductService";
import ProductItem from "./ProductItem";
import "./Menu.css";
import Header from "../Header/Header"
import { Link, useParams } from "react-router-dom";




function Menus(){
   const [products,setProducts] = useState([])  
   
   

   useEffect(()=>{
    ProductService.getProducts().then((response)=>{
      //   console.log(response);
        setProducts(response.data);
      //   console.log(products);
    }).catch(error=>console.log(error))
   },[])



   return(

   <>
   <Header></Header>
   <div className="card-wrapper">
    
      <div className="item-wrapper">
        {/* <h1>{params.id}</h1> */}
      {products.map((p,index)=>{
        return(
        <ProductItem
        productId={p.id}
        name={p.name}
        price={p.price}
        >
        </ProductItem>
        )
      })}
      </div>
      </div>
      </> 
   )
}

export default Menus;