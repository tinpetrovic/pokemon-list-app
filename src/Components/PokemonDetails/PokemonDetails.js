import React from 'react'
import { Container, Title, SubTitle, Button, Wrapper, Flex, Image, Text, Link } from "./styles/details-styles"

export default function PokemonDetails({ children, ...restProps }) {
    return (
        <Container {...restProps} >
            {children}
        </Container>
    )
}

PokemonDetails.Container = function PokemonDetailsContainer ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

PokemonDetails.Title = function PokemonDetailsTitle ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

PokemonDetails.SubTitle = function PokemonDetailsSubTitle ({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

PokemonDetails.Button = function PokemonDetailsButton ({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

PokemonDetails.Wrapper = function PokemonDetailsWrapper ({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

PokemonDetails.Flex = function PokemonDetailsFlex ({ children, ...restProps }) {
    return <Flex {...restProps}>{children}</Flex>
}

PokemonDetails.Image = function PokemonDetailsImage ({ ...restProps }) {
    return <Image {...restProps}/>
}

PokemonDetails.Text = function PokemonDetailsText ({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

PokemonDetails.Link = function PokemonDetailsLink ({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}
