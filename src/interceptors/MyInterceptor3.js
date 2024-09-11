
import client from "../components/http/api";

export function MyInterceptor3() {
  client.interceptors.request.use( (req) =>{
    console.log(req, 'axios client');
    return req;
  });

}
