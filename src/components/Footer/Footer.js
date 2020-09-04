import React from 'react';
import styles from './Footer.module.scss';
import arrow from './../../assets/img/arrow.svg';
import classnames from 'classnames';

const Footer = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.info}>2020 miasnikovdmitrii@gmail.com</div>
                <img src={arrow} className={classnames(styles.arrow, {[styles.hide]: props.hideArrow})} 
                    onClick={props.scrollTop}></img>
            </div>
        </div>
    )
}
export default Footer;