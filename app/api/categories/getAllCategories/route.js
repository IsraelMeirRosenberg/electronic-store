import { read_cat_services } from "@/server/BL/services/category.service"
import { NextResponse } from "next/server"

export const GET = async () => {
  const all = await read_cat_services()
  return NextResponse.json(all)
}