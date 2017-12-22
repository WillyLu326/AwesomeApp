import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSELECT_PLACE } from './actionTypes';

const addPlace = (placeName) => {
  return {
    type: ADD_PLACE,
    payload: placeName
  };
};