import { BASE_URL } from "@/api/BaseConfig"
import axios from "axios"
import { USER_REGISTER_ERROR, USER_REGISTER_SUCCESS } from "../Constants/UserConstants"


export const registerAction=(userName,email,password,confirmPassword)=>async(dispatch)=>{
    try {
        const {data}=await axios.post(`${BASE_URL}account/register`,
        {userName,email,password,confirmPassword})
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload:data
        })        
    } catch (error) {
        dispatch({
            type: USER_REGISTER_ERROR,
            payload:error
        })  
    }
}