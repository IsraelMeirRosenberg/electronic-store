import Item from "@/components/Item";
import { readItems_service } from "@/server/BL/services/item.service";
import { connectToMongo } from "@/server/connectToMongo";
import React from "react";
import style from "./style.module.scss";
import FilterItems from "@/components/FilterItems";
export default async function page({ params: { idCat } }) {
  await connectToMongo();
  const data = await readItems_service();
  return (
    <div className={style.page}>
      <FilterItems />
      {/* <div className={style.centerItems}> */}
        <div className={style.holdItems}>
          {data.map((a) => (
            <Item
              key={a._id}
              image={a.image}
              name={a.name}
              price={a.price}
              id={a._id}
              desc={a.desc}
            />
          ))}
        </div>
      {/* </div> */}
    </div>
  );
}
