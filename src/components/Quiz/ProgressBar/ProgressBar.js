import React from 'react';
import styles from './ProgressBar.module.scss';
import classnames from 'classnames';

const ProgressBar = (props) => {
    return (
            <div className={styles.progress}>
                {
                    props.currentQuiz.questions.map((el, i) => {
                        return <div className={styles.point} key={i}><div className={classnames(styles.image, {
                            [styles.wrong]: !props.answers[i] ? false : props.answers[i][0] === false,
                            [styles.right]: !props.answers[i] ? false : props.answers[i][0] === true
                        })}></div></div>
                    })
                }
            </div>
            
    )
}
export default ProgressBar;