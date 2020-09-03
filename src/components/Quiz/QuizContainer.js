import { connect } from "react-redux";
import React from 'react';
import Quiz from './Quiz';
import {stepUp} from './../../store/quizReducer'

const QuizContainer = (props) => {
    return (
        <Quiz {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        local: state.header.local,
        step: state.quiz.step,
        currentQuiz: state.quiz.currentQuiz,
    }
}

export default connect(mapStateToProps, { stepUp })(QuizContainer);