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

 get_all_users_orders(uid){
   return axios.get(`${URL}/getuserorders?uid=${uid}`)
 }

 Cancel_order(oid, uid){
  return axios.delete(`${URL}/cancelorder?uid=${uid}&_id=${oid}`);
 }

}

export default new UserDataService();


