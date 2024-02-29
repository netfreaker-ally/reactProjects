import {
  json,
  useRouteLoaderData,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventDetailPage = () => {
  console.log("EventDetailPage rendered");
  const { event, events } = useRouteLoaderData("event-detail");
  console.log("Event:" + event + "/nEvents:" + events);
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};
async function loadEvents() {
  console.log("Loader function is called");
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json(
      { message: "could not fetch events" },
      {
        status: 500,
      }
    );
  } else {
    const responseData = await response.json();
    return responseData.events;
  }
}
async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "could not fetch events" },
      {
        status: 500,
      }
    );
  } else {
    const responseData = await response.json();
    return responseData.event;
  }
}
export default EventDetailPage;
export async function loader({ params }) {
  const eventId = params.eventId;
  return defer({
    event: await loadEvent(eventId),
    events: loadEvents(),
  });
}
export async function action({ params, request }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
    {
      method: request.method,
    }
  );
  if (!response.ok) {
    throw json(
      { message: "could not delete event" },
      {
        status: 500,
      }
    );
  } else {
    return redirect("/events");
  }
}
