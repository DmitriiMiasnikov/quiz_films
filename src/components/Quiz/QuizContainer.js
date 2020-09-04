import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import { stepUp, checkAnswer, getResultText, toggleInactiveButtons } from './../../store/quizReducer';
import { Redirect } from 'react-router-dom';

const QuizContainer = (props) => {
    const [answers, setAnswer] = useState(null);
    const [hidePrevImage, setHidePrevImage] = useState(false);
    const shuffleAnswers = (currentQuiz) => {
        const shuffleFunc = (arr) => arr.map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0]).map(a => a[1]);
        const shuffledArr = currentQuiz;
        shuffledArr.questions = shuffleFunc(shuffledArr.questions);
        shuffledArr.questions = shuffledArr.questions.map(el => {
            const shuffleFunc = (arr) => arr.map(a => [Math.random(), a])
                .sort((a, b) => a[0] - b[0]).map(a => a[1]);
            el.options = shuffleFunc(el.options)
            return el
        })
        return shuffledArr
    }
    useEffect(() => {
        if (props.currentQuiz) {
            setAnswer(props.currentQuiz.questions.map(el => null))
            shuffleAnswers(props.currentQuiz)
        }
    }, [])

    const checkAnswerFunc = async (answer, step, item) => {
        if (answers) {
            props.checkAnswer(answer, step, answers, item)
            props.toggleInactiveButtons(true)
            await new Promise(res => setTimeout(res, 300))
            setHidePrevImage(true)
            await new Promise(res => setTimeout(res, 300))
            props.stepUp()
            await new Promise(res => setTimeout(res, 300))
            setHidePrevImage(false)
            props.toggleInactiveButtons(false)
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
        inactiveButtons: state.quiz.inactiveButtons,
    }
}

export default connect(mapStateToProps, { stepUp, checkAnswer, getResultText, toggleInactiveButtons })(QuizContainer);