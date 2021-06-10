import styled from "styled-components"
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;

`;

export const Title = styled.h1`
    font-size: 35px;
    line-height: 1.1;
    margin: 0.3em;
    text-transform: capitalize;
    
    @media (max-width: 600px) {
        font-size: 20px;
    }
`;

export const SubTitle = styled.h3`
    font-size: 24px;
    line-height: 1.1;
    margin: 0;
    text-transform: capitalize;
    
    @media (max-width: 600px) {
        font-size: 16px;
    }
`;


export const Button = styled.button`
    display: inline-block;
    cursor: pointer;
     padding: .5em 1.5em;
     border: none;
     border-radius: 25px;
     text-transform: uppercase;
     font-weight: 700;
     background: #3abaa7;
     color: #fff;
     text-decoration: none;
     margin: 1em;
    
    &:hover {
        opacity: 0.7;
    }
    &:disabled {
        background: red;
        cursor: not-allowed;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    margin: 1em;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 1em;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: 250px;
    object-fit: cover;
`;

export const Text = styled.p`
    font-size: 16px;
    text-transform: capitalize;

    @media (max-width: 600px) {
        font-size: 14px
    }
`;

export const Link = styled(ReachRouterLink)`
     display: inline-block;
     padding: .5em 1.5em;
     border: none;
     border-radius: 25px;
     text-transform: uppercase;
     font-weight: 700;
     background: #3abaa7;
     color: #303030;
     text-decoration: none;
     margin: 1em;
    
    &:hover {
        opacity: 0.7;
    }
`;