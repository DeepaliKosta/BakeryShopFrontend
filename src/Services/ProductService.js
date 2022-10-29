import axios from "axios";


const PRODUCT_REST_API_URL = 'http://localhost:9190/api/v1/product';
const baseURL = 'http://localhost:9190/api/v1';

class ProductService{

    getProducts(){
        return axios.get(PRODUCT_REST_API_URL+"/allProducts")
    }

    addProduct(product){
        return axios.post(PRODUCT_REST_API_URL+"/addNew",product)
    }

    removeProduct(productId){
        return axios.delete(PRODUCT_REST_API_URL+"/"+productId)
    }

    updateProduct(product){
        return axios.put(PRODUCT_REST_API_URL,product)
    }

}

export default new ProductService();