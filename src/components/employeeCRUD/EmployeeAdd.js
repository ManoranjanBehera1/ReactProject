import React from 'react'
import { useState } from 'react';

export default function EmployeeAdd(addEmp) {
  const [employeeID, setEmployeeID] = useState(105);
  const [employeeName, setEmployeeName] = useState("text");
  const [employeeSalary, setEmployeeSalary] = useState(7000);

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
    <h4 className='text-center'>EmployeeAdd</h4>

    <div className='border p-2'>
       <div className='m-2'>
           <input name="eID"
               placeholder="Enter Employee ID"
               onChange={changeHandler}/> </div>
       <div className='m-2'>
           <input name="eName"
                placeholder="Enter Employee Name"
                onChange={changeHandler}/> </div>
       <div className='m-2'>
           <input name="eSal"
                  placeholder="Enter Employee Salary"
                  onChange={changeHandler}/> </div>

       <button  onClick={() => {
          let empObj = {
            eId: employeeID,
            name: employeeName,
            sal: employeeSalary,
          };
        addEmp.addEmp(empObj)
       }} className='btn btn-primary m-2'>Add Employee</button>
       {/* {employeeID}-{employeeName}-{employeeSalary} */}
    </div>
    </>
  )
}
