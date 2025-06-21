import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js"; // Import the cartSlice reducer

const appStore = configureStore({

   reducer: {
     cart : cartSlice, // Add the cartSlice reducer to the store
   },
})

export default appStore;