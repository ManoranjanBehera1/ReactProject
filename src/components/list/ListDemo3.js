import React from 'react'

export default function ListDemo3() {
  let employees = [
    { eId: 101, name: "Sanjay", sal: 5000 },
    { eId: 104, name: "Deepak", sal: 8000 },
    { eId: 103, name: "Ranjan", sal: 7000 },
    { eId: 102, name: "Manoj", sal: 9000 },
    { eId: 105, name: "Kunal", sal: 6000 }
];
  return (
    <>
    <h1 className="text-center bg-secondary text-white">Employee Table</h1>
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Eid</th>
          <th>Name</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp,ind) =>{
          return <tr key={ind}>
            <td>{emp.eId}</td>
            <td>{emp.name}</td>
            <td>{emp.sal}</td>
          </tr>
        })}
      </tbody>
    </table>
    </>
  )
}
