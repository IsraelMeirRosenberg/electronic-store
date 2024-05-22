import React from 'react'
import styles from './style.module.scss'
export default function BlackBtn({ children, name }) {
    return (
        <div className={styles.main}>
            <button className={styles.btn}>{children}</button>
            <p >{name ? name : null}</p>
        </div>
    )
}
