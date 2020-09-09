import { connect } from "react-redux";
import React from 'react';
import Auth from './Auth';
import { changeTextInput, login, logout } from '../../store/AuthReducer';

const AuthContainer = (props) => {
    const onSubmit = (data) => {
        return props.login(data.login, data.password, data.rememberme ? data.rememberme[0] : false)
      };
    const validate = (data) => {
        const err = {};
        if (!data.login) err.login = 'Введите имя'
        if (!data.password) err.password = 'Введите пароль'
        if (data.password && data.password.length > 10) err.password = 'Макс пароль 10 знаков'
        if (!data.repeatPassword) {
          err.repeatPassword = 'Повторите пароль'
        } else if (data.password !== data.repeatPassword) err.repeatPassword = 'Не совпадает пароль'
        props.changeTextInput(data)
        return err
      }
    return (
        <Auth {...props} onSubmit={onSubmit} validate={validate} />
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, { 
    changeTextInput,
    login,
    logout
 })(AuthContainer);