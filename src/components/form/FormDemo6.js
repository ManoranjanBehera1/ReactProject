import React, { useState } from "react";

export default function FormDemo6() {
  const [fname, setFname] = useState("sachin");
  const [lname, setLname] = useState("tendulkar");
  const [fNameErrorMsg, setfNameErrorMsg] = useState("");
  const [lNameErrorMsg, setlNameErrorMsg] = useState("");
  const [hasError, setHasError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (fname.length < 5) {
      setfNameErrorMsg("Minimum 5 character required... ");
    }else{
      
    }
    // alert(fname + " " + lname);
  };

  const changeHandler = (e) => {
    const inputField = e.target.name;
    if (inputField === "fname") {
      setFname(e.target.value);
    } else {
      setLname(e.target.value);
    }
  };
  return (
    <>
      <div>FormDemo6</div>
      <form onSubmit={submitHandler}>
        First Name:
        <input name="fname" value={fname} onChange={changeHandler} />
        <span className="text-danger">{fNameErrorMsg}</span> <br /> <br />
        Last Name:
        <input name="lname" value={lname} onChange={changeHandler} />
        <span className="text-danger">{lNameErrorMsg}</span>
        <br />
        <br />
        <button disabled={hasError} className="ms-1">submit</button>
      </form>
    </>
  );
}
