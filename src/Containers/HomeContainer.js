import React from 'react'
import Home from "../Components/Home/Home"
import { FaLinkedin, FaGithub } from "react-icons/fa";



export default function HomeContainer() {
    return (
       <Home.Container>
            <Home.Image />
            <Home.Title>Tin Petrović</Home.Title>
            <Home.Text>This is my Landing Page</Home.Text>
            <Home.Link to="/pokemon">To Main Page</Home.Link>
            <Home.Text>Github:<Home.Anchor href="https://github.com/tinpetrovic"><FaLinkedin/></Home.Anchor></Home.Text>
            <Home.Text>LinkedIn:<Home.Anchor href="https://www.linkedin.com/in/tin-petrović-1b2287211"><FaGithub/></Home.Anchor></Home.Text>
       </Home.Container>
    )
}
