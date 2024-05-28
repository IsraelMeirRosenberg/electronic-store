import React from 'react'
import styles from './style.module.scss'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import BlackBtn from '../BlackBtn';
import { FaUserCircle } from "react-icons/fa";
import { FaFonticonsFi } from "react-icons/fa";
import SearchBar from '../SearchBar';
export default function Header() {
    return (
        <div className={styles.layout}>
            <div className={styles.top}>
                <div className={styles.right}>
                    <FaFonticonsFi />
                </div>
                <div className={styles.left}>
                    <div className={styles.divBtn}>
                        <BlackBtn name='צור קשר'>@</BlackBtn>
                    </div>
                    <div className={styles.divBtn}>
                        <BlackBtn name='התחברות'><FaUserCircle /></BlackBtn>
                    </div>
                    <div className={styles.divBtn}>
                        <BlackBtn name='עגלה'><FaCartShopping /></BlackBtn>
                    </div>
                </div>
            </div>
           <SearchBar/>
           
        </div >


    )
}
