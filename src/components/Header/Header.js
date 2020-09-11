import React from 'react';
import styles from './Header.module.scss';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import LocalButton from './LocalButton/LocalButton';

const Header = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.items}>
                <div className={classnames(styles.icon, styles.item)}>
                    <NavLink to='/main'>quiz-films</NavLink>
                </div>
                {
                    props.menuItems.map((el, i) => {
                        return <div className={classnames(styles.item)} key={i}
                            onClick={() => props.setQuizListFunc(`${el.en.toLowerCase().split(' ').join('_')}`)} >
                            <NavLink to={`/${el.en.toLowerCase().split(' ').join('_')}`}
                                activeClassName={styles.active}>
                                {props.local === 'en' ? el.en : el.ru}
                            </NavLink>
                        </div>
                    })
                }
                <div className = {styles.authBlock}>
                {
                    props.authItems.map((el, i) => {
                        return <div className={classnames(styles.itemRight)} key={i}
                            onClick={() => props.setQuizListFunc(`${el.en.toLowerCase().split(' ').join('_')}`)} >
                            <NavLink to={`/${el.en.toLowerCase().split(' ').join('_')}`}
                                activeClassName={styles.active}>
                                {props.local === 'en' ? el.en : el.ru}
                            </NavLink>
                        </div>
                    })
                }
                </div>
                <LocalButton switchLocal={props.switchLocal} local={props.local} />
            </div>

        </div>
    )
}
export default Header;