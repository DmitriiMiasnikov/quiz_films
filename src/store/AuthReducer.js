import { authApi } from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA',
    LEFT_LOGIN = 'LEFT-LOGIN',
    VALIDATE_REGISTRATION = 'VALIDATE_REGISTRATION',
    GET_MESSAGE = 'GET_MESSAGE'

let initialState = {
    email: null,
    isFetching: true,
    isAuth: false,
    registrationData: null,
    registrationNewText: null,
    message: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SET_USER_DATA): {
            return { ...state, ...action.data }
        }
        case (VALIDATE_REGISTRATION): {
            return { ...state, registrationNewText: action.data }
        }
        case (GET_MESSAGE): {
            return { ...state, message: action.message }
        }
        default: break;
    }
    return state;
}
export const setAuthUserData = (email, isAuth) => {
    return { type: SET_USER_DATA, data: {email, isAuth } }
}
export const getMessage = (message) => {
    return { type: GET_MESSAGE, message }
}
export const leftLogin = () => {
    return { type: LEFT_LOGIN }
}
export const getAuthUserData = () => {
    return async (dispatch) => {
        const response = await authApi.me();
        if (response.resultCode === 0) {
            let { email } = response.data;
            dispatch(setAuthUserData(email, login, true))
        }
    }
}
export const changeTextInput = (data) => {
    return { type: VALIDATE_REGISTRATION, data: data }
}
export const login = (email, password) => {
    return async (dispatch) => {
        const response = await authApi.login(email, password);
        let message = response.message;
        dispatch(getMessage(message))
        if (response.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    }
}
export const registration = (email, password) => {
    return async (dispatch) => {
        const response = await authApi.registration(email, password);
        let message = response.message;
        dispatch(getMessage(message))
        if (response.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    }
}
export const logout = (email, password) => {
    return async (dispatch) => {
        const response = await authApi.logout(email, password)
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, false))
            }
    }
}

export default authReducer;