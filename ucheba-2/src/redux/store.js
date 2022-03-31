

import { dialogsPageReducer } from "./dialogsPage-reducer"
import { profilePageReducer } from "./profilePage-reducer"
import {sidebarReducer} from "./sidebar-reducer";

const ADDUser = 'ADDUser'
const UpdateNewPostText ='UpdateNewPostText'
const ADDialogs = 'ADDialogs'
const UpdateNewDialog ='UpdateNewDialog'
let store = {
  _state :{
    dialogsPage: {
      dialog: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Nikolay' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Timur' },
        { id: 6, name: 'Uzbek' },
      ],
      userMessageData: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Want play to Apex?' },
        { id: 3, message: 'Hahaha,Lol,I hope this joke!' },
        { id: 1, message: 'Hi!' },
        { id: 1, message: 'Hi!' },
        { id: 1, message: 'Hi!' },
      ],
      newDialogText: 'hi'
    },
    profilePage: {
      posts: [
        { id: 1, message: 'ohh,cool', likecounts: '15' },
        { id: 2, message: 'like it', likecounts: '10' },
      ],
      newPostText: 'it kamasutra ',
    },
    sideBar: {
      Friends: [
        { id: 1, img: 'https://miro.medium.com/max/1000/0*6e2K0U6ZkN9Ju9iL.jpg', name: 'Andrew' },
        { id: 2, img: 'https://klike.net/uploads/posts/2019-03/1551511862_28.jpg', name: 'Sasha' },
        { id: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQIOx_SCaYRInZ3jwT5QuwBVLGeBBk9T_IA&usqp=CAU', name: 'Sveta' },
      ],
    }
  },
  getState(){
    return this._state
  },
  _callSubscriber (){
    console.log('changed');
  },
 
 
  
   subscribe  (observer)  {
    this._callSubscriber = observer;
    
  },
  //======mypost=====
  _addUser  ()  {
    
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,//или же userName//state.profilepage.newposttext разницы нету все равно приходит через параметры
      likecounts: 0,
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = ''
    this._callSubscriber();
  },
 
  _updateNewPostText  (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },
  //=============dialog=========
  _addDialogs(dialog){
    let newDialogs ={ 
      id:5,
      message:this._state.dialogsPage.newDialogText,
  };
    this._state.dialogsPage.userMessageData.push(newDialogs);
    this._state.dialogsPage.newDialogText ='';
    this._callSubscriber();
  },
     
_updateNewDialog(newDialog){
  this._state.dialogsPage.newDialogText = newDialog;
  this._callSubscriber();
},
dispatch(action){
  this._state.profilePage = profilePageReducer( this._state.profilePage,action);
  this._state.dialogsPage = dialogsPageReducer( this._state.dialogsPage,action);
  this._state.sideBar = sidebarReducer(this._state.sideBar,action);
  this._callSubscriber(this._state);
}

}
//=============

//====DIALOG======

//=====================



export default store;
