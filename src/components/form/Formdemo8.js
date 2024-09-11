import React from "react";
import { useState } from "react";  //its a assignment not completed...
const initialUsers = [
  {
    fName: " Sachin",
    lName: "Tendulkar",
    skills: [
      { Skillname: "HTML", exp: 5 },
      { Skillname: "CSS", exp: 5 },
    ],
  },
];
const emptyUser = {
  fName: "",
  lName: "",
  skills: [],
};

const emptySkill = { Skillname: "New Skill", exp: 0 };

export default function Formdemo8() {
  const [users, setUsers] = useState(initialUsers);

  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, emptyUser]);
  };
  const addSkill = (userInd) => {
    users[userInd].skill.push(emptySkill);
    console.log(users);
    setUsers([...users]);
  };
  
  return (
    <>
      <div>Formdemo8</div>
      <form>
        {users.map((user, userInd) => {
          return (
            <div key={userInd} className="border p-2 m-2">
              First Name:
              <input
                name="fName"
                placeholder="First name"
                value={user.fName}
                onChange={(e) => {}}
              />
              Last Name:
              <input
                name="lName"
                placeholder="Last name"
                value={user.lName}
                onChange={(e) => {}}
              />
              <br />
              Skills:
              {user.skills.map((skill, skillInd) => {
                return (
                  <>
                    {skill.Skillname} - {skill.exp},
                  </>
                );
              })}
              <input placeholder="Skill Name"/>
              <input placeholder="Experience"/>
              <button onClick={(e)=>{
                e.preventDefault();
                addSkill(userInd);
              }} className="m-2">
              {/* <button onClick={()=> addSkill(userInd)} className="m-2"> */}
                {/* Add Skill- {userInd} */}
                Add Skill
              </button>
            </div>
          );
        })}
        <button onClick={addUser} className="m-2">
          Add User
        </button>
      </form>
    </>
  );
}
