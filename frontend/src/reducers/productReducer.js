import {
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        loadings: true,
        products: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loadings: false,
        products: action.payload.products,
        productsCount: action.payload.productCount,
      };
    case ALL_PRODUCT_FAIL:
      return {
        loadings: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
