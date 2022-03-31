import {authAPI, securityAPI, UsersAPI} from '../api/api'
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'
let initialState = {
 userId: null,
 email: null,
 login: null,
 isAuth:false,
 captchaUrl:null
}

 let authReducer = (state = initialState, action) => {
   switch (action.type) {
       case SET_CAPTCHA_URL:
        case SET_USER_DATA:
            return {
              ...state,
             ...action.data,//!деструктуризация когда несколько обьектов можно сложить в одну,что то вроде этого
            }



       default:
          return  state;
    }

}

export let setAuthUserData =(userId,email,login,isAuth)=>{
    return {
      type: SET_USER_DATA,
      data:{userId,email,login,isAuth}
    }
  }
export let setCaptchaUrl =(captchaUrl)=>{
    return{
        type: SET_CAPTCHA_URL,
        data:{captchaUrl}
    }
}


export const getAuthUserData = () => async (dispatch) => {

    let response = await UsersAPI.header()

    if (response.data.resultCode === 0) {
        debugger
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }


}

export const  LoginThunk =(login,password,rememberMe,captcha)=> async(dispatch)=> {

       let response = await authAPI.loginAPI(login, password, rememberMe, captcha)

                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    if (response.data.resultCode === 10){
                       dispatch(getCaptchaUrl())
                    }
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Error!wrong login or password';
                    dispatch(stopSubmit('login', {_error: message}))
                }

    }

export const  getCaptchaUrl =()=>async (dispatch)=>{
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
        dispatch(setCaptchaUrl(captchaUrl))

}

export const  LogOut =()=>async (dispatch)=>{
    let response = await authAPI.LogOut()
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData( null, null,null,false))
                }
    }

  
  export default authReducer