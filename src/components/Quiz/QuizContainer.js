import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import { stepUp, checkAnswer, getResultText } from './../../store/quizReducer';
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
            await new Promise(res => setTimeout(res, 300))
            setHidePrevImage(true)
            await new Promise(res => setTimeout(res, 300))
            props.stepUp()
            await new Promise(res => setTimeout(res, 300))
            setHidePrevImage(false)
        }
    }
    useEffect(() => {
        if (hidePrevImage) {
            const right = props.answers.filter(el => !el ? false : el[0] === true).length;
            const all = props.answers.length
            props.getResultText(right, all)
        }
    }, [hidePrevImage])

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
        answers: state.quiz.answers,
        resultText: state.quiz.resultText,
    }
}

export default connect(mapStateToProps, { stepUp, checkAnswer, getResultText })(QuizContainer);