import React from 'react';
import styles from './Footer.module.scss';
import arrow from './../../assets/img/arrow.svg';

const Footer = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.info}>2020 miasnikovdmitrii@gmail.com</div>
                <img src={arrow} className={styles.top} onClick={props.scrollTop}></img>
            </div>
        </div>
    )
}
export default Footer;