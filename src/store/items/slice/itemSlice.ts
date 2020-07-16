import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ItemState = {
  items: string[],
  itemsRequesting: boolean,
}

const initialState: ItemState = {
  items: [],
  itemsRequesting: true
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {

    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },

    updateRequestStatus: (state, action: PayloadAction<boolean>) => {
      state.itemsRequesting = action.payload;
    }

  }
});

export const {
  addItem,
  removeItem,
  updateRequestStatus
} = itemsSlice.actions;

export default itemsSlice.reducer;
