import { UPDATE_FNAME, UPDATE_BOTH_FL_NAME, UPDATE_LNAME } from "./actionTypes";


export const updateFname =(newFname) => ({
    type: UPDATE_FNAME,
    payload: newFname
})


export const updateLname =(newLname) => ({
    type: UPDATE_LNAME,
    payload: newLname
})


export const updateBothFlname =(newFname, newLname) => ({
    type: UPDATE_BOTH_FL_NAME,
    payload: {
        fname: newFname,
        lname: newLname
    }
})