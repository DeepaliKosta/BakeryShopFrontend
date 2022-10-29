import axios from "axios";

const Cart_REST_API_URL = 'http://localhost:9190/api/v1/cart';
const baseURL = 'http://localhost:9190/api/v1';

class CartService{

    addToCart(userId,productId){
        return  axios.put(Cart_REST_API_URL + "/" +userId +"/"+"addToCart/"+ productId )
    }

    removeFromCart(userId,productId){
        return axios.delete(Cart_REST_API_URL + "/" +userId+"/"+ "removeFromCart/" +productId)
    }

    countItemsInCart(userId){
        return axios.get(Cart_REST_API_URL +"/"+userId)
    }

    totalInCart(userId){
        return axios.get(Cart_REST_API_URL+"/totalPrice/"+ userId)
    }

    showCart(userId){
       return axios.get(Cart_REST_API_URL+"/yourCart/"+userId);
    }

    

}

export default new CartService();