import styles from "./page.module.scss";
import { connectToMongo } from "@/server/connectToMongo";
import OneCategory from "@/components/OneCategory";
import { read_cat_services } from "@/server/BL/services/category.services";
import Link from "next/link";
import FlipCard from "@/components/FlipCard";
export default async function Home() {
  await connectToMongo()
  const categories = await read_cat_services()
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.holdCategories}>
          {categories.map(cat => <Link className={styles.link} href={`/category/${cat._id}`}><OneCategory key={cat._id} text={cat.name} img={cat.image} /></Link>
          )}
        </div>
        <div className={styles.holdFlipCards}>

        </div>
      </div>
    </>
  );
}
