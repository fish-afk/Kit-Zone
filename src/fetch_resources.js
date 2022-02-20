import axios from "axios"
const URL = "https://data.mongodb-api.com/app/kitzone-functions-wqhlr/endpoint"
class Resource_data_service { getall_data(query = true ,by = "state"){
    return axios.get(`${URL}/resources?${by}=${query}`)
  }}export default new Resource_data_service();