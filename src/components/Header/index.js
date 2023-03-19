import React, { useState } from "react"
import { Link } from "gatsby"

//components
import Menu from "components/Menu"
import Hamburguer from "components/Hamburguer"
import MobileMenu from "components/MobileMenu"

//hooks
import { useSiteConfigQuery } from "hooks/useSiteConfigQuery"
//styles
import { Wrapper, Logo } from "./Header.styles"

const Header = ({ siteTitle = `` }) => {
    const siteConfig = useSiteConfigQuery()
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <Wrapper>
            <Hamburguer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />

            <Menu items={siteConfig.menu} />
            <Link to="/">
                <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
            </Link>
            <div> Mode button </div>
        </Wrapper>
    )
}

export default Header
