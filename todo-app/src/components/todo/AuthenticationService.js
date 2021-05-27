class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem("authenticatedUser", username);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser")
    if (user === null) return false;

    return true;
  }

  getLoggedInUsername() {
    if (this.isUserLoggedIn()) {
      return sessionStorage.getItem("authenticatedUser");
    }

    return '';
  }
}

export default new AuthenticationService();
