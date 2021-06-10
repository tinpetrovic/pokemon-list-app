import React from 'react'
import { Container, Title, Link } from "./styles/header-styles"

export default function Header({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Header.Container = function HeaderContainer ({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Title = function HeaderTitle ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Header.Link = function HeaderTitle ({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

