export default (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    case "ADD":
      return {
        ...state,
        events: [action.payload, ...state.events],
      };
    case "GET": {
      return action.payload;
    }
    /*     case "EDIT":
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      }; */
    default:
      return state;
  }
};
