import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import { switchLocal } from './../../store/headerReducer';
import { setQuizList } from './../../store/mainPageReducer';

const HeaderContainer = (props) => {
    const setQuizListFunc = (quiz) => {
        props.setQuizList(quiz)
    }
    return <Header {...props} setQuizListFunc = {setQuizListFunc}/>
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.header.menuItems,
        local: state.header.local
    }
}
export default connect(mapStateToProps, { switchLocal, setQuizList })(HeaderContainer);