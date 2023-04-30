import { useState } from 'react'

import Toggler from '../Toggler/Toggler'
import OnSubForm from '../OnSubForm/OnSubForm'
import OnChangeForm from '../OnChangeForm/OnChangeForm'
import './App.css'

function App() {

  return (
   <div className="app-container">
    {/* <Toggler/> */}
      <OnSubForm/>
      {/* <OnChangeForm/> */}
    
   </div>
  )
}

export default App
