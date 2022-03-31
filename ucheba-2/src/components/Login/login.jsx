import React from 'react';
import {reduxForm} from 'redux-form'
import s from './login.module.css';


import {createField, Input} from "../common/loader/FormsControls/FormControls";
import {required} from "../utils/validators/validators";
import {connect} from 'react-redux';
import {LoginThunk} from "../../redux/auth-reducer";
import {Redirect} from 'react-router-dom';
import style from './../common/loader/FormsControls/FormsControl.module.css'

const LoginForm = ({handleSubmit,error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {/*<div>
            <Field placeholder={"Login"} name={"login"}  className={s.box} validate={[required ]}component={Input}/>
        </div>*/}
            {createField("Login","email",[required],Input,s.box)}
            {createField("Password","password",[required],Input,s.pass,{type:'password'})}
            {createField(null,"rememberMe",[],Input,null,{type:'checkbox'},'rememberMe')}
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField("Symbols from image","captcha",[required],Input,null,{})}
            {/* <div>
            <Field placeholder={"Password"} name={"password"} validate={[required]}component={Input} type = 'password'className={s.pass}  />
        </div>
        <div>
            <Field type={"checkbox"}  name={"rememberMe"} component={'input'}/> remember me
        </div>*/}
            {error &&  <div className={style.fromSummaryError}>
                    {error}
                </div>
            }
        <div>
            <button className={s.btn}>Login</button>
        </div>
    </form>
    )
}
const LoginReduxForm  = reduxForm({form: 'login'})(LoginForm)

export function Login(props) {
    const onSubmit = (formData) => {
       //console.log(formData)
         props.LoginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha,)
        //authAPI.loginAPI(formData)
    }
    if (props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }
    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>

        </div>
    )
}

const mapStateToProps =(state)=>({
    captchaUrl:state.auth.captchaUrl,
    isAuth:state.auth.isAuth,
});
export default connect(mapStateToProps,{LoginThunk})(Login)