import {configureStore} from '@reduxjs/toolkit';
import toggleReducer from './toggleMenuSlice'

const store = configureStore({
    reducer:{
        toggle: toggleReducer,  
    }
})

export default store