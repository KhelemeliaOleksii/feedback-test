import { useState } from "react";

type TInput = {
    name: string,
    value: string,
}
const FeedBackForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const reset = () => {
        setName('');
        setEmail('');
        setMessage('');
    }


    const onChangeHandler = ({ name, value }: TInput) => {
        console.log("name", name, " value", value);

    }

    const onSubmitHandler = () => {
        console.log("name", name);
        console.log("email", email);
        console.log("message", message);
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
                    onChange={onChangeHandler}
                    autoFocus
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your email*"
                    value={email}
                    onChange={onChangeHandler}
                    required
                />
                <textarea
                    placeholder="Your message*"
                    name="message"
                    value={message}
                    onChange={onChangeHandler}
                    required
                />
                <input
                    type='submit'
                    value='Send Message'
                />
            </form>
        </>
    )
}

export default FeedBackForm;