import React from "react"
import { Link } from "gatsby"

//styles
import { Wrapper, Nav, OverrideGlobalStyle } from "./MobileMenu.styles"

const MobileMenu = ({ menuOpen, items }) => (
    <>
        <OverrideGlobalStyle menuOpen={menuOpen} />
        <Wrapper menuOpen={menuOpen}>
            <Nav>
                {items.map(item => (
                    <li key={item.link}>
                        <Link to={item.link} activeClassName="active">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </Nav>
        </Wrapper>
    </>
)

export default MobileMenu
