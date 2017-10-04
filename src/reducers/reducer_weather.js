import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  //console.log('Action received: ', action);
  //action.payload.data
  switch (action.type) {
    case FETCH_WEATHER:
      //note: not using state.push because we must not mutate our state in reducers. 
      //state.concat would be acceptable because that creates a new state
      return [ action.payload.data, ...state ]; // [city, city, city] NOT [[city], city city]
  }

  return state;
}
