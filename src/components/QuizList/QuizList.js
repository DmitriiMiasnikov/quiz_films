import React from 'react';
import styles from './QuizList.module.scss';
import { NavLink } from 'react-router-dom';

const QuizList = (props) => {
    const currentList = props[props.currentListQuiz(props.quizList)];
    return (
        <div className={styles.wrapper}>
            {
                currentList ? currentList.map((el, i) => {
                    return <div className={styles.item} key={i}>
                        <NavLink to={`/quiz/${el.name}`} onClick={() => props.getQuiz(el)}>
                            <img src={el.src} className={styles.picture} ></img>
                        </NavLink>
                        <div className={styles.titleBlock}>
                            <NavLink to={`/quiz/${el.name}`} onClick={() => props.getQuiz(el)}>{el[props.local]}</NavLink>
                        </div>
                    </div>
                }) : null
            }
        </div>
    )
}
export default QuizList;