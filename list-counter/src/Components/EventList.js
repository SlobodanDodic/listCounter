import React, { useContext } from "react";
import { EventContext } from "./EventContext";
import { Event } from "./Event";

//import "./EventList.css";

export const EventList = () => {
  const { events } = useContext(EventContext);

  return (
    <div>
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};
