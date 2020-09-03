import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/HeaderContainer';
import MainPage from './components/MainPage/MainPageContainer';
import Footer from './components/Footer/FooterContainer';
import { Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className = {styles.content}>
        <Redirect from='/' to='/main' />
        <Route path='/main' render={() => <MainPage />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
