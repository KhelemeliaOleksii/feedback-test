import { feedbacksSlice } from "./feedbacks";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    feedbacks: feedbacksSlice.reducer
})

export default rootReducer;