import axios from "axios";

const BASE_URL = process.env.NORIETO_BACKEND_URL || "http://localhost:3001";

class NorietoApi {
  static token;
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call: ", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error: ", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async mapUpdate(data) {
    let res = await this.request("map/", (method = "post"));
    return res.message;
  }

  static async mapDelete() {
    let res = await this.request("map/", (method = "delete"));
    return res.message;
  }

  static async authRegister(username, password) {
    let res = await this.request(
      "auth/register",
      { username, password },
      "post"
    );
    return res.token;
  }

  static async authLogin(username, password) {
    let res = await this.request("auth/login", { username, password }, "post");
    return res.token;
  }

  static authLogout() {
    sessionStorage.clear();
    localStorage.clear();
  }
}
