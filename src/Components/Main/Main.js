import React from 'react'
import { Container, Title, Wrap, Button, Wrapper, Link, Card, CardTitle, CardImage, CardText } from "./styles/main-styles"


export default function Main({ children, ...restProps }) {


    return (
        <Container {...restProps}>
           {children}
        </Container>
    )
}

Main.Container = function MainContainer ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Main.Title = function MainTitle ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Main.Wrap = function MainWrap ({ children, ...restProps }) {
    return <Wrap {...restProps}>{children}</Wrap>
}

Main.Button = function MainButton ({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

Main.Wrapper = function MainWrapper ({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Main.Link = function MainLink ({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Main.Card = function MainCard ({ children, ...restProps }) {
    return <Card {...restProps}>{children}</Card>
}

Main.CardTitle = function MainCardTitle ({ children, ...restProps }) {
    return <CardTitle {...restProps}>{children}</CardTitle>
}

Main.CardImage = function MainCardImage ({ ...restProps }) {
    return <CardImage {...restProps}/>
}

Main.CardText = function MainCardText ({ children, ...restProps }) {
    return <CardText {...restProps}>{children}</CardText>
}



