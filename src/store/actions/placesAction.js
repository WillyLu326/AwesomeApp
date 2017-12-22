import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSELECT_PLACE } from './actionTypes';

const addPlace = (place) => {
  return {
    type: ADD_PLACE,
    payload: place
  };
};

const deletePlace = (placeKey) => {
  return {
    type: DELETE_PLACE,
    payload: placeKey
  };
};