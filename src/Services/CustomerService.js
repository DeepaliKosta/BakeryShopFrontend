import axios from "axios";

const Customer_REST_API_URL = 'http://localhost:9190/api/v1/customer';
const baseURL = 'http://localhost:9190/api/v1';

class CustomerService{

    customerRegister(customer){
       return axios.post(Customer_REST_API_URL+"/register",customer);
    }

    getAllCustomer(){
        return  axios.get(Customer_REST_API_URL);
    }

    customerLogin(loginDetails){
        return  axios.post(Customer_REST_API_URL+"/login",loginDetails)
    }

    customerLogout(userId){
        return axios.post(Customer_REST_API_URL+"/logout/"+userId)
    }

    deleteCustomer(userId){
        return axios.delete(Customer_REST_API_URL+"/"+userId)
    }

    isCustomerLoggedIn(userId){
        return axios.get(Customer_REST_API_URL+"/isLoggedIn/"+userId)
    }

}

export default new CustomerService();