import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lab1 from './Introduction/Lab1'
import Lab2 from './Introduction/Lab2'
import Greeting from './Components/Greeting'
import WelcomeMessage from './Components/WelcomeMessage'
import PropsExample from './Props/PropsExample'
import Counter from './State/Counter'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
    <Lab1 />
    <Lab2 />
    <Greeting name='Uttam' />
    <WelcomeMessage />
    <PropsExample />
    <Counter />
   </div>
  </StrictMode>,
)
