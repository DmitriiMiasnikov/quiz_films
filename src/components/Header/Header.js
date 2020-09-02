import React from 'react';
import styles from './Header.module.scss';
import classnames from 'classnames';

const Header = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.items}>
                <div className = {classnames(styles.icon, styles.item)}>quiz-films</div>
                {
                    props.menuItems.map((el, i) => {
                        return <div className={styles.item} key={i}>{props.local === 'en' ? el.en : el.ru}</div>
                    })
                }
                <div className={styles.localButton}>
                    <div className={classnames(styles.localEn, {[styles.current]: props.local === 'en'})}>en</div>
                    <div className = {styles.line}></div>
                    <div className = {classnames(styles.localRu, {[styles.current]: props.local === 'ru'})}>ru</div>
                </div>
            </div>

        </div>
    )
}
export default Header;