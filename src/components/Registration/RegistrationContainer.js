import { connect } from "react-redux";
import React from 'react';
import Registration from './Registration';
import { changeTextInput, logout, registration } from '../../store/AuthReducer';

const RegistrationContainer = (props) => {
    const onSubmit = (data) => {
        return props.registration(data.login, data.password)
      };
    const validate = (data) => {
        const err = {};
        if (!data.login) err.login = 'Введите имя'
        if (!data.password) err.password = 'Введите пароль'
        if (data.password && data.password.length > 10) err.password = 'Макс пароль 10 знаков'
        props.changeTextInput(data)
        return err
      }
    return (
        <Registration {...props} onSubmit={onSubmit} validate={validate}/>
    )
}

const mapStateToProps = (state) => {
    return {
        local: state.header.local,
    }
}

export default connect(mapStateToProps, { 
    changeTextInput,
    registration,
    logout
 })(RegistrationContainer);