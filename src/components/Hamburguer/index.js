import React from "react"

import { HamburguerIcon } from "./Hamburguer.styles"

const Hamburguer = ({ menuOpen, setMenuOpen }) => (
    <HamburguerIcon
        role="button"
        menuOpen={menuOpen}
        onClick={() => setMenuOpen(prev => !prev)}
    >
        <div />
    </HamburguerIcon>
)

export default Hamburguer
