import React from 'react';
import styles from './Quiz.module.scss';
import classnames from 'classnames';

const Quiz = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className = {styles.progress}>
                {
                    props.currentQuiz.questions.map((el, i) => {
                        return <div className = {classnames(styles.point)} key = {i}></div>
                    })
                }
            </div>
            {
                props.currentQuiz ? <div className = {styles.quiz}>
                    <img src={props.currentQuiz.questions[props.step].src} className={styles.image}></img>
                    <div className={styles.questions}>
                        {
                            props.currentQuiz.questions[props.step].options.map((el, i) => {
                                return <div className={styles.question} key={i}>{el}</div>
                            })
                        }
                    </div>
                </div> : null
            }
        </div>
    )
}
export default Quiz;