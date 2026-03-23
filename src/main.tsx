import './assets/css/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router/AppRouter'
import { queryElement } from './utils'
import { ROOT_LAYOUT } from './config'

const talleresCloe = createRoot(queryElement(ROOT_LAYOUT)!)

talleresCloe.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
