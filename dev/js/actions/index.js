export const selectUser = (user) => { // this function is a action creator
    console.table(user);  
    return {
        type:'USER_SELECTED',
        payload: user
    };
}