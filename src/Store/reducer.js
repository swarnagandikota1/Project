import { FETCH_ITEMS_FAILURE, FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS } from "./action";


const initialState = {
  loading: false,
  items: [],
  error: null,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ITEMS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_ITEMS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default itemsReducer;
