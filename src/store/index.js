import { configureStore } from "@reduxjs/toolkit";
import listslice from './Slice';

const store = configureStore({
    reducer: {
        liststate: listslice
    }
});

export default store;