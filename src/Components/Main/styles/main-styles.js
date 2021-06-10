import styled from "styled-components"
import { Link as ReachRouterLink } from 'react-router-dom';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3em;

`;

export const Title = styled.h1`
    font-size: 35px;
    line-height: 1.1;
    margin: 1em;
    
    @media (max-width: 600px) {
        font-size: 20px;
    }
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 3em;
`;

export const Button = styled.button`
    display: inline-block;
    cursor: pointer;
     padding: .5em 1.5em;
     border: none;
     border-radius: 25px;
     text-transform: uppercase;
     font-weight: 700;
     background: #3399ff;
     color: #fff;
     text-decoration: none;
     margin: 1em;
    
    &:hover {
        background: #63b1ff;
    }
    &:disabled {
        background: red;
        opacity: .7;
        cursor: not-allowed;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 1em;
`;

export const Link = styled(ReachRouterLink)`
    color: #303030;
    text-decoration: none;
    text-align: center;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #737373;
    padding: 1em;
    margin: 1em;
    height: 300px;
`;

export const CardTitle = styled.h2`
    font-size: 25px;
    text-transform: capitalize;

    @media (max-width: 600px) {
        font-size: 20px
    }
`;

export const CardImage = styled.img`
    max-width: 100%;
    height: 250px;
    object-fit: cover;
`;

export const CardText = styled.p`
    font-size: 16px;

    @media (max-width: 600px) {
        font-size: 14px
    }
`;

