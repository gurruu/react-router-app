import React from 'react'
import { useRouteLoaderData,redirect } from 'react-router-dom'
import EventItem from '../components/EventItem'

export default function EventDetail() {
    // const params=useParams()
    const data=useRouteLoaderData('event-detail')
  return (
   <>
   <EventItem event={data}/>
   </>
  )
}

export async function loader({request,params}){
    const id=params.eventId
   const response=await fetch("http://localhost:8080/events/"+ id)
   if(!response.ok)
   {
    throw new Response(JSON.stringify({message:'Could not fetch events'}),{status:500},)
   }else{
    const resData = await response.json();
    console.log(resData)
    return resData.event;
   }

}

export async function action({params}){
const eventId=params.eventId;
const response=await fetch("http://localhost:8080/events/"+ eventId,{
  method:'DELETE'
})
if(!response.ok)
   {
    throw new Response(JSON.stringify({message:'Could not fetch events'}),{status:500},)
   }
   return redirect('/events')

}
