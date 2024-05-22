import React from 'react'
import style from './style.module.scss'
import { HiOutlineShoppingCart } from 'react-icons/hi'
export default function BtnAddToCart() {
  return (
    <div>
      <button className={style.btn}>
        <HiOutlineShoppingCart/>
        <p>הוסף לעגלה</p>
      </button>
    </div>
  )
}
