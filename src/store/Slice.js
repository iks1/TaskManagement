import {createSlice} from '@reduxjs/toolkit';

const listSlice = createSlice({
    name:'liststate',
    initialState:{
        list:[]
    },
    reducers:{
        addToList(state,action){
           // state.list.push(action.payload);
           console.log("action called",action);
        }
    }
});

export const {addToList} = listSlice.actions;
export default listSlice.reducer;