import React, { useState } from "react";

export default function AddEmployee(props) {
  const [employeeID, setEmployeeID] = useState(0);
  const [employeeName, setEmployeeName] = useState("test");
  const [employeeSalary, setEmployeeSalary] = useState(1000);
  const changeHandler = (e) => {
    if (e.target.name === "eID") {
      setEmployeeID(e.target.value);
    } else if (e.target.name === "eName") {
      setEmployeeName(e.target.value);
    } else {
      setEmployeeSalary(e.target.value);
    }
  };

  return (
    <>
      <input
        name="eID"
        placeholder="Enter Employee ID"
        onChange={changeHandler}
      />
      <input
        name="eName"
        placeholder="Enter Employee Name"
        onChange={changeHandler}
      />
      <input
        name="eSalary"
        placeholder="Enter Employee Salary"
        onChange={changeHandler}
      />
      <br />
      <button
        type="button"
        className="btn btn-success mt-2"
        onClick={() => {
          let emp = {
            eId: employeeID,
            name: employeeName,
            sal: employeeSalary,
          };
          props.addEmp(emp);
        }}
      >
        Add Employee
      </button>
    </>
  );
}
