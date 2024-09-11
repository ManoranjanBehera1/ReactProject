import React from 'react'

export default function ListEmployee2({employees, deleteEmp, handleEdit}) {
  return (
    <>
    <h4 className='text-center'>Employee Table</h4>

    <table className='table table-bordered table-stripped text-center'>
        <thead>
            <tr>
                <th>EId</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {employees.map((emp,ind)=>{
              return <tr key={ind}>
                <td>{emp.eId}</td>
                <td>{emp.name}</td>
                <td>{emp.sal}</td>
                <td>
                  <button onClick={()=>deleteEmp(emp.eId)} className='btn btn-danger'>Delete</button>
                  <button onClick={()=>handleEdit(emp.eId)} className='btn btn-success ms-1'>Edit</button>
                  {/* <button onClick={()=>{alert("Plz Click on Ok button to confirm");deleteEmp(emp.eId)}} className='btn btn-danger'>Del</button> */}
                </td>
              </tr>
            })}
        </tbody>
    </table>
    </>
  )
}
