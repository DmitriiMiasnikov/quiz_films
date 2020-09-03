import React from 'react';
import styles from './MainPage.module.scss';

const MainPage = (props) => {
    return (
        <div className = {styles.wrapper}>
            {
                props.quiz.map((el, i) => {
                return <div className = {styles.item} key = {i}>
                    <img src = {el.src} className = {styles.picture} ></img>
                    <div className = {styles.titleBlock}>{el[props.local]}</div>
                    </div>
                })
            }
        </div>
    )
}
export default MainPage;