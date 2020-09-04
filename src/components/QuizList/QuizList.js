import React from 'react';
import styles from './QuizList.module.scss';
import { NavLink } from 'react-router-dom';

const QuizList = (props) => {
    return (
        <div className={styles.wrapper}>
            {
                props[props.currentListQuiz(props.quizList)] ? props[props.currentListQuiz(props.quizList)].map((el, i) => {
                    return <div className={styles.item} key={i}>
                        <NavLink to={`/quiz/${el.name}`} onClick={props.getQuiz(el)}>
                            <img src={el.src} className={styles.picture} ></img>
                        </NavLink>
                        <div className={styles.titleBlock}>
                            <NavLink to={`/quiz/${el.name}`} onClick={props.getQuiz(el)}>{el[props.local]}</NavLink>
                        </div>
                    </div>
                }) : null
            }
        </div>
    )
}
export default QuizList;