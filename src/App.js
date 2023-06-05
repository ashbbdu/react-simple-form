import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './Form';

function App() {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   comments: "",
  //   isVisible : false,
  //   secondCheckbox : false,
  //   mode : "",
  //   favCar : ""
  // })
  // // const [fistName , setFirstName] = useState("")
  // // const [lastName , setLastName] = useState("")
  // // const changeHandler = (event) => {
  // //   console.log(event.target.value , "value")
  // //   setFormData(prevFormData => {
  // //     return {
  // //       ...prevFormData,
  // //       // [] this is syntax
  // //       [event.target.name]: event.target.value
  // //     }
  // //   })

  //   // How to handle checkboxes

  //   const changeHandler = (event) => {
  //     const {name , value , checked , type} = event.target
  //     setFormData(prevFormData => {
  //       return {
  //         ...prevFormData,
  //         // [] this is syntax
  //         [name]: type === "checkbox" ?  checked : value
  //       }
  //     })
  // }
  // const submitHandler = (event) => {
  //   event.preventDefault()
  //   console.log(formData)
  // }
  return (
//     <div className="App">
//       <form onSubmit={submitHandler}>
//         <input type="text" placeholder='First Name' name='firstName' onChange={changeHandler} value={formData.firstName} />
//         <input type="text" placeholder='Last Name' name='lastName' onChange={changeHandler} value={formData.lastName} />
//         <input type="email" placeholder='Enter Your Email' name='email' onChange={changeHandler} value={formData.email} />
//         <textarea placeholder='Enter Your Comments' name='comments' onChange={changeHandler} value={formData.comments} />
//         <input id='isVisible' type="checkbox" onChange={changeHandler} name="isVisible" 
//         checked={formData.isVisible}  
//         />
//         <label htmlFor='isVisible'>Am I Visible ?</label>

//         <input id='secondCheckbox' type="checkbox" onChange={changeHandler} name="secondCheckbox" 
//         checked={formData.secondCheckbox}  
//         />
//         <label htmlFor='secondCheckbox'>Second Checkbox</label>
//         <br></br>

//         <input type="radio" id='online' name='mode' onChange={changeHandler} value="Online Mode"  checked={formData.mode === "Online Mode"} />
//         <label htmlFor='online'>Online</label>

//         <input type="radio" id='offline ' name='mode' onChange={changeHandler} value="Offline Mode" checked={formData.mode === "Offline Mode"} />
//         <label htmlFor='offline '>Offline</label>
// <br></br>
// <label htmlFor='favCar'>Fav Car</label>
// <select onChange={changeHandler} name="favCar" id='favCar' value={formData.favCar}>
//   <option  value="" defaultChecked>Select a car</option>
//   <option value="bmw">BMW</option>
//   <option value="mercedes">Mercedes</option>
//   <option value="bugati">Bugati</option>
//   <option value="rollsroyce">Rolls Royce</option>
  
// </select>

// {/* <input type="submit" value="Submit" /> */}
// <button>Submit</button>
//       </form>
//     </div>
<Form />
  );
}

export default App;
