const initialState = {
    firstName:'Srini',
    lastName: 'Ganga'
}

function reducer2 (state = initialState, action) {
    console.log('reducer2 just received a notification' +action.type);
    return state;
}

export default reducer2;
