export default (state = {list:[]}, action) => {
  switch (action.type) {
    case 'FETCH_LIST':{
        return {
          list : action.payload.data
        };
      }

    default:
      return state;
  }
};
