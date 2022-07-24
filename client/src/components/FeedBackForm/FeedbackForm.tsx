import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { feedbacksOperations, feedBacksSelectors } from "../../redux/feedbacks";
import feedbackSlice from "../../redux/feedbacks/slice";
import store from "../../redux/store";

const FeedBackForm = () => {
    const name = useSelector(feedBacksSelectors.getName);
    const email = useSelector(feedBacksSelectors.getEmail);
    const message = useSelector(feedBacksSelectors.getMessage);
    const body = useSelector(feedBacksSelectors.getFeedback);
    const dispatch = useDispatch();

    const isFormFilled = (name.trim() !== '') && (email.trim() !== '') && (message.trim() !== '');

    const reset = () => {
        dispatch(feedbackSlice.actions.nameReducer(''));
        dispatch(feedbackSlice.actions.emailReducer(''));
        dispatch(feedbackSlice.actions.messageReducer(''));
    }
    const onSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        store.dispatch(feedbacksOperations.postFeedback(body));
        reset();
    }

    return (
        <>
            <h1>Reach out to us!</h1>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name*"
                    value={name}
                    onChange={(e) => dispatch(feedbackSlice.actions.nameReducer(e.target.value))}
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    autoFocus
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your email*"
                    value={email}
                    onChange={(e) => dispatch(feedbackSlice.actions.emailReducer(e.target.value))}
                    required
                />
                <textarea
                    placeholder="Your message*"
                    name="message"
                    value={message}
                    onChange={(e) => dispatch(feedbackSlice.actions.messageReducer(e.target.value))}
                    required
                />
                <button
                    type='submit'
                    disabled={!isFormFilled}
                > Send Message
                </button>
            </form>
        </>
    )
}

export default FeedBackForm;
