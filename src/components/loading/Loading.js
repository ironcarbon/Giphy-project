import React from 'react';
import loading from '../gifCard/spinner.gif';
import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.container}>
            <img src={loading} alt="Loading" />
            <p>Loading...</p>
        </div>
    )
}

export default Loading;