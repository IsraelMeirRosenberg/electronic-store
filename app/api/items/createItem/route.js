import { createItem_service } from "@/server/BL/services/item.service";
import { NextResponse } from "next/server";

export const POST = async(req) => {
    try {
      const body = await req.json()
      const res = await createItem_service(body)
      return NextResponse.json(res)
    } catch (error) {
       console.log(error);
    }
    }