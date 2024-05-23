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
          <FlipCard firstImg='https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/New-Icons/Brands/Apple.png' secondImg='https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Mac.png?w=1024' />
          <FlipCard firstImg='https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/New-Icons/Brands/Apple.png' secondImg='https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Mac.png?w=1024' />
          <FlipCard firstImg='https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/New-Icons/Brands/Apple.png' secondImg='https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Mac.png?w=1024' />
          <FlipCard firstImg='https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/New-Icons/Brands/Apple.png' secondImg='https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Mac.png?w=1024' />
          <FlipCard firstImg='https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/New-Icons/Brands/Apple.png' secondImg='https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Mac.png?w=1024' />
          <FlipCard firstImg='https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/New-Icons/Brands/Apple.png' secondImg='https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Mac.png?w=1024' />
          <FlipCard firstImg='https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/New-Icons/Brands/Apple.png' secondImg='https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Mac.png?w=1024' />
          <FlipCard firstImg='https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/New-Icons/Brands/Apple.png' secondImg='https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Mac.png?w=1024' />
          <FlipCard firstImg='https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/New-Icons/Brands/Apple.png' secondImg='https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Mac.png?w=1024' />
          <FlipCard firstImg='https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/New-Icons/Brands/Apple.png' secondImg='https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Mac.png?w=1024' />
          <FlipCard firstImg='https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/New-Icons/Brands/Apple.png' secondImg='https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Mac.png?w=1024' />
          <FlipCard firstImg='https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/www.payngo.co.il/media/New-Icons/Brands/Apple.png' secondImg='https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Mac.png?w=1024' />
        </div>
      </div>
    </>
  );
}
