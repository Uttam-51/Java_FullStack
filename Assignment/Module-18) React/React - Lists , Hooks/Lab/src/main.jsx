import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UseStateHook from './Hooks/UseStateHook'
import UseEffectHook from './Hooks/UseEffectHook'
import UseRefHook from './Hooks/UseRefHook'
import ArrayList from './Lists and Keys/ArrayList'
import ObjectList from './Lists and Keys/ObjectList'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <ArrayList />
      <ObjectList />
      <UseStateHook />
      <UseEffectHook />
      <UseRefHook />
    </div>
  </StrictMode>,
)
