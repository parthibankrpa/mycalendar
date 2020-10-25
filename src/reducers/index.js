import {combineReducers} from 'redux';
import { SELECT_ALL_BUILDINGS, SELECTED_BUILDING } from '../constants/actions';

const selectAllBuildings = () => {
  return [
    { id: 1, name: "Building 8" },
    { id: 2, name: "Building 4" },
    { id: 3, name: "Building 6" },
  ];
};

const selectedBuilding = (seleted = null, action)  => {
    if(action.type === SELECTED_BUILDING){
        return action.payload;
    }
    return seleted;
}

export default combineReducers({
    buildings:selectAllBuildings,
    selectedBuilding:selectedBuilding
});