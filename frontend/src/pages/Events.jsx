import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function Events() {
  const events = useLoaderData();
  
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default Events;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({message:'Could not fetch events'}),{status:500},)
  } else {
    const resData = await response.json();
    // console.log(resData)
    return resData.events;
  }
}
