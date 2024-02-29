import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import MainNavigation from "./components/MainNavigation";
import ErrorPage from "./pages/ErrorPage";
import EventsNavigation from "./components/EventsNavigation";
import { loader as eventLoader } from "./pages/EventsPage";
import RootLayout from "./pages/Root";
import { loader as eventDetailLoader } from "./pages/EventDetailPage";
import { action as manipulateEventaction } from "./components/EventForm";
import { action as deleteEventAction } from "./pages/EventDetailPage";

import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
const rootrouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsNavigation />,
        children: [
          { index: true, element: <EventsPage />, loader: eventLoader },
          {
            path: ":eventId",
            loader: eventDetailLoader,
            id: "event-detail",
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventaction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventaction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return <RouterProvider router={rootrouter} />;
}

export default App;
