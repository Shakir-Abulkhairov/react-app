const ADDialogs = 'ADDialogs'


let initialState = {
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
  
}

export let dialogsPageReducer = (state = initialState, action) => {
   switch (action.type) {
        case ADDialogs:{
            let newDialogs = {
                id: 5,
                message: action.newDialogText,
            }
            return {
              ...state,
              userMessageData : [...state.userMessageData,newDialogs],
            }
          }

        default:
          return  state;
    }

}

export let addNewDialogCreate =(newDialogText)=>{
    return {
      type: ADDialogs,
      newDialogText
    }
  }
  
 