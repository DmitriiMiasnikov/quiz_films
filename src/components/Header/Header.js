import React from 'react';
import styles from './Header.module.scss';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.items}>
                <div className={classnames(styles.icon, styles.item)}>
                    <NavLink to='/main'>quiz-films</NavLink>
                </div>
                {
                    props.menuItems.map((el, i) => {
                        return <div className={styles.item} key={i}>
                            <NavLink to={`/${el.en.toLowerCase().split(' ').join('_')}`} activeClassName={styles.active}>
                                {props.local === 'en' ? el.en : el.ru}
                            </NavLink>
                        </div>
                    })
                }
                <div className={styles.localButton} onClick = {() => props.switchLocal()}>
                    <div className={classnames(styles.localEn, { [styles.current]: props.local === 'en' })}>en</div>
                    <div className={classnames(styles.localRu, { [styles.current]: props.local === 'ru' })}>ru</div>
                </div>
            </div>

        </div>
    )
}
export default Header;