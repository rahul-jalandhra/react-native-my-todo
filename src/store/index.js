import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers";


//Combine all reducers -->
const combinedReducer = combineReducers({
    todoData:todoReducer,
});

//Root reducer -->
const rootReducer = (state, action) => {
    
    //Reset State --> 
    if (action.type === 'userDetail/reset') {
         state=undefined
    };
    
    return combinedReducer(state, action);
};

//Configure store -->
export const store = configureStore({
    reducer: rootReducer,
});

