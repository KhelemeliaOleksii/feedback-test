import { ReactNode } from "react"
import styled from "styled-components"
import FeedBackForm from "../FeedBackForm"

const StyledDiv = styled.div`
    background-color: rgba(0,0,0,0.1);
`
const Main = () => {
    return (
        <StyledDiv>
            <FeedBackForm />
        </StyledDiv>
    )
}

export default Main;