import styled from "styled-components"
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
    background: #ff6666;
    color: #303030;
    padding: 2em;
    text-align: center;
    position: relative;

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
     position: absolute;
     top: .5em;
     left: .5em;
    
    &:hover {
        opacity: 0.85;
    }
`;