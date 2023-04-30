import React, { useEffect, useState } from 'react'

export default function Toggler() {

    const [toggle, setToggle] = useState(true)

    useEffect(() => {
      
      
        console.log('inside useEffect');
    
      return () => {
        console.log('return useEffect');
      }
    }, [])
    

  return (
    <div className="toggler-container">
        
      <h2>Text Here</h2>{toggle &&  <p>Toggle Me </p>}
      <button onClick={()=>setToggle(!toggle)}>switch</button>
        
    </div>
  )
}
