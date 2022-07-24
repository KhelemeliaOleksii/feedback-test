import { Component } from "react";
import styled from "styled-components"
// import Facebook from '../../images/original/LinkedIn.svg';
const StyledLi = styled.li`
    display: block;
    width:30px;
    height: 30px;
    // border-radius: 50%;
    // border: none;
    // margin:0;
    // padding:0;
    &:not(:last-of-type){
        margin-right:20px;
    }
`
const StuledA = styled.a`
    height:100%;
    width:100%;
    border-radius:50%;
    // background-color: green;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: background-color 300ms
  cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        background-color:#FAD34F;
    }
`
const StyledSvg = styled.svg`
    fill: #000000;
`

interface ISocial {
    name: string;
    buildSVG({ width, height, fill }: {
        width?: string | undefined;
        height?: string | undefined;
        fill?: string | undefined;
    }): JSX.Element;
}
const url = 'https://zenbit.tech/';
const SocialLink = ({ social }: { social: ISocial }) => {
    return (
        <StyledLi>
            <StuledA href={url}>
                {social.buildSVG({})}
            </StuledA>
        </StyledLi>
    )
}

export default SocialLink;