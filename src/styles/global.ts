import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.brand.yellow.dark}
  }

  body {
    background-color: ${(props => props.theme.base.background)};
    color: ${(props => props.theme.base.text)}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props => props.theme.base.title)};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input {
    background-color: ${(props => props.theme.base.input)};
    border: 1px solid ${(props => props.theme.base.button)} ;
    border-radius: 4px;
    padding: 12px;
  }
`
