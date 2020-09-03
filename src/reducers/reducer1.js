import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../actions/actionTypes";

const initialState = 0;

function reducer1 (state = initialState, action) {
   console.log('reducer1 just received a notification' +action.type);
   
   let newStateToReturn = state;
   switch(action.type){
      case INCREMENT_COUNTER:
         return newStateToReturn+1;
      case DECREMENT_COUNTER:
         return newStateToReturn-1;
      default:
         return newStateToReturn;
   }
}

export default reducer1;
