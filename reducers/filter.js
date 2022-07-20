const filterReducer = (state = '-1', action) => {
  switch(action.type){

    case 'SETFILTER':
      return action.payload;
      
    default:
      return state;
  }
};
export default filterReducer;