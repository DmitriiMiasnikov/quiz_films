import { connect } from "react-redux";
import React from 'react';
import QuizList from './QuizList';
import { getQuiz } from '../../store/quizReducer';

const QuizListContainer = (props) => {
    const getQuiz = (currentQuiz) => {
        props.getQuiz(currentQuiz)
    }
    const currentListQuiz = (quiz) => {
        switch (quiz) {
            case ('all_quiz'): return 'quizAll'
            case ('films'): return 'quizFilms'
            case ('serials'): return 'quizSerials'
            default: return ''
        }
    }
    return (
        <QuizList {...props} getQuiz={getQuiz} currentListQuiz={currentListQuiz}/>
    )
}

const mapStateToProps = (state) => {
    return {
        quizAll: state.mainPage.quizAll,
        quizFilms: state.mainPage.quizFilms,
        quizSerials: state.mainPage.quizSerials,
        local: state.header.local,
        quizList: state.mainPage.quizList
    }
}

export default connect(mapStateToProps, { getQuiz })(QuizListContainer);