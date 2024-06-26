"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { IoMdSearch } from "react-icons/io";
import BlackBtn from "../BlackBtn";
import { flagsItem } from "@/data/flagsItem";
import Link from "next/link";
import { debounce } from "lodash";
export default function SearchBar() {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState()
  const handleChange = debounce((e) => {
    if (!e.target.value) return setItems([]);
    fetch(`http://localhost:3000/api/items/getItemsBySearchParams?name=${e.target.value}&color&maxPrice=${Infinity}&minPrice=0`,{method:"GET"})
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
      });
  }, 900)

  return (
    <>

      <div className={styles.bottom}>
        {
          <div  onClick={() => setShow(false)} className={`${styles.dismissArea} ${show? styles.dismissAreaActive:""}`}>
          </div>
        }
        <form
        >
          <input
            onClick={() => setShow(true)}
            type="text"
            id="search"
            placeholder="אני רוצה לקנות..."
            onChange={handleChange}
          />
          <BlackBtn>
            <IoMdSearch className={styles.searchBtn} />
          </BlackBtn>
        </form>
        {items.length && show ?
          <div className={styles.holdItemsFound}>
            {items.map((v, i) => {
              // if (i < 10)
              return (
                <Link
                  className={styles.link}
                  key={v._id}
                  href={`/item/${v._id}`}
                  onClick={()=>setShow(false)}
                >
                  <div className={styles.itemsFound}>
                    <img
                      className={styles.imgFound}
                      src={v.image}
                      alt=""
                    />
                    <div>
                      <p>שם מוצר: {v.name}</p>
                      <p>צבע: {v.color}</p>
                      <p>מחיר: ₪{v.price}</p>
                    </div>
                    <img
                      className={styles.imgCompanyFound}
                      src={flagsItem[v.imgCompany?.toLowerCase()]}
                      alt=""
                    />
                  </div>
                </Link>
              );
            })}
          </div>
          : null}
      </div>
    </>
  );
}
