import { get, justGet } from "../utils/request"

const api = {
    getDataInfo(params){
        return get("http://api.tianapi.com/txapi/ncov/index",params);
    },
    getCaseNum(){
        return justGet("/")
    }
}

export default api;