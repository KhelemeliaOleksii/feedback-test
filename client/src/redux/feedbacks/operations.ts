import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";
interface IFeedback {
    name: string,
    email: string,
    message: string
}
const postFeedback = createAsyncThunk('feedback/add', async (credentials: IFeedback, { rejectWithValue }) => {
    try {
        console.log("Start send datas", credentials);
        const { data } = await axios.post('http://localhost:4000/api/feedbacks', credentials);
        console.log("data from post request", data);

        return data;
    } catch (error) {
        return rejectWithValue(error)
    }
})

const feedbacksOperations = {
    postFeedback
}

export default feedbacksOperations;