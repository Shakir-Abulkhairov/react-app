import {UsersAPI} from '../api/api'
import {profileAPI} from '../api/api'
import {stopSubmit} from "redux-form";
const ADDUser = 'ADDUser'
const SET_USER_PROFILE ='SET_USER_PROFILE'
const SOCIAL_NETWORKS = 'SOCIAL_NETWORKS'
const SET_STATUS = 'SET_STATUS'
const SET_SUCCESS_PHOTOS = 'SET_SUCCESS_PHOTOS'
const SET_INFORMATION ='SET_INFORMATION'
let initialState ={
  posts: [
    { id: 1, message: 'ohh,cool', likecounts: '15' },
    { id: 2, message: 'like it', likecounts: '10' },
  ],
    profile: null,
    socialNetworks: [],
    status: "",
    info:{}
  
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDUser:{
            let newPost = {
                id: 5,
                message: action.newPostText,//или же userName//state.profilepage.newposttext разницы нету все равно приходит через параметры
                likecounts: 0,
              }
              return {
                ...state,
                posts : [...state.posts,newPost],
                newPostText : ''
              }
             
              //return stateCopy;
            }                                      /* старый вид==теперь рефакторим 
                                                      let stateCopy = {
                                                          ...state,

                                                      }
                                                      stateCopy.posts = [...state.posts]
                                                      stateCopy.posts.push(newPost);
                                                      stateCopy.newPostText = ''
                                                      return stateCopy;
                                                    }
                                                    */
            //return stateCopy;
        case SET_USER_PROFILE:{
          return  {...state,profile:action.profile}
        }
        case SET_STATUS:{
          return {...state,status:action.status}
        }
      case SOCIAL_NETWORKS:{
        return{
          ...state,
          socialNetworks:[action.contacts]
        }
      }
        case SET_SUCCESS_PHOTOS:{
            debugger
            return {
                ...state,
                profile: {...state.profile,photos:action.file}//копирую профайл ,потому что мы его не меняем,поэтому я  изменяю только  фото,в профайле фото лежит,поэтому копирую
            }
        }
        case SET_INFORMATION:{
            return {
                ...state,
                profile: {...state.profile,info:action.info}
            }
        }

                                                    /*let stateCopy = {...state}
                                                    stateCopy.newPostText = action.newText;
                                                    return stateCopy; */

   
 default:
  return state;
                                          
}
}



export let addUserCreate =(newPostText)=>{
    return{
      type:ADDUser,
      newPostText
    }
  }
 
  export let setUserProfile =(profile)=>{
    return{
      type:SET_USER_PROFILE,
      profile

    }
  }
  export let setSocialNetworks=(contacts)=>{
    return{
      type:SOCIAL_NETWORKS,
      contacts
    }
  }
  export let setStatus=(status)=>{
    return{
      type:SET_STATUS,
      status
    }
  }

  export let setSuccessPhotos =(file)=>{
    return{
        type:SET_SUCCESS_PHOTOS,
        file
    }
  }
export let setUserInformation =(info)=>{
    return{
        type:SET_INFORMATION,
        info
    }
}


export const profileThunk = (userId) => async(dispatch) =>{
 
    let response = await UsersAPI.profile(userId)

        dispatch(setUserProfile(response.data));
        dispatch(setSocialNetworks(response.data.contacts))

  }


    export const getStatus = (userId) => async (dispatch) => {

        let response = await profileAPI.getStatus(userId)

        dispatch(setStatus(response.data));
    }



export const updateStatus = (status) =>(dispatch) =>  {
 
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status));
        }
        // data.data.resultCode.
      })
  }
export const updatePhotoSuccess = (file) =>async (dispatch) =>  {

    let response = await profileAPI.updatePhotos(file)

    if (response.data.resultCode === 0) {
        dispatch(setSuccessPhotos(response.data.data.photos))//просто обнавляем данные,потому что в серваке уже отправлена моя фотка,осталось ее только обновить таким способом
    }

}


export const updateInformation = (profile) =>async (dispatch,getState) => {

    const userId = getState().auth.userId
    let response = await profileAPI.information(profile)

    if (response.data.resultCode === 0) {
        dispatch(profileThunk(userId));
    }else{
        debugger
        dispatch(stopSubmit('editProfile-form', {_error: response.data.messages[0] }));
        return Promise.reject( response.data.messages[0]);
    }
}

//dispatch(stopSubmit("editProfile-form", {_error: response.data.messages[0] }));

    //dispatch(stopSubmit("editProfile-form", {'contacts':{: response.data.messages[0] }}));
    //return Promise.reject( response.data.messages[0]);

    // data.d

export default profilePageReducer