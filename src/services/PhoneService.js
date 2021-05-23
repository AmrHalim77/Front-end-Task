import axios from 'axios';

const PHONE_API_BASE_URL = "http://localhost:8080/api/getAll"

class PhoneService  {

    getPhoneContact(filters){
        let queryParamsStr = "?";
        for (const key in filters) {
            if(filters[key]){
                queryParamsStr += `${key}=${filters[key]}&`
            }
        }
        queryParamsStr = queryParamsStr.substring(0, queryParamsStr.length - 1);
        return axios.get(PHONE_API_BASE_URL+queryParamsStr);
    }
}   

export default new PhoneService()