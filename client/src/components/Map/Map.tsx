import styled from "styled-components"
import map from './map.png';

const StyledWrapper = styled.div`
    position:absolute;
    top:-52px;
    right:-350px;
    width:976px;
    height:976px;
`
const StyledImg = styled.img`
    width:100%;
    height:100%;
    border-radius:50%;
`
const Map = () => {
    return (
        <StyledWrapper>
            <StyledImg src={map} alt="Our adress" />
        </StyledWrapper>
    )
}

export default Map;