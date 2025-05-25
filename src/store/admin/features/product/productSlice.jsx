import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    productImages: [...Array(4).fill(null)],
    colors: [],
    size: [],
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleAdd: (state, { payload }) => {
      if (payload.name == "productImages") {
        state.value.productImages[payload.index] = payload.data;
      } else if (payload.name == "colors") {
        if (!state.value.colors.includes(payload.data)) {
          state.value.colors.push(payload.data);
        }
      } else if (payload.name == "size") {
        if (!state.value.size.includes(payload.data)) {
          state.value.size.push(payload.data);
        }
      }
    },

    handleRemove: (state, { payload }) => {
      if (payload.name == "colors") {
        const rest_data = state.value.colors.filter(
          (color) => color != payload.data
        );
        state.value.colors = [...rest_data];
      } else if (payload.name == "size") {
        const rest_data = state.value.size.filter(
          (size) => size != payload.data
        );
        state.value.size = [...rest_data];
      }
    },
    handleProductImages: (state, { payload }) => {
      state.value.productImages[payload.index] = payload.data;
    },
    handleDeleteProductImage: (state, { payload }) => {
      state.value.productImages[payload] = null;
    },
    handleSetProductImages: (state, { payload }) => {
      state.value.productImages = payload;
    },
    handleSetUpdatedProduct: (
      state,
      { payload: { keyFeatures, productImages } }
    ) => {
      (state.value.keyFeatures = keyFeatures),
        (state.value.productImages = productImages);
    },
    handleClearProduct: (state) => {
      (state.value.keyFeatures = []),
        (state.value.productImages = [...Array(4).fill(null)]);
    },
  },
});

export const {
  handleAdd,
  handleRemove,
  handleProductImages,
  handleDeleteProductImage,
  handleSetProductImages,
  handleClearProduct,
  handleSetUpdatedProduct,
} = productSlice.actions;

export default productSlice.reducer;
