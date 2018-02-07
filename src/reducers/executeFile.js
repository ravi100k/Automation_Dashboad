export default (state = {data:null,load:false}, action) => {
  switch (action.type) {
    case 'EXECUTE_FILE':{
      console.log(action.payload);
        return {
          data : action.payload.data,
          load:true
        };
      }

    default:
      return state;
  }
};
