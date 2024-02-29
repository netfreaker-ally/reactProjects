import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isdeleting, setIsdeleting] = useState(false);
  const event = useParams();
  const id = event.id;
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", { eventId: id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });
  const {
    mutate,
    isError: isErrorDeleting,
    error: isErrorDeletingMessage,
    isPending,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["event"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });
  function handledeleting() {
    setIsdeleting(true);
  }
  function handleCancelDeleting() {
    setIsdeleting(false);
  }
  function handleDelete() {
    mutate({ id });
    console.log("in handleSubmit");
  }
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isLoading && <p>Loading........</p>}

      {isdeleting && (
        <Modal onClose={handleCancelDeleting}>
          {isPending && <p>Please wait while we delete</p>}

          <div className="form-actions">
            <h1>Are You Sure?</h1>
            <p>If you delete this event is cant be undone</p>
            <button onClick={handleCancelDeleting}> Cancel</button>
            <button onClick={handleDelete}>Confirm Delete</button>
          </div>
          {isErrorDeleting && (
            <ErrorBlock
              title="Error while Deleting"
              message={
                isErrorDeletingMessage.info?.message || "Error while Deleting"
              }
            />
          )}
        </Modal>
      )}
      {isError && (
        <ErrorBlock
          title="Error while Fetching details of id"
          message={
            error.info?.message || "Got error while fetching data of this event"
          }
        />
      )}

      {data && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handledeleting}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>{data.date}</time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
