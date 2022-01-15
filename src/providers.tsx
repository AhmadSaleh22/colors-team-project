
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { AllRouter } from './AllRouter'
import { UseTheme } from './Hook/useTheme'
import Store from './Redux'
import { DarkTheme } from './Theme/DarkTheme'
import GlobalStyle from './Theme/GloableStyle'
import { LightTheme } from './Theme/LightTheme'
import { HelmetProvider } from 'react-helmet-async'
import { useDispatch, useSelector } from "react-redux"

interface Props {
    
}



  export const Providers:React.FC  = ({children}) => {
   const  [theme]=UseTheme()
   console.log("theme",theme);
   

    return (

        <>
        <HelmetProvider>
<ThemeProvider theme={theme==="Dark" ? DarkTheme : LightTheme}  >          <GlobalStyle />
               {children}
</ThemeProvider>
        </HelmetProvider>
        </> 


    )
}
