import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();
  // const events = data.events;
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={events}>
        {(loadEvents) => <EventsList events={loadEvents}></EventsList>}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json(
      { message: "could not fetch events" },
      {
        status: 500,
      }
    );
  } else {
    const responseData=await response.json();
    return responseData.events;
  }
}
export function loader() {
  return defer({
    events: loadEvents(),
  });
}
