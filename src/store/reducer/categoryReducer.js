import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice(
  {
    name: "category",
    initialState: {
      category: [
        {
              "id": 1,
              "name": "Camo Onesie",
              "slogan": "Blend in to your crowd",
              "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
              "category": "Jackets",
              "default_price": "140"
          },
        {
              "id": 2,
              "name": "Bright Future Sunglasses",
              "slogan": "You've got to wear shades",
              "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
              "category": "Accessories",
              "default_price": "69"
          },
        {
              "id": 3,
              "name": "Morning Joggers",
              "slogan": "Make yourself a morning person",
              "description": "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
              "category": "Pants",
              "default_price": "40"
          },
      ],
      currentItemId: null,
      currentItem: {
        id: "",
        campus: "",
        name: "",
        slogan: "",
        description: "",
        category: "",
        default_price: "",
        created_at: "",
        updated_at: "",
        features: [],
        style : [
          {
            photos:[{url:"",thumbnail_url:""}],
            skus:{}
          }
        ],
        related: []
      },
  },
    reducers: {
      setCategory: (state, {payload} ) => {
        state.category = payload;
      },
      setCurrentItem: (state, {payload}) => {
        state.currentItem = payload;
      },
      setCurrentId: (state, {payload}) => {
        state.currentItemId = payload;
      },
    },

  },
);

export const { setCategory , setCurrentItem, setCurrentId } = categorySlice.actions;
