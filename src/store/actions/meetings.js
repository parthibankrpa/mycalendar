
import { GET_ALL_BUILDINGS, GET_ALL_BUILDINGS_ERROR } from "../types";
import smartmeetings from '../../api/smartmeeting';


export const getAllBuildings = () => async dispatch => {
  try {
    const res = await smartmeetings.post("", {
      query: `{
        Buildings { 
          id 
          name 
          meetingRooms{
            name 
            meetings{
              title
              date 
              startTime 
              endTime
            }
          }
        }
      }`
    });

    dispatch({
      type: GET_ALL_BUILDINGS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_BUILDINGS_ERROR,
      payload: console.log(e)
    });
  }
};
