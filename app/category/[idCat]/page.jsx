import Item from "@/components/Item";
import { createItem_service, readItemsWithLean_service } from "@/server/BL/services/item.service";
import { connectToMongo } from "@/server/connectToMongo";
import React from "react";
import style from "./style.module.scss";
import FilterItems from "@/components/FilterItems";
import Link from "next/link";
export default async function page({ params: { idCat } }) {
  await connectToMongo();


  const data = await readItemsWithLean_service({ category: idCat });
  return (
    <div className={style.page}>
      <FilterItems />
      <div className={style.holdItems}>
        {data.map((a) => (
          <Link key={a._id} href={`/item/${a._id}`} >
            <Item

              image={a.image}
              name={a.name}
              price={a.price}
              id={a._id}
              desc={a.desc}
              imgCompany={a.imgCompany}
              color={a.color}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
// {
//   "name":"Samsung Galaxy Tab S5e",
//   "image":"https://m.media-amazon.com/images/I/91QlrgIeLOL._AC_UF894,1000_QL80_.jpg",
//   "category":"Samsung Galaxy Tab S5e",
//   "price":300,
//   "amount":40,
//   "color":"שחור",
//   "imgCompany":"Samsung",
//   "desc":"ה-Apple iPad הוא הטאבלט המוביל בשוק עם חווית משתמש מעולה.",
// }


