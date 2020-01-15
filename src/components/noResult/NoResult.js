import React from 'react';
import styles from './NoResult.module.css';

const NoResult = () => {
    return (
        <div className={styles.container}>
            <img src="https://media.giphy.com/media/zLCiUWVfex7ji/giphy.gif" alt="No Match" />
            <p>There is no result for this search :(</p>
        </div>
    )
}

export default NoResult;