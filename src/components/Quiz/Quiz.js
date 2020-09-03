import React from 'react';
import styles from './Quiz.module.scss';
import classnames from 'classnames';

const Quiz = (props) => {
    return (
        <div className={classnames(styles.wrapper, {
            [styles.hide]: props.hidePrevImage
        })}>
            <div className={styles.progress}>
                {
                    props.currentQuiz.questions.map((el, i) => {
                        return <div className={styles.point} key={i}><div className={classnames(styles.image, {
                            [styles.wrong]: !props.answers ? false : !props.answers[i] ? false : props.answers[i][0] === false,
                            [styles.right]: !props.answers ? false : !props.answers[i] ? false : props.answers[i][0] === true
                        })}></div></div>
                    })
                }
            </div>
            {
                props.currentQuiz && props.step < props.currentQuiz.questions.length ? <div className={classnames(styles.quiz)}>
                    <img src={props.currentQuiz.questions[props.step].src} className={styles.image}></img>
                    <div className={styles.questions}>
                        {
                            props.currentQuiz.questions[props.step].options.map((el, i) => {
                                return <div className={styles.question} key={i}
                                    onClick={() => props.checkAnswer(el, props.step, i)}>{el}</div>
                            })
                        }
                    </div>
                </div> : <div className={styles.result}>
                        {
                            props.currentQuiz.questions.map((el, i) => {
                                return <div className={styles.item} key={i}>
                                    <img src={props.currentQuiz.questions[i].src} className={styles.image}></img>
                                    <div className={styles.questions}>
                                        {
                                            props.currentQuiz.questions[i].options.map((el, item) => {
                                                return <div className={styles.question} key={item}>
                                                    <div className={classnames(styles.tickCross, {
                                                        [styles.wrong]: props.answers[i][1] === item && props.answers[i][0] === false,
                                                        [styles.right]: props.answers[i][1] === item && props.answers[i][0]
                                                    })}></div>
                                                    <div className={styles.text}>{el}</div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
                        <div className = {styles.resultText}>
                            {props.resultText[props.local]}
                        </div>
                    </div>
            }
        </div>
    )
}
export default Quiz;