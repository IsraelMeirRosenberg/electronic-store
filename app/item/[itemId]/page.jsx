import React from 'react'
import styles from './style.module.scss'
import { FaCartShopping } from "react-icons/fa6";
import { readOneItemWithLean_service, readOneItem_service } from '@/server/BL/services/item.service'
import { flagsItem } from '@/data/flagsItem'
export default async function page({ params: { itemId } }) {
    const item = await readOneItemWithLean_service(itemId)
    return (
        <div className={styles.layout}>
            <div className={styles.contain}>
                <img src={flagsItem[item?.imgCompany?.toLowerCase()]} alt="" />
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}> קנה עכשיו ב-{item.price}</p>
                <button className={styles.addCartBtn}><FaCartShopping />הוספה לסל</button>
                <p className={styles.desc}>{item.desc}</p>
            </div>
            <div className={styles.img}>
                <img src={item.image} alt="" />
            </div>
        </div>
    )
}
