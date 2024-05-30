import React from "react";
import style from "./style.module.scss";
import BtnAddToCart from "../BtnAddToCart";
import Link from "next/link";
import { flagsItem } from "@/data/flagsItem";
export default function Item({ image, name, price, desc, imgCompany, color }) {
  return (
    <div className={style.main}>
      <div className={style.holdCompanyImg}>
        <img className={style.imgCompany} src={flagsItem[imgCompany?.toLowerCase()]} alt="" />
      </div>
      <div className={style.holdImg}>
        <img
          src={image}
          alt=""
        />
      </div>
      <div className={style.flexTexts}>

        <p className={style.nameItem}>{name}</p>
        <p className={style.textPrice}>
          צבע : {color}
        </p>
        <div className={style.desc}>
          {" "}
          {desc}
          {/* מקרר 4 דלתות בסגנון צרפתי 468 מקפיא תחתון פלוס כגימור נירוסטה אחריות
        יבואן רשמי */}
        </div>
        <div className={style.textPrice}>₪{price}</div>
        <BtnAddToCart />
      </div>
    </div>
  );
}
