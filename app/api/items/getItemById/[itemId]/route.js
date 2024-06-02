import { readOneItemWithLean_service } from "@/server/BL/services/item.service"

export const GET = async (req, { params }) => {
    try {
        const res = await readOneItemWithLean_service(params.itemId)
        return Response.json(res)
    } catch (error) {
        console.log(error);
        return Response.json(error, { status: 400 })
    }

}