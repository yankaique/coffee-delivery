import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  const teste = "Yan"

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>{teste}</h1>
        <input type="text" />
        <input type="text" />

      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
