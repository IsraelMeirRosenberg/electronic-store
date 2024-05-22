import Item from '@/components/Item'
import { readItems_service } from '@/server/BL/services/item.service'
import { connectToMongo } from '@/server/connectToMongo'
import React from 'react'

export default async function page({params:{idCat}}) {
await connectToMongo()
const data = await readItems_service() 
console.log(data);
    return (
    <div>
     {data.map(a=><Item key={a._id}/> )}
    </div>
  )
}
