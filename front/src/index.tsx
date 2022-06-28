import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GraphqlProvider from './GraphqlProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GraphqlProvider>
      <App />
    </GraphqlProvider>
  </React.StrictMode>,
)
