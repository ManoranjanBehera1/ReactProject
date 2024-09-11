import React from 'react'

export default function ListEmployee(props) {
  return (
    <div>
      <>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Employee Salary</th>
              <th>Actions </th>
            </tr>
          </thead>
          <tbody>
            {props.allEmployees.map((emp, ind) => {
              return (
                <tr key={emp.eId}>
                  <td>{emp.eId}</td>
                  <td>{emp.name}</td>
                  <td>{emp.sal}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => {
                        props.deleteEmp(emp.eId);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    </div>
  )
}
