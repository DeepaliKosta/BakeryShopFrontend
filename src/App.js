import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route,Router} from 'react-router-dom';
import Home from './Components/Home/Home';
import Menus from './Components/Menus/Menus';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import CartItem from './Components/Cart/CartItem';


function App() {
  return (
    <div className="App">
      
      
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Home/:id" element={<Home></Home>}></Route>
        <Route path="/Menus" element={<Menus></Menus>}></Route>
        <Route path="/Menus/:id" element={<Menus></Menus>}></Route>
        
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Cart/:id" element={<Cart></Cart>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
        <Route path="/CartItem" element={<CartItem></CartItem>}></Route>
      </Routes>
      
      

    </div>
  );
}

export default App;
