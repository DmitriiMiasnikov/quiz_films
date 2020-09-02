import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/HeaderContainer';
import MainPage from './components/MainPage/MainPage'
import { Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className = {styles.content}>
        <Redirect from='/' to='/main' />
        <Route path='/main' render={() => <MainPage />} />
      </div>
    </div>
  );
}

export default App;
