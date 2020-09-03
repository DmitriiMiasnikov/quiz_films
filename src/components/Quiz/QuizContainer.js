import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import { stepUp, checkAnswer } from './../../store/quizReducer';
import { Redirect } from 'react-router-dom';

const QuizContainer = (props) => {
    const [answers, setAnswer] = useState(null);
    useEffect(() => {
        if (props.currentQuiz) {
            setAnswer(props.currentQuiz.questions.map(el => null))
        }
    }, [])
    const checkAnswerFunc = (answer, step) => {
        if (answers) {
            props.checkAnswer(answer, step, answers)
            props.stepUp()
        }
    }
    return (
        !props.currentQuiz ? <Redirect to='/main' /> : <Quiz {...props} checkAnswer={checkAnswerFunc} />
    )
}

const mapStateToProps = (state) => {
    return {
        local: state.header.local,
        step: state.quiz.step,
        currentQuiz: state.quiz.currentQuiz,
        answers: state.quiz.answers
    }
}

export default connect(mapStateToProps, { stepUp, checkAnswer })(QuizContainer);