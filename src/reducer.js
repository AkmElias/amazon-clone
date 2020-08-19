export const initialState = {
  bascket: [
    {
      id: "12311214",
      title:
        "SCOSCHE MAGDMB MagicMount Universal Magnetic Mount Holder for Mobile Devices In Frustration Free Packaging, Black",
      price: 155.5,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51Ybp5nJHbL._AC_UY218_.jpg",
    },
  ],
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
