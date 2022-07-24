import styled from "styled-components"
import { GreenSmile, PinkSmile } from "../Smiles";
import SocialList from "../SocialList";
// type TProps = {
//     children: ReactNode
// }
const StyledDiv = styled.div`
    background-color: #D8D8D8;
    padding-top:70px;
    padding-bottom: 100px;
    padding-left: 24%;
    width:100vw;
    position:relative;
    overflow: hidden;
`
const Footer = () => {
    return (
        <StyledDiv>
            <GreenSmile />
            <PinkSmile />
            <SocialList />
        </StyledDiv>
    )
}

export default Footer;