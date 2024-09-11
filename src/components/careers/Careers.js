import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Careers() {
  return (
    <>
      <h1 className="text-center">This is Careers Component</h1>
      <div>
        <Link to="/careers/permanent">Permanent Jobs</Link> &nbsp;
        <Link to="/careers/contract">Contract Jobs</Link>
      </div>
      <Outlet />
    </>
  );
}
