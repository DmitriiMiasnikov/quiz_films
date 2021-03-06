import React from 'react';
import styles from './Result.module.scss';
import classnames from 'classnames';

const Result = (props) => {
    return (
        <div className={styles.result}>
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
                                            [styles.right]: props.currentQuiz.questions[i].currect === el
                                        })}></div>
                                        <div className={styles.text}>{el}</div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                })
            }
            <div className={styles.resultText}>
                {props.resultText[props.local]}
            </div>
        </div>
    )
}
export default Result;