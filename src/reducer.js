/** @format */

export const initialState = {
  restaurants: [],
  error: false,
};

//selector

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_RESTAURANTS":
      return {
        ...state,
        restaurants: action.restaurants,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
