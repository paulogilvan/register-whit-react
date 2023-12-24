import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 132px;
    border-radius: 14px;
    background: ${props => props.isBack ? 'transparent' : 'var(--Templates-5-Color-1, rgba(0, 0, 0, 0.80))'};
    color: #FFFFFF;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border: ${props => props.isBack ? '1px solid #FFFFFF' : 'none'};
    cursor: pointer;    

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.5;
    }

    img {
        ${props => props.isBack && 'transform: rotatey(180deg)'};
    }
`; 