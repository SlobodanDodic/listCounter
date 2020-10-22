import React, { useState, useContext } from "react";
import { EventContext } from "./EventContext";
//import { v4 as uuidv4 } from "uuid";

import "./AddEvent.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol as form,
  MDBInput,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

export const AddEvent = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const { addEvent } = useContext(EventContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: Date.now(),
      name,
      date,
    };

    const dateOfNewEvent = Date.parse(newEvent.date);
    console.log(dateOfNewEvent);

    addEvent(newEvent);

    setName("");
    setDate("");
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCardBody>
          <form onSubmit={onSubmit} autoComplete="off" id="form">
            <div>
              <MDBInput
                id="event-input"
                hint="Enter the event"
                icon="align-right"
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <MDBInput
                id="datepicker"
                hint="Enter the date"
                format="dd MMMM yyyy"
                icon="clock"
                type="date"
                name="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className=" add-div text-center pb-1">
              <MDBBtn
                className="morpheus-den-gradient"
                type="submit"
                name="submit"
              >
                Add Event
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBRow>
    </MDBContainer>
  );
};
