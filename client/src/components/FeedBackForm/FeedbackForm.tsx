import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { feedbacksOperations, feedBacksSelectors } from "../../redux/feedbacks";
import feedbackSlice from "../../redux/feedbacks/slice";
import store from "../../redux/store";
import styled from "styled-components";
const StyledWrapper = styled.div`
    max-width:560px;
    min-width:290px;
    width:100%;
    position: relative;
    z-index:2;
`

const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    width:100%;
`
const StyledInput = styled.input`
    padding-left:46px;
    padding-top:30px;
    padding-bottom:30px;
    margin-bottom:8px;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    color: #2D2D2D;
`

const StyledTextArea = styled.textarea`
    padding-left:46px;
    padding-top:30px;
    height: 189px;
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    margin-bottom: 23px;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    color: #2D2D2D;
`
const StyledButton = styled.button`
display:flex;
align-items:center;
justify-content:center;
width: 218px;
height: 73px;
background: #FAD34F;
border-radius: 500px;
border:none;
cursor:pointer;
transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); 
&:hover,
&:focus {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 18px;

/* identical to box height */

color: #FFFFFF;
`
const StyledHeader = styled.h1`
    font-family: 'Open Sans' ;
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 40px;
    line-height: 130%;
    color: #3E3E3E;
`
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
            <StyledWrapper>
                <StyledHeader>Reach out to us!</StyledHeader>
                <StyledForm onSubmit={onSubmitHandler}>
                    <StyledInput
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
                    <StyledInput
                        type="email"
                        name="email"
                        placeholder="Your email*"
                        value={email}
                        onChange={(e) => dispatch(feedbackSlice.actions.emailReducer(e.target.value))}
                        required
                    />
                    <StyledTextArea
                        placeholder="Your message*"
                        name="message"
                        value={message}
                        onChange={(e) => dispatch(feedbackSlice.actions.messageReducer(e.target.value))}
                        required
                    />
                    <StyledButton
                        type='submit'
                        disabled={!isFormFilled}
                    > Send Message
                    </StyledButton>
                </StyledForm>
            </StyledWrapper>
        </>
    )
}

export default FeedBackForm;
