import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className = {styles.content}>
        <Route path='/Main' render={() => <MainPage />} />
      </div>
    </div>
  );
}

export default App;
