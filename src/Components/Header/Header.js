import { Navbar, Nav, Container, Button, } from "react-bootstrap";
import "./Header.css";
import logo from '../Images/logo.png';
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CustomerService from "../../Services/CustomerService";
import { useEffect, useState } from "react";
import CartService from "../../Services/CartService";

function Header() {
  const navigate = useNavigate();
  const [count,setCount] = useState(0);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  let params = useParams();
  let {id} = params;
  

  const logout =()=>{
    // console.log({id})
    CustomerService.customerLogout(id).then((response)=>console.log(response.data) )
    .catch(e=>console.log(e))
  }

  useEffect(()=>{
    CartService.countItemsInCart(id).then(res=>
      {
      setCount(res.data)
      console.log(res.data);
  })
  
    .catch(e=>console.log(e))
  },[])

//   useEffect(()=>{
//     const checkLogged=async()=>{
//     await CustomerService.isCustomerLoggedIn(id).then(res=>
//       {
//       setIsLoggedIn(res.data);
//     })
//     .catch(e=>console.log(e))
// }
// checkLogged()
// },[])

  return (
    <Navbar collapseOnSelect expand="lg" className="header sticky-top">
      <Container>
        <Navbar.Brand href="">
          <img src={logo} className="header-logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="item-collapse">
          <Nav className="me-auto">
            {/* <Link to="/viewCustomers/">
              <button className='btn btn-primary'>
                View customers
              </button>
            </Link> */}
            
              <Link to={`/Home/${id}`} className="nav-font">Home</Link>
           
            <Link to={`/Home/${id}`} className="nav-font">About us</Link>
          </Nav>
          <Nav>
            
              <Link to={`/Menus/${id}`} className="nav-font">Menus</Link>
           
            {/* <Nav.Link href="/Menus" className="nav-font">Menus</Nav.Link> */}

            {/* {
              isLoggedIn ? (
                <Button>You</Button>
              ):(<Button variant="success"><Link to="/Login" className="logout-button" >Loggg In</Link></Button>)
            } */}
            
              {isLoggedIn}
           
           
              <Button variant="danger"><Link to="/Home" className="logout-button" onClick={logout}>Log Out</Link></Button>
            

            
              <Link to={`/Cart/${id}`} className="nav-font">Your Cart{count}</Link>
            

            {/* <Link to="http://localhost:3000/Home">
          <Button variant="dark">Log Out</Button>
          </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;