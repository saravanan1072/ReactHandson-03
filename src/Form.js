import "./Form.css";

import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    department: "",
    rating: "",
  });

  const [employee, setEmployee] = useState([]);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const OnSubmit = (event) => {
    event.preventDefault();

    const Obj = {
      name: data.name,
      department: data.department,
      rating: data.rating,
    };

    const arr = employee;
    arr.push(Obj);
    setEmployee(arr);
    console.log(employee);
    setShow(!show);
  };

  const Back = (e) => {
    setShow(!show);
  };

  if (show) {
    return (
      <>
        <div className="spa">
          {employee.map((value, index) => {
            return (
              <h3 key={index}>
                {value.name} || {value.department} || {value.rating} <br />
              </h3>
            );
          })}
        </div>
        <button className="submit" onClick={(e) => Back(e)}>
          Go Back
        </button>
      </>
    );
  }

  return (
    <div>
      <div className="container">
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form action="">
          <label className="form">Name : </label>
          <input
            required
            type="text"
            id="name"
            value={data.name}
            name="name"
            onChange={handleChange}
          />
          <br></br>
          <label className="form">Department : </label>
          <input
            required
            type="text"
            id="department"
            value={data.department}
            name="department"
            onChange={handleChange}
          />
          <br></br>
          <label className="form">Rating : </label>
          <input
            required
            type="number"
            id="rating"
            value={data.rating}
            name="rating"
            onChange={handleChange}
          />
          <br></br>
        </form>
        <button type="submit" className="submit" onClick={OnSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
