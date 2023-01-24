import React, { useState } from 'react'

function App() {
  
  // toggle for switching between form and data components
  const[toggle,setToggle] = useState(false);
  // for storing all form data  
  const[formData,setFormData] = useState(
    {
        Name2 : "",
        Department : "",
        Rating : "",
    }
  );

  // Array for storing all entries made into the form 
  const[allFormData,setAllFormData] = useState([]);

  // changeHandler fires every time the input element will be updated 
  const changeHandler = e =>
  {

    // e is the event 
    // updating the formData State , here
    setFormData({...formData,[e.target.name] : e.target.value})
    // ... (spread operator) is used inorder to updaate the specific property of the object 
    // [e.target.name] will be the name of the input element which fire the event
  }

  function toggleAcross()
  {
    // toggles the value of toggle variable 
    setToggle(!toggle)
  }

  // onClicking the submit button, the following function gets executed 
  const submitHandler = e =>
  {
    // use e.preventDefault if you keep the button type as 'submit' , because the form will be submitted and link will be refreshed else
    e.preventDefault();
    const empObj = 
    {
      Name : formData.Name2,
      Department : formData.Department,
      Rating : formData.Rating,
    }
    const arr = allFormData;
    arr.push(empObj);
    setAllFormData(arr)
    console.log(allFormData);
    setToggle(!toggle)
  }
  
  if(toggle)
  {
    return (
      <>
          {/*  if true , render the data  */}
          <div>
          {allFormData.map((value,index)=>
          {
            console.log(allFormData)
            return(
              <span key={index}>{value.Name} {value.Department} {value.Rating} <br/></span>
            )
          }
          )}
          <button onClick={(e) => toggleAcross(e)}>Go Back</button>
        </div>
      </>
    );
  }
  else
  return (
    <>
      {/* if false , render the formData */}
      <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form>        
          <label htmlFor='Name'>Name : </label>
          <input type="text" name="Name2" value={formData.Name2} onChange={(e) => changeHandler(e)}></input>
          <br/>
          <label>Department : </label>
          <input type="text" name="Department" value={formData.Department}  onChange={(e) => changeHandler(e)}></input>
          <br/>
          <label>Rating : </label>
          <input type="number" name='Rating' value={formData.Rating}  onChange={(e) => changeHandler(e)}></input>
          <br/>
          <button type="button" onClick={(e) => submitHandler(e)}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App







/*
import React, { Component } from 'react'

export default class App extends Component {
  // Golden rule : State can only be changed using setState()
  state = {
//  key  : value   
    Name2 : "",
    Department : "",
    Rating : "",
    employees : []
  };

  changeHandler = (e) =>
  {
    this.setState({[e.target.name] : e.target.value});
  }

  submitHandler = (e)=>
  {
    console.log("Submit Handler Called")
    const empObj = 
    {
      Name : this.state.Name2,
      Department : this.state.Department,
      Rating : this.state.Rating,
    }
    const arr = this.state.employees;
    arr.push(empObj);
    this.setState({employees : arr})
  }

  render() {
    return (
      <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form>        
          <label htmlFor='Name'>Name : </label>
          <input type="text" name="Name2" value={this.state.Name} onChange={this.changeHandler}></input>
          <br/>
          <label>Department : </label>
          <input type="text" name="Department" value={this.state.Department}  onChange={this.changeHandler}></input>
          <br/>
          <label>Rating : </label>
          <input type="number" name='Rating' value={this.state.Rating}  onChange={this.changeHandler}></input>
          <br/>

          <button type="button" onClick={this.submitHandler}>Submit</button>
        </form>
        
        <div>
          {this.state.employees.map((value,index)=>
          {
            return(
              <span key={index}>{value.Name} {value.Department} {value.Rating}</span>
            )
          }
          )}
        </div>

      </div>

    )
  }
}
*/