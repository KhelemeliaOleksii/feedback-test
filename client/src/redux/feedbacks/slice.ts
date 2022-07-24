import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import feedbacksOperations from "./operations";

interface IFeedbackState {
    name: string
    email: string
    message: string
}

const initialState: IFeedbackState = {
    name: '',
    email: '',
    message: '',
}

const feedbackSlice = createSlice({
    name: 'feedbacks',
    initialState,
    reducers: {
        nameReducer: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        emailReducer: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        messageReducer: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
    },
    extraReducers: {
        [feedbacksOperations.postFeedback.fulfilled.type](state, action) {
            console.log(action);
            ;
        },
        [feedbacksOperations.postFeedback.rejected.type](state, action) {
            console.log(action);
        },
        [feedbacksOperations.postFeedback.pending.type](state, action) {
            console.log(action);
        }
    }
})

export default feedbackSlice;