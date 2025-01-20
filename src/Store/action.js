// actions.js
export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const fetchItems = (regionId) => async (dispatch) => {
  dispatch({ type: FETCH_ITEMS_REQUEST });

  try {
    const response = await fetch(`https://api.carbonintensity.org.uk/regional/regionid/${regionId}`);
    const data = await response.json();
    console.log(data.data[0].data[0].intensity.forecast,"data");

    dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data.data[0] });
  } catch (error) {
    console.log(error,"errorerror");
    dispatch({ type: FETCH_ITEMS_FAILURE, payload: error.message });
  }
};
