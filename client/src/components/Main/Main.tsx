import { ReactNode } from "react"
import styled from "styled-components"
import FeedBackForm from "../FeedBackForm"
import Map from "../Map/Map"
import { PinkCentralSmile, YellowCentral, YellowUpSmile } from "../Smiles"

const StyledDiv = styled.div`
    // background-color: rgba(0,0,0,0.1);
    padding-left: 10%;
    padding-right: 10%;
    padding-top:175px;
    padding-bottom:175px;
    width:100vw;
    posittion:relative;
`
const Main = () => {
    return (
        <StyledDiv>
            <Map />
            <YellowUpSmile />
            <PinkCentralSmile />
            <YellowCentral />
            <FeedBackForm />
        </StyledDiv>
    )
}

export default Main;