export default (state = {option:0}, action) => {
  switch (action.type) {
    case 'OPTION_CHANGE':{console.log("option changed")
      return {
        option: action.option
      };
    }

    default:
      return state;
  }
};
