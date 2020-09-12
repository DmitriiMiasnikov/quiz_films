import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import { switchLocal } from './../../store/headerReducer';
import { setQuizList } from './../../store/mainPageReducer';
import { clear } from './../../store/quizReducer';
import { getMessage } from './../../store/authReducer'

const HeaderContainer = (props) => {
    const setQuizListFunc = (quiz) => {
        props.clear();
        props.setQuizList(quiz);
    }
    const clearList = () => {
        props.clear();
    }
    return <Header {...props} setQuizListFunc = {setQuizListFunc} clearList = {clearList}/>
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.header.menuItems,
        local: state.header.local,
        authItems: state.header.authItems
    }
}
export default connect(mapStateToProps, { switchLocal, setQuizList, clear, getMessage })(HeaderContainer);