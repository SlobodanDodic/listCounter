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

  function editEvent(event) {
    console.log(event.id);
    console.log(event.name);
    console.log(event.date);
  }

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        deleteEvent,
        addEvent,
        editEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
