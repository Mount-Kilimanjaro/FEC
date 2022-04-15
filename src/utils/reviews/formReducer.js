
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
};

module.exports = {formReducer:formReducer};

