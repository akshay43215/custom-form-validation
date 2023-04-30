import React from 'react'
import '../OnSubForm/formSub.css'

export default function OnChangeForm() {
  return (
    <div className ="container">
          <div className="right-section">
              <h2>form details</h2>
              <form action="" autocomplete="na">
                  <div className="input-section">
                      <input type="text" required id="name"autocomplete="ba"/>
                      <label for="name">Name</label>
                  </div>
                  <div className="input-section">
                      <input type="email" required id="email" autocomplete="ba"/>
                      <label for="email">E-mail</label>
                  </div>
                  <div className="input-section">
                      <input type="password" required id="pass"autocomplete="ba"/>
                      <label for="pass">Password</label>
                  </div>
                  <div className="submit-section">
                      <input type="submit" className="submit-buttton"/>
                        
                  </div>
              </form>
          </div>
      </div>
  )
}
