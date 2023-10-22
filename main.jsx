import React from 'react'
import ReactDOM from 'react-dom/client'
import EnterProfile from './src/Components/EnterProfile'
import { GlobalStyle } from './globalStyle'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EnterProfile />
    <GlobalStyle/>
  </React.StrictMode>,
)
