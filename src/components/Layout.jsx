import { Outlet } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import Footer from "./Footer"
import styled from "styled-components"

const Div = styled.div`
    min-height: 100vh;
    position: relative;
`

const Main = styled.main`
    margin: 4em auto 4em auto;
    padding-bottom: 9em;

    @media (min-width: 780px) {
        margin: 6em auto 8em auto;
    }
`

const Layout = () => {
    return (
        <Div>
            <Navbar />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Div>
    )
}

export default Layout
