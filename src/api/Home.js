import axios from "axios"
import {API_URL} from "../config"

export const FetchAllData = async()=>{
    return await axios.get(API_URL)
}