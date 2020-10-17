export const initialState = {
  bascket: [],
  user: null,
};

export const getBascketTotal = (bascket) =>
  bascket.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASCKET":
      console.log(action);
      // logic for adding item
      return {
        ...state,
        bascket: [...state.bascket, action.item],
      };
      break;
    case "EMPTY_BASCKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASCKET":
      // console.log(action.id);
      let newBascket = [...state.bascket];
      const index = state.bascket.findIndex(
        (bascketItem) => bascketItem.id === action.id
      );
      if (index >= 0) {
        newBascket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) is not in the list.`
        );
      }
      return { ...state, bascket: newBascket };
      break;
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return { ...state };
      break;
  }
}

export default reducer;
