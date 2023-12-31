import styled from "styled-components";
import Background from "../../assets/bg-image2.svg"


export const Container = styled.div`
    background-image: url("${Background}");
    background-size: cover;    
    display: flex;
    flex-direction: column;
    align-items: center;    
    gap: 40px;
    height: 100%;
    /* min-height: 100vh; */
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center; border-radius: 14px;
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 342px;
    height: 58px;
    margin-top: 20px;
    border: none;
    outline: none;

    p {
        color: #FFFFFF;
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        line-height: 28px;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;