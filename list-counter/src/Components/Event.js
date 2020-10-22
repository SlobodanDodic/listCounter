import React, { useContext } from "react";
import { EventContext } from "./EventContext";
import Moment from "react-moment";
import "./Event.css";

import { MDBContainer, MDBRow, MDBCol, MDBProgress, MDBIcon } from "mdbreact";

export const Event = ({ event }) => {
  const { deleteEvent, editEvent } = useContext(EventContext);

  const dateToday = Date.now();
  const dateOfEvent = Date.parse(event.date);
  const diffDays = Math.ceil((dateOfEvent - dateToday) / (1000 * 60 * 60 * 24));

  let audio = new Audio("/sound.mp3");

  const start = () => {
    audio.play();
  };

  /*   let scores = [diffDays];
  scores.sort((a, b) => a - b);

  console.log(scores); */

  /*   const diffProgressBar = 100 -diffDays;
  console.log(diffProgressBar);

  const oneDay = 86400000;
  console.log(dateOfEvent + oneDay); */

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol id="col-edit" size="1">
          <MDBIcon
            icon="pen-nib"
            className="fa-1x blue-text"
            onClick={() => editEvent(event)}
          />
        </MDBCol>

        <MDBCol
          format={"dd MMMM yyyy"}
          id={
            diffDays > 5
              ? "col-date"
              : diffDays < 0
              ? "col-date-ago"
              : "col-date-red"
          }
          size="3"
        >
          <Moment format="DD MMM YY">{event.date}</Moment>
        </MDBCol>

        {diffDays === 0 ? (
          <MDBCol id="col-progress" size="4">
            It's((
            <MDBIcon onClick={start} className="fa-lg red-text" icon="bell" />
            ))time!
          </MDBCol>
        ) : diffDays < 0 ? (
          <MDBCol id="col-progress-ago" size="4">
            It's too late now...
          </MDBCol>
        ) : (
          <MDBCol id="col-progress" size="4">
            <MDBProgress
              //striped
              animated
              value={diffDays > 100 ? 100 : diffDays < 1 ? 0 : diffDays}
              height="90%"
            ></MDBProgress>
          </MDBCol>
        )}

        <MDBCol
          size="3"
          id={
            diffDays > 5
              ? "col-days"
              : diffDays < 0
              ? "col-days-ago"
              : "col-days-red"
          }
        >
          {diffDays === 0
            ? "TODAY!"
            : diffDays === 1
            ? diffDays + " day"
            : diffDays === -1
            ? Math.abs(diffDays) + " day ago"
            : diffDays < 0
            ? Math.abs(diffDays) + " days ago"
            : diffDays + " days"}
        </MDBCol>

        <MDBCol id="col-trash" size="1">
          <MDBIcon
            icon="trash"
            className="fa-1x red-text"
            onClick={() => deleteEvent(event.id)}
          />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol id="col-body">{event.name}</MDBCol>
      </MDBRow>
      <br />
    </MDBContainer>
  );
};
