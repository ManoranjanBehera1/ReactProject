import axios from "axios";

export function MyInterceptor1() {
  axios.interceptors.response.use( (res) =>{
    console.log(res);
    if(res?.data){
        return res.data;
    }else{
        return res;
    }
  });

}
