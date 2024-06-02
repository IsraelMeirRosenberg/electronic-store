import { putItem_service } from "@/server/BL/services/item.service";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
    try {
        const body = await req.json()
        const result = await putItem_service(params.itemId, body)
        return NextResponse.json(result, { status: 200 })
    } catch (error) {
        console.log(error);
    }
}