import React from 'react';
import styles from './LocalButton.module.scss';
import classnames from 'classnames';

const LocalButton = (props) => {
    return (
        <div className={styles.localButton} onClick={() => props.switchLocal()}>
            <div className={classnames(styles.localEn, { [styles.current]: props.local === 'en' })}>en</div>
            <div className={classnames(styles.localRu, { [styles.current]: props.local === 'ru' })}>ru</div>
        </div>
    )
}
export default LocalButton;