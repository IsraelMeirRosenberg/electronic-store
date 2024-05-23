import React from "react";
import style from "./style.module.scss";
import BtnAddToCart from "../BtnAddToCart";
import Link from "next/link";
export default function Item({image , name , price , id ,desc}) {

  const flags = {
    samsung:
      "https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/attribute/swatch/s/a/samsung_logo.png",
    electra:
      "https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/attribute/swatch/e/l/electra_logo.png",
    LG: "https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/attribute/swatch/l/g/lg_logo.png",
  };
  return (
    <Link  href={`/item/${id}`} >
    <div className={style.main}>
      <div className={style.companyImg}>
        <img src={flags["LG"]} alt="" />
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
        צבע : שחור
      </p>
      <div>
        {" "}
        {desc}
        {/* מקרר 4 דלתות בסגנון צרפתי 468 מקפיא תחתון פלוס כגימור נירוסטה אחריות
        יבואן רשמי */}
      </div>
      <div className={style.textPrice}>₪{price}</div>
      <BtnAddToCart />
        </div>
    </div>
          </Link>
  );
}
