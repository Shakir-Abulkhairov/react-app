import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-Key": 'd7c54c33-00e9-41b0-9eab-3a330ea414e1'
    }
})
export const UsersAPI ={
     getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response) =>{
        return response.data
    });
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    }, 
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    }, 
    header(){
        return authAPI.header()
    }, 
    profile(userId){
        return profileAPI.profile(userId)
    }
}

export const authAPI={
    header(){
        return instance.get(`auth/me`)
    }, 
    loginAPI(email,password,rememberMe=false,captcha=null){
        return instance.post(`auth/login`,{
            email,
            password,
            rememberMe,
            captcha,
        })
    },
    LogOut(){
        return instance.delete(`auth/login`)
    }
}
export const profileAPI = {
    profile(userId){
        return instance.get(`profile/`+ userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+ userId)
    }, 
    updateStatus(status){
        return instance.put(`profile/status`,{status: status,})
    },
    updatePhotos(photoFile){ //если хотите фото отправить,или файл,поэтому делать надо так
        const formData = new FormData();
        formData.append('image',photoFile)

        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    information(profile){
        return instance.put(`profile`,profile)
    },
};

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`)
    }

}

