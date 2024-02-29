import {
  Link,
  redirect,
  useNavigate,
  useParams,
  useSubmit,
  useNavigation,
} from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
export default function EditEvent() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const params = useParams();
  const { state } = useNavigation();
  function handleSubmit(formData) {
    // mutate({ id: params.id, event: formData });

    // navigate("../");
    submit(formData, { method: "PUT" });
  }

  function handleClose() {
    navigate("../");
  }
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { eventId: params.id }],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
    staleTime: 10000,
  });
  let content;
  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }
  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to Load Events"
          message={error.info?.message || "Failed to Load event."}
        />
        <div className="form-actions">
          <Link className="button" to="../">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ? (
          <p>SendingData</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }
  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     await queryClient.cancelQueries({
  //       queryKey: ["events", { eventId: params.id }],
  //     });
  //     const previousData = queryClient.getQueryData([
  //       "events",
  //       { eventId: params.id },
  //     ]);
  //     queryClient.setQueryData(["events", { eventId: params.id }], data.event);
  //     return { previousEvent: previousData };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(
  //       ["events", { eventId: params.id }],
  //       context.previousEvent
  //     );
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(["events", { eventId: params.id }]);
  //   },
  // });
  return <Modal onClose={handleClose}>{content}</Modal>;
}
export function loader({ params }) {
  queryClient.fetchQuery({
    queryKey: ["events", { eventId: params.id }],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
  });
  return null;
}
export async function action({ request, params }) {
  const formData = await request.formData();
  const updateEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updateEventData });
  await queryClient.invalidateQueries(["events"], { eventId: params.id });
  return redirect("../");
}
