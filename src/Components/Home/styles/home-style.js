import styled from "styled-components"
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3em;
`;

export const Image = styled.img`
    background: #fff;
    max-width: 100%;
    object-fit: cover;
    max-height: 40vh;
    border-radius: 50%;

`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;
    margin: 1em auto 0;
    
    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const Text = styled.p`
     font-size: 25px;
    line-height: 1.1;
    margin-bottom: 8px;
    
    @media (max-width: 600px) {
        font-size: 16px;
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
     color: #fff;
     text-decoration: none;
     margin: 2em;
    
    &:hover {
        background: #ff6666;
    }
`;

export const Anchor = styled.a`
     display: inline-block;
     border: none;
     color: #3abaa7;
     text-decoration: none;
     margin-left: .5em;
    
    &:hover {
        color: #ff6666;
    }
`;