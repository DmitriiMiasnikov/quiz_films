import { connect } from "react-redux";
import React from 'react';
import MainPage from './MainPage';
import { getRandomQuiz } from './../../store/quizReducer'

const MainPageContainer = (props) => {
    const getRandomQuiz = () => {
        const randomTest = Math.floor(Math.random() * props.quizAll.length)
        props.getRandomQuiz(props.quizAll[randomTest].name)
        return props.getRandomQuiz(props.quizAll[randomTest])
    }
    const counterTests = () => {
        return props.quizAll.length
    }
    return (
        <MainPage {...props} counterTests={counterTests} getRandomQuiz={getRandomQuiz} />
    )
}

const mapStateToProps = (state) => {
    return {
        quizAll: state.mainPage.quizAll,
        local: state.header.local,

    }
}

export default connect(mapStateToProps, { getRandomQuiz })(MainPageContainer);