import React, { useEffect } from 'react';
import styles from './App.module.scss';
import Header from './components/Header/HeaderContainer';
import MainPage from './components/MainPage/MainPageContainer';
import Footer from './components/Footer/FooterContainer';
import Quiz from './components/Quiz/QuizContainer';
import { Route, Redirect } from 'react-router-dom';
import QuizList from './components/QuizList/QuizListContainer';
import { connect } from "react-redux";
import { getAllQuiz, getFilmsQuiz, getSerialsQuiz } from './store/mainPageReducer'

const App = (props) => {
  useEffect(() => {
      props.getAllQuiz()
      props.getFilmsQuiz()
      props.getSerialsQuiz()
  }, [])
  return (
    <div className={styles.app}>
      <Header />
      <div className = {styles.content}>
        <Redirect from='/' to='/main' />
        <Route path='/main' render={() => <MainPage />} />
        <Route path='/all_quiz' render={() => <QuizList />} />
        <Route path='/films' render={() => <QuizList />} />
        <Route path='/serials' render={() => <QuizList />} />
        <Route path='/quiz/:name?' render={() => <Quiz />} />
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quizAll: state.mainPage.quizAll,
      quiz: state.mainPage.quiz,
  }
}

export default connect(mapStateToProps, { getAllQuiz, getFilmsQuiz, getSerialsQuiz })(App);
