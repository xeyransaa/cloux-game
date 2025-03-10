import {createStore,combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const reducer=combineReducers({
    
    registerUser:userRegisterReducer,
   
})

const userInfoFromLS=localStorage.getItem("userInfo") ?
 JSON.parse(localStorage.getItem("userInfo"))
 :null


const initialState={
    
}
const middleware = [thunk];


const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;