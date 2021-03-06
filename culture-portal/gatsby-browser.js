/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import GlobalContextProvider from "./src/components/context/GlobalContextProvider"
import 'bootstrap/dist/css/bootstrap.css'

export const wrapRootElement = ({element}) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}