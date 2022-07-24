import { createSelector } from "@reduxjs/toolkit";
interface IFeedbackState {
    name: string
    email: string
    message: string
}

const getFeedback = ({ feedbacks }: { feedbacks: IFeedbackState }) => feedbacks

const getName = ({ feedbacks }: { feedbacks: IFeedbackState }) => feedbacks.name

const getEmail = ({ feedbacks }: { feedbacks: IFeedbackState }) => feedbacks.email

const getMessage = ({ feedbacks }: { feedbacks: IFeedbackState }) => feedbacks.message

const feedBacksSelectors = {
    getFeedback,
    getName,
    getEmail,
    getMessage
}

export default feedBacksSelectors;