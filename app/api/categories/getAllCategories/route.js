import { read_cat_services } from "@/server/BL/services/category.services"
import { NextResponse } from "next/server"

export const GET = async () => {
  const all = await read_cat_services()
 return NextResponse.json(all)
}