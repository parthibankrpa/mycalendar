  
import {GET_ALL_BUILDINGS} from '../types'

const initialState = {
        buildings:{
            buildings:[],
            loading:true
        }
    
   
}

export default function(state = initialState, action){
   
    switch(action.type){

        case GET_ALL_BUILDINGS:
        return {
            ...state,
            buildings:{
                buildings:action.payload.data.Buildings,
                loading:false
            }

        }
        default: return state
    }

}
  