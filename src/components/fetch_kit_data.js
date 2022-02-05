import axios from "axios"

const URL = "https://data.mongodb-api.com/app/kitzone-functions-wqhlr/endpoint"
class KitDataService {

  getAll(page = 0) {
    return axios.get(`${URL}/Filterkits?page=${page}`);
  }

  get(id) {
    return axios.get(`${URL}/getSpecificKit_?id=${id}`);
  }

  find(query, by = "teamname", page = 0) {
    return axios.get(`${URL}/Filterkits?${by}=${query}&page=${page}`);
  } 

  getPromokits() {
    return axios.get(`${URL}/Promo_kits`)
  }

  getAllnormal() {
    return axios.get(`${URL}/getkitData`)
  }
 // createReview(data) {
 //   return axios.post("/review-new", data);
 // }

 // updateReview(data) {
 //   return axios.put("/review-edit", data);
 // }

 // deleteReview(id, userId) {
 //   return axios.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
 // }

 // getCuisines(id) {
 //   return axios.get(`/cuisines`);
 // }

}

export default new KitDataService();