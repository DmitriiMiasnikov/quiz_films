import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import { stepUp, checkAnswer } from './../../store/quizReducer';
import { Redirect } from 'react-router-dom';

const QuizContainer = (props) => {
    const [answers, setAnswer] = useState(null);
    const [hidePrevImage, setHidePrevImage] = useState(false);
    useEffect(() => {
        if (props.currentQuiz) {
            setAnswer(props.currentQuiz.questions.map(el => null))
        }
    }, [])
    const checkAnswerFunc = async (answer, step, item) => {
        if (answers) {
            props.checkAnswer(answer, step, answers, item)
            await new Promise(res => setTimeout(res, 500))
            setHidePrevImage(true)
            props.stepUp()
            await new Promise(res => setTimeout(res, 500))
            setHidePrevImage(false)
        }
    }
    return (
        !props.currentQuiz ? <Redirect to='/main' /> : <Quiz {...props}
            checkAnswer={checkAnswerFunc} hidePrevImage={hidePrevImage} />
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