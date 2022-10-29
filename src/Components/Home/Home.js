import Header from "../Header/Header";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import { useParams } from "react-router-dom";


function Home(){
  let params = useParams();
    return(
        <>
        <Header params={params}></Header>
        <Carousel>
             <Carousel.Item interval={2500}>
        <img
          className="d-block w-100 caraousel-img"
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
        <img
          className="d-block w-100 caraousel-img"
          src="https://images.unsplash.com/photo-1636983754415-947b2dd76701?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
        <img
          className="d-block w-100 caraousel-img"
          src="https://images.unsplash.com/photo-1611340628555-2cdcc6d9f741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9yaXpvbnRhbCUyMGJha2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
        <img
          className="d-block w-100 caraousel-img"
          src="https://images.unsplash.com/photo-1656978796497-5e9211075c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=885&q=80"
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
        <img
          className="d-block w-100 caraousel-img"
          src="https://images.unsplash.com/photo-1664288377707-11d804369c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />
        </Carousel.Item>
        </Carousel>
        <div className="heading-div">
          {params.id}
            <h1 className="Home-h1">Welcome to Bakery Shop</h1>
        </div>
        </>
    );
}

export default Home;