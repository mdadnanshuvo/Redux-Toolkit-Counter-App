import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/CounterApp/counterSlice";


const store = configureStore({
    reducer : {
        counter : counterReducer,
    },
});

export default store;