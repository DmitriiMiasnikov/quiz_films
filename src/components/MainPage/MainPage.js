import React from 'react';
import styles from './MainPage.module.scss';
import { NavLink } from 'react-router-dom';

const MainPage = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Welcome to the site.</div>
            <div className={styles.subtitle}>Test your knowledge of your favorite films.</div>
            <div className={styles.counter}>total tests: {props.counterTests()}</div>
            <div className={styles.buttonRandomTest} onClick = {() => props.getRandomQuiz()}>
            <NavLink to={`/quiz/${() => props.getRandomQuiz()}`}>start random test</NavLink>
                </div>
        </div>
    )
}
export default MainPage;