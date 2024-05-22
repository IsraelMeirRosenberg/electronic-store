import Image from "next/image";
import styles from "./page.module.css";
import { connectToMongo } from "@/server/connectToMongo";
import OneCategory from "@/components/OneCategory";
import Footer from "@/components/Footer";
import FlipCard from "@/components/FlipCard";
import Item from "@/components/Item";

export default async function Home() {
  await connectToMongo()
  return (
    <>

    </>
  );
}
