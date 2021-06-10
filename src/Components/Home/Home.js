import React from 'react'
import { Container, Image, Title, Text, Link, Anchor} from "./styles/home-style"
import Img from "../../Images/Kasper_i_ja.jpg"


export default function Home({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Home.Container = function HomeContainer ({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Home.Image = function HomeImage ({...restProps}) {
    return <Image src={Img} {...restProps} />
}

Home.Title = function HomeTitle ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Home.Text = function HomeText ({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Home.Link = function HomeLink ({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Home.Anchor = function HomeAnchor ({ children, ...restProps }) {
    return <Anchor {...restProps}>{children}</Anchor>
}

