import React from 'react';
import styles from './Quiz.module.scss';
import classnames from 'classnames';

const Quiz = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.progress}>
                {
                    props.currentQuiz.questions.map((el, i) => {
                        return <div className={classnames(styles.point,
                            {
                                [styles.wrong]: props.answers && props.answers[i] === false,
                                [styles.right]: props.answers && props.answers[i]
                            })} key={i}></div>
                    })
                }
            </div>
            {
                props.currentQuiz && props.step < props.currentQuiz.questions.length ? <div className={styles.quiz}>
                    <img src={props.currentQuiz.questions[props.step].src} className={styles.image}></img>
                    <div className={styles.questions}>
                        {
                            props.currentQuiz.questions[props.step].options.map((el, i) => {
                                return <div className={styles.question} key={i}
                                    onClick={() => props.checkAnswer(el, props.step)}>{el}</div>
                            })
                        }
                    </div>
                </div> : <div className = {styles.result}></div>
            }
        </div>
    )
}
export default Quiz;