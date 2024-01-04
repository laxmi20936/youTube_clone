import {createSlice, current} from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name:"search",
    initialState:{
        data:{}
    },
    reducers:{
        addSearchSuggestion: (state, action) => {
          state.data = {...state.data, ...action.payload}
          console.log(current(state))
        },
    }
})
export const {addSearchSuggestion} = searchSlice.actions
export default searchSlice.reducer