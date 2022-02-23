import axios from "axios"

const URL = "https://data.mongodb-api.com/app/kitzone-functions-wqhlr/endpoint"
class UserDataService {

 createUser(data) {
   return axios.post(`${URL}/newuser`, data);
 }

 post_Order(orderdata){
   return axios.post(`${URL}/appendorder`, orderdata);
 }

 delete_Account(uid){
    return axios.delete(`${URL}/AcoountdeletionHandler?uid=${uid}`);
 }

}

export default new UserDataService();


