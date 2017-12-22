import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSELECT_PLACE } from './../actions/actionTypes';

const initState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.payload
        })
      }
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.key !== action.payload)
      }
    default:
      return state;
  }
}

export default reducer;