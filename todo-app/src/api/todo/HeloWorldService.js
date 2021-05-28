import axios from "axios";

class HelloWorldService {
  executeHelloWorldService() {
    return axios.get("http://localhost:8080/hello-world");
  }

  executeHelloWorldBeanService() {
    return axios.get("http://localhost:8080/hello-world-bean");
  }

  executeHelloWorldPathService(name) {
    // let username = "roman";
    // let psd = "dummy";
    // let basicAuth = "Basic " + window.btoa(username + ":" + psd);
    return axios.get(
      `http://localhost:8080/hello-world/path-variable/${name}`
      //   {
      //     headers: {
      //       Authorization: basicAuth,
      //     },
      //   }
    );
  }
}

export default new HelloWorldService();
