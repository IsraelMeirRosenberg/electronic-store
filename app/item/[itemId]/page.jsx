import React from 'react'
import styles from './style.module.scss'
import { FaCartShopping } from "react-icons/fa6";
import { readOneItemWithLean_service, readOneItem_service } from '@/server/BL/services/item.service'
import { flagsItem } from '@/data/flagsItem'
export default async function page({ params: { itemId } }) {
    const item = await readOneItemWithLean_service(itemId)
    const flags = flagsItem
    return (
        <div className={styles.layout}>
            <div className={styles.contain}>
                <img src={flags[item.imgCompany]} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button><FaCartShopping />הוספה לסל</button>
                <p>{item.description}</p>
            </div>
            <div className={styles.img}>
                <img src={item.image} alt="" />
            </div>
        </div>
    )
}
