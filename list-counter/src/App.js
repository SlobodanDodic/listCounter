import React from "react";
import { AddEvent } from "./Components/AddEvent";
import { EventList } from "./Components/EventList";
import { EventProvider } from "./Components/EventContext";

import "./index.css";

function App() {
  return (
    <EventProvider>
      <div className="App">
        <AddEvent />
        <br />
        <EventList />
      </div>
    </EventProvider>
  );
}

export default App;
