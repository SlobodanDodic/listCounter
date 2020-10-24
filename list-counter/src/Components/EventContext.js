import React, { useReducer, createContext, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  events: [],
};

export const EventContext = createContext(initialState);

export const EventProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const getEvents = localStorage.getItem("data");
    dispatch({ type: "GET", payload: JSON.parse(getEvents) });
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state), [state]);
  });

  function deleteEvent(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  function addEvent(event) {
    dispatch({
      type: "ADD",
      payload: event,
    });
  }

  /*   function editEvent(id) {
    dispatch({
      type: "EDIT",
      payload: id,
    });
  } */

  /*   function editEvent(id) {
    const editedEvent = prompt("Make a change");
    const { events } = state;
    events.filter((event) => {
      if (event.id === id + 1) {
        event.name = editedEvent;
      }
      return event;
    });
    dispatch({
      type: "EDIT",
      payload: editedEvent,
    });
    console.log(editedEvent);
  } */

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        deleteEvent,
        addEvent,
        /*         editEvent, */
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
