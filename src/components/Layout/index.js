import React from "react"
import { ThemeProvider } from "styled-components"

//hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"
//components
import Header from "components/Header"

// styles
import { darkTheme, GlobalStyles, ligthTheme } from "styles/GlobalStyles"

const Layout = ({ children }) => {

    const data = useMetaDataQuery()

    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            
            <Header siteTitle={data.title} />
            {children}

        </ThemeProvider>
    )
}

export default Layout
