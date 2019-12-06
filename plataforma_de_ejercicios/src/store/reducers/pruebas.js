const initialState = {
  email: "",
  name: "",
  phone: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return action.inputs;
    default:
      return state;
  }
};
