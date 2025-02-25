import React, { useState } from 'react';
import AddEmployee from './AddEmployee';
import ListEmployee from './ListEmployee';

export default function EmployeeCRUD() {
    const initialEmployees = [
        { eId: 101, name: "sanjay", sal: 5000 },
        { eId: 104, name: "deepak", sal: 8000 },
        { eId: 103, name: "ranjan", sal: 7000 },
        { eId: 102, name: "manoj", sal: 9000 },
      ];
      const [employees, setEmployees] = useState(initialEmployees);
    
      const deleteEmp = (empID) => {
        const tempArray = employees.filter((emp) => {
          return emp.eId !== empID;
        });
        setEmployees(tempArray);
      };
      const addEmp = (empObj) => {
        let tempArray = [...employees, empObj];
        setEmployees(tempArray);
      };
      return (
        <>
          <h3 className='text-center bg-primary text-white p-2'>This is Employee CRUD Example</h3>
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <ListEmployee
                  allEmployees={employees}
                  deleteEmp={deleteEmp}
                ></ListEmployee>
              </div>
              <div className="col-sm-4">
                <AddEmployee addEmp={addEmp}></AddEmployee>
              </div>
            </div>
          </div>
        </>
      );
}
