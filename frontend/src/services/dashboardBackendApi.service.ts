import baseUrl from "./baseUrl";
import axios from "axios";
import StorageService from "./storageService";

export default class DashboardBackendApiService {
  static async getData(){
    const url = baseUrl + "dashboard/";
    console.log(url);
    
    return axios.get(url, { headers: {
      token: StorageService.getValueFromKey("token")
    } });
  }
}
