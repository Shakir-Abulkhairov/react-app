export const required=(value)=>{
    if(value) return undefined; //можно null или наверное еще что нибудь,главное что бы была пустота
    else return 'Field required'
}

export const maxLengthCreator=(maxLength)=>(value)=>{
    if(value.length > maxLength) return `Max Length is ${maxLength} symbols`;
    return undefined;

}
export const contactsEdit =()=>{

}