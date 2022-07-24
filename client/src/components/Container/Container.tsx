import { ReactNode } from 'react';
import styled from 'styled-components';
type TProps = {
    children: ReactNode,
}
const StyledContainer = styled.div`
    max-width: 1440px;
    width:100vw;
    overflow: fidden;   
`
const Container = ({ children }: TProps) => {
    return (
        <StyledContainer className='container'>{children}</StyledContainer>
    )
}

export default Container;