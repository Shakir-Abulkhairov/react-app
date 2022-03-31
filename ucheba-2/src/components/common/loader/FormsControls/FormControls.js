import React from 'react';
import styles from './FormsControl.module.css';
import {Field} from "redux-form";
import s from "../../../Login/login.module.css";
import {required} from "../../../utils/validators/validators";



export const FormControl =({input,meta,child,...props})=>{

    const hasError = meta.touched && meta.error
    return (
        <div className={ styles.formControl + "  " + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span className= {styles.someError} > {meta.error}</span>}
        </div>
    )
}


export const Textarea =(props)=>{
    const {input,child,meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
}
export const Input =(props)=>{
    const {input,child,meta, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>

}
export const createField =(placeholder,name,validators,component,className,props={},text='')=> {
    return <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component}
               className={className}
            {...props}/>{text}
    </div>
}