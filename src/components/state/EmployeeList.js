import React, { useState } from 'react'
import SearchBar from 'react-js-search';

export default function EmployeeList() {
    const initialEmployees = [
        { number: 12, name: "Buffon", position: "ST", success: true },
        { number: 21, name: "Pirlo", position: "MC", success: false },
        { number: 10, name: "Ruiz", position: "MDI" },
        { number: 7, name: "Nesta", position: "RB", success: true },
        { number: 4, name: "Cannavaro", position: "CB" },
        { number: 2, name: "Puyol", position: "CB", success: false },
        { number: 15, name: "Abate", position: "LB" },
        { number: 16, name: "Locatelli", position: "MDI" },
        { number: 1, name: "Buffon", position: "GK" },
        { number: 21, name: "Pirlo", position: "MC" },
        { number: 10, name: "Ruiz", position: "MDI" },
        { number: 7, name: "Nesta", position: "RB" },
      ];
      const [employees, setEmployees] = useState(initialEmployees);
      const [filteredEmployees, setFilteredEmployees] = useState(initialEmployees);
    
     /*  const onSearchClick = (searchText) => {
        console.log("search clicked"); 
        setFilteredEmployees(employees.filter((emp) => emp.name.includes(searchText)));
      }; */
      const onSearchClick = (searchText, filteredData) => {
        console.log("search clicked", searchText, filteredData); 
        setFilteredEmployees(employees.filter((emp) => JSON.stringify(emp).includes(searchText)));
      };
      const onSearchTextChange=(searchText, filteredData) =>{
        setFilteredEmployees(filteredData);
      };
      const sortAsc= ()=>{
        setFilteredEmployees(filteredEmployees.sort((e1, e2) =>e1.name.localeCompare(e2.name)));
      }
      const sortDesc= ()=>{
        setFilteredEmployees(filteredEmployees.sort((e1, e2) =>e2.name.localeCompare(e1.name)));
      }
      return (
        <>

          <SearchBar
            onSearchTextChange={(term, filteredData) => {
              setFilteredEmployees([...filteredData]);
            }}
            onSearchButtonClick={onSearchClick}
            placeHolderText={"Search here..."}
            data={employees}
          />
          <button onClick={sortAsc}>Asc</button>
          <button onClick={sortDesc} className='ms-1'>Desc</button>
          <hr />
          {
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Eid</th>
                  <th>Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((emp, ind) => (
                  <tr key={ind}>
                    <td>{emp.number}</td>
                    <td>{emp.name}</td>
                    <td>{emp.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        </>
      );
}
