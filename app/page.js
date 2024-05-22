import Image from "next/image";
import styles from "./page.module.css";
import { connectToMongo } from "@/server/connectToMongo";

export default async function Home() {
  await connectToMongo()
  return (
    <main className={styles.main}>

    </main>
  );
}
