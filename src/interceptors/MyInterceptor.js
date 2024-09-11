import axios from "axios";

export function MyInterceptor() {
    axios.interceptors.request.use((req) => {
      console.log(req);
    req.headers["authorization"] = "my secret token";
    return req;
  });
  }