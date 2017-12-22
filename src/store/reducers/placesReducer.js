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
        places: state.places.concat(action.payload)
      }
    default:
      return state;
  }
}

export default reducer;