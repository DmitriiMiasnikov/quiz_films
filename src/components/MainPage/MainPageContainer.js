import { connect } from "react-redux";
import React from 'react';
import MainPage from './MainPage';
import {getQuiz} from './../../store/quizReducer'

const MainPageContainer = (props) => {
    const getQuiz = (currentQuiz) => {
        props.getQuiz(currentQuiz)
    }
    return (
        <MainPage {...props} getQuiz = {getQuiz} />
    )
}

const mapStateToProps = (state) => {
    return {
        quiz: state.mainPage.quiz,
        local: state.header.local,

    }
}

export default connect(mapStateToProps, { getQuiz })(MainPageContainer);