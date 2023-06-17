import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
    name: 'liststate',
    initialState: {
        list: []
    },
    reducers: {
        addToList(state, action) {
            state.list.push(action.payload);
            console.log("action called", action);
        },
        addToCard(state, action) {
            state.list.forEach((item) => {
                if (item.id === action.payload.parentId) {
                    if (Object.keys(item).includes('cards')) {
                        item.cards.push(action.payload)
                    }
                    else {
                        item.cards = [action.payload]
                    }
                }
            })

            console.log(action)
        }
    }
});

export const { addToList, addToCard } = listSlice.actions;
export default listSlice.reducer;