import React, { useEffect, useState } from 'react'
import Image from '../../assets/signUp.jpg'
import './formSub.css'

export default function OnSubForm() {
  useEffect(() => {
  
    return () => {
      console.log('return');
    }
  }, [])
  
  const [fields, setFields] = useState( { name:'',  email:'', gender:'', country:'', skills:[] } )   
  const [errors, setErrors] = useState( { name: false , email: false , country: false , skills:false  } )    


    const handleChange = (e)=> {
      // console.log(errors);
      // debugger
      const{name,value} = e.target 
      // console.log(name,value,fields);
      setFields( prev=> ({
        ...prev,
        [name]:value
      }))
    }
    // console.log(errors);

     const handleCheckBox = (e)=> {

      const {name,value,checked}= e.target
      // console.log(name,value,checked);
  
      let newSkills =[...fields.skills]
  
     if (checked)  newSkills.push(value) 
     else
         newSkills = newSkills.filter( itm=> itm !== value)
      setFields( prev =>({
        ...prev,
        [name] : newSkills
      }) )
    } 
    
    const handleSubmit = (event)=> {
      console.log(errors);
      event.preventDefault();
      // console.log(fields);
      if (isFormValidOnSubmit()) {
        alert('submitted')
        return
      }
      alert('invalid not submitted');
    }

    const isFormValidOnBlur = (event) => {
      // debugger;
      const { name,value } = event.target ;
      let error = false;
      if (name === "name" && value === "") {
        error = true;
      } else if ( name === "email" && (value === "" || !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value) )) {
        error = true;
      } else if (name === "gender" && value === "") {
        error = true;
      } else if (name === "country" && value === "") {
        error = true;
      }
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    };
    
    const isFormValidOnSubmit = () => {
      // debugger;
      const errs = {
        name: false,
        email: false,
        gender: false,
        country: false,
      };
    
      if (fields.name === "") errs.name = true;
      if (fields.email === "") errs.email = true;
      if (fields.gender === "") errs.gender = true;
      if (fields.country === "") errs.country = true;
    
      setErrors(errs);
      if (Object.values(errs).some((err) => err === true)) return false;
      else return true;
    };
    


  return (
      <div className="form-container">
        <div className="left-image">
          <img src={Image} alt='sign Up image'/>
          {/* <h2>image</h2> */}
        </div>
        <div className="right-form">
          <form  onSubmit={handleSubmit} > 
              <div className="input-section">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' onChange={handleChange} onBlur={isFormValidOnBlur} autoComplete='new-pass'/>
                { errors.name && <label htmlFor="" style={{color: `var(--danger)`}}>*** Make Sure you Fill The Name</label> }
              </div>
              <div className="input-section">
                <label htmlFor="email">E-mail</label>
                <input type="email" name='email' onChange={handleChange} onBlur={isFormValidOnBlur}  autoComplete='new-pass'/>
                { errors.email && <label htmlFor="" style={{color: `var(--danger)`}}>***  Make Sure you Fill The Email</label> }

              </div>
              <div className="input-section">
                <label htmlFor="pass">country</label>
                  <select name="country"  value={fields.country} onChange={handleChange} onBlur={isFormValidOnBlur} >
                    <option value="" > Select... </option>
                    <option value="India"> IND </option>
                    <option value="United State" >US</option>
                    <option value="Qatar">QTR</option>
                  </select>
                { errors.country && <label htmlFor="" style={{color: `var(--danger)`}}>***  Make Sure you Select An Option</label> }

              </div>
              <div className="input-section">
                <label htmlFor="pass">Gender</label>
                <div className="gender-group">
                  <span>
                    <label htmlFor="">Male</label>
                    <input type="radio" name='gender' onChange={handleChange} onBlur={isFormValidOnBlur} className='gender' value='male' />
                  </span>
                  <span>
                    <label htmlFor="">Female</label>
                    <input type="radio" name='gender' onChange={handleChange} onBlur={isFormValidOnBlur} className='gender' value='female' />
                  </span>
                </div>
                { errors.gender && <label htmlFor="" style={{color: `var(--danger)`}}>***  Make Sure you Choose The Gender</label> }
              </div>
              <div className="check-section">
                  <input type="checkbox" onChange={handleCheckBox} onBlur={isFormValidOnBlur} name="skills" value='Javascript' />
                  <label htmlFor="Javascript">Javascript</label>

                  <input type="checkbox" onChange={handleCheckBox} onBlur={isFormValidOnBlur} name="skills" value='React' />
                  <label htmlFor="React">React</label>

                  <input type="checkbox" onChange={handleCheckBox} onBlur={isFormValidOnBlur} name="skills" value='Vue js' />
                  <label htmlFor="Vue js">Vue js</label>
              </div>
                  { errors.skills && <span htmlFor="" style={{color: `var(--danger)`}}>*** Make Sure you Checked The Value</span> }
                <button type='submit'>Submit</button>
          </form>
        </div>
     </div>
  )
}
