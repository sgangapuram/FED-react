import { UPDATE_FNAME, UPDATE_LNAME, UPDATE_BOTH_FL_NAME } from "../actions/actionTypes";

const initialState = {
    fname:'Srini',
    lname: 'Ganga'
}

function reducer2(state= initialState, action){
    console.log('reducer2 just received notification',action.type, action.payload);

let newState = {...state};

switch(action.type){
    case UPDATE_FNAME:
        newState.fname = action.payload;
        break;
    case UPDATE_LNAME:
        newState.lname = action.payload;
        break;
    case UPDATE_BOTH_FL_NAME:
        newState.fname = action.payload.fname;
        newState.lname = action.payload.lname;
        break;
    default:
        newState=state;
    }
    return newState;
}
export default reducer2;
