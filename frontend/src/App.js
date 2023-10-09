

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetail, { loader as eventDetailLoader, action as deleteEventAction} from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";
import {action as manipulateEventAction} from './components/EventForm'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            path: "",
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path:':eventId',
            id:'event-detail',
            loader:eventDetailLoader,
            action:deleteEventAction,
            children:[
              {
                path: "",
                element: <EventDetail />,
                
              },
              { path: "edit", element: <EditEvent />,action:manipulateEventAction },
            ]
          },
          
          { path: "new", element: <NewEvent />,action: manipulateEventAction},
          
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
