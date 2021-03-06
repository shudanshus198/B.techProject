import baseUrl from "./baseUrl";
import axios from "axios";
import StorageService from "./storageService";

class UserService {
  static async saveUserPicks(stockPicks: string[]) {
    const url = baseUrl + "user/update-picks";
    console.log("URL IS", url);
    return axios.put(url,{ stockPicks }, { headers: {
      token: StorageService.getValueFromKey("token")
    } });
  }
  static async getUserPicks() {
    const url = baseUrl + "user/picks";
    console.log("URL IS", url);
    return axios.get(url, { headers: {
      token: StorageService.getValueFromKey("token")
    } });
  }
}

export default UserService;
