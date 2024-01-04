import {configureStore} from '@reduxjs/toolkit';
import toggleReducer from './toggleMenuSlice'
import searchReducer from './searchSlice'

const store = configureStore({
    reducer:{
        toggle: toggleReducer,  
        searchCache:searchReducer,
    }
})

export default store