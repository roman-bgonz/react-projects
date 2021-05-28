import axios from "axios";
import { API_URL, USER_NAME_SESSION_ATTRIBUTE } from "../../Constants";
class AuthenticationService {
  executeBasicAuthService(username, password) {
    return axios.get(`${API_URL}/basicauth`, {
      headers: { authorization: this.createBasicAuthToken(username, password) },
    });
  }

  executJwtAuthService(username, password) {
    return axios.post(`${API_URL}/authenticate`, {
      username,
      password,
    });
  }

  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  createJwtToken(token) {
    return "Bearer " + token;
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE, username);
    this.setupAxiosInterceptor(this.createBasicAuthToken(username, password));
  }

  registerSuccessfulLoginJWT(username, password) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE, username);
    this.setupAxiosInterceptor(this.createJwtToken(password));
  }

  logout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE);
    if (user === null) return false;

    return true;
  }

  getLoggedInUsername() {
    if (this.isUserLoggedIn()) {
      return sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE);
    }

    return "";
  }

  setupAxiosInterceptor(basicAuth) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = basicAuth;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
