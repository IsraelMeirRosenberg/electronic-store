import { readItems_service } from "@/server/BL/services/item.service";
import { connectToMongo } from "@/server/connectToMongo";
import { NextResponse } from "next/server";
export const GET = async (req) => {
    try {
      const searchParams = req.nextUrl.searchParams
      const obj = Object.fromEntries(searchParams)
      console.log(obj);
      const key = Object.keys(obj)[0]
      const value = Object.values(obj)[0]
      console.log(obj);
       await connectToMongo()
       const items = await readItems_service({
          $and:[
             {["name"]:{$regex:obj?.name,$options:"i"}},
             {["color"]:{$regex:obj?.color,$options:"i"}},
             {["price"]:{$gte:obj?.minPrice,$lte:obj?.maxPrice}},
            //  {["maxPrice"]:{$regex:obj?.price,$options:"i"}},
            ]
         }
      )
      console.log(items);
       return NextResponse.json(items)
    } catch (error) {
       console.log(error);
    }
 }