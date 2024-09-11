import React, { useState } from "react";
import ConditionalDemo1 from "../conditionalRendering/ConditionalDemo1";
import ConditionalDemo2 from "../conditionalRendering/ConditionalDemo2";
import ConditionalDemo3 from "../conditionalRendering/ConditionalDemo3";
import ConditionalDemo4 from "../conditionalRendering/ConditionalDemo4";
import ExpressionDemo from "../expressionDemo/ExpressionDemo";
import ForceUpdate1 from "../forceUpdate/ForceUpdate1";
import ForceUpdate2 from "../forceUpdate/ForceUpdate2";
import GreetDemo1 from "../greet/GreetDemo1";
import GreetDemo2 from "../greet/GreetDemo2";
import ListDemo1 from "../list/ListDemo1";
import ListDemo2 from "../list/ListDemo2";
import ListDemo3 from "../list/ListDemo3";
import UsersList from "../list/UsersList";
import UsersList2 from "../list/UsersList2";
import ProductList from "../products/ProductList";
import ProductsList2 from "../products/ProductsList2";
import MyModal from "../props/MyModal";
import Welcome from "../props/Welcome";
import StateDemo1 from "../state/StateDemo_1";
import StateDemo_11 from "../state/StateDemo_11";
import StateDemo2 from "../state/StateDemo2";
import StateDemo3 from "../state/StateDemo3";
import ShowHideDemo1 from "../state/ShowHideDemo1";
import ShowHideDemo2 from "../state/ShowHideDemo2";
import ShowHideDemo2_2 from "../state/ShowHideDemo3";
import ShowHideDemo3 from "../state/ShowHideDemo3";
import TogglePassword1 from "../state/TogglePassword1";
import ShowHideE from "../state/ShowHideE";
import ShowHideEe from "../state/ShowHideEe";
import ShowHideEee from "../state/ShowHideEee";
import SweetAlertDemo1 from "../sweetAlert/SweetAlertDemo1";
import EmployeeList from "../state/EmployeeList";
import EventDemo1 from "../events/EventDemo1";
import EventDemo2 from "../events/EventDemo2";
import EventDemo3 from "../events/EventDemo3";
import EventDemo4 from "../events/EventDemo4";
import EventDemo5 from "../events/EventDemo5";
import EventBubbling from "../events/EventBubbling";
import EventBubbling2 from "../events/EventBubbling2";
import EmployeeCRUD from "../crud/EmployeeCRUD";
import PureCompDemo1 from "../misc/PureCompDemo1";
import PureCompDemo2 from "../misc/PureCompDemo2";
import PureCompDemo3 from "../misc/PureCompDemo3";
import MemoDemo1 from "../memo/MemoDemo1";
import LifecycleDemo1 from "../lifecycleHooks/LifecycleDemo1";
import LifecycleDemo2 from "../lifecycleHooks/LifecycleDemo2";
import LifecycleDemo5 from "../lifecycleHooks/LifecycleDemo5";
import LifecycleDemo6 from "../lifecycleHooks/LifecycleDemo6";
import RefDemo4 from "../ref/RefDemo4";
import RefDemo1 from "../ref/RefDemo1";
import FormDemo1 from "../form/FormDemo1";
import FormDemo2 from "../form/FormDemo2";
import FormDemo4 from "../form/FormDemo4";
import HttpDemo1 from "../http/HttpDemo1";
import HttpDemo2 from "../http/HttpDemo2";
import HttpDemo3 from "../http/HttpDemo3";
import HttpDemo4 from "../http/HttpDemo4";
import RefDemo0 from "../ref/RefDemo0";
import RefDemo2 from "../ref/RefDemo2";
import RefDemo3 from "../ref/RefDemo3";
import FormDemo3 from "../form/FormDemo3";
import CssDemo from "../cssDemo/CssDemo";
import ConditionalCss from "../cssDemo/ConditionalCss";
import ListDemo4 from "../list/ListDemo4";
import GreetDemo3 from "../greet/GreetDemo3";
import ProductsList3 from "../products/ProductList3";
import ProductsList4 from "../products/ProductList4";
import { ShowHideDemo4 } from "../state/ShowHideDemo4";
import TogglePassword2 from "../state/TogglePassword2";
import RemainingCharacter from "../state/RemainingCharacter";
import StateDemo_111 from "../state/StateDemo_111";
import StateDemo_1111 from "../state/StateDemo_1111";
import StateDemo4 from "../state/StateDemo4";
import ModalDemo1 from "../modal/ModalDemo1";
import ModalDemo2 from "../modal/ModalDemo2";
import ModalDemo3 from "../modal/ModalDemo3";
import ModalDemo4 from "../modal/ModalDemo4";
import CrudEmployee from "../employeeCRUD/CrudEmployee";
import LifecycleDemo0 from "../lifecycleHooks/LifecycleDemo0";
import LifecycleDemo3 from "../lifecycleHooks/LifecycleDemo3";
import LifecycleDemo4 from "../lifecycleHooks/LifecycleDemo4";
import LifecycleDemo7 from "../lifecycleHooks/LifecycleDemo7";
import LifecycleDemo8 from "../lifecycleHooks/LifecycleDemo8";
import LifecycleDemo6_1 from "../lifecycleHooks/LifecycleDemo6_1";
import RefDemo5 from "../ref/RefDemo5";
import RefDemo3_0 from "../ref/RefDemo3_0";
import RefDemo4_0 from "../ref/RefDemo4_0";
import FormDemo5 from "../form/FormDemo5";
import FormDemo6 from "../form/FormDemo6";
import FormDemo7 from "../form/FormDemo7";
import Formdemo8 from "../form/Formdemo8";
import HttpFetchUsers from "../http/HttpFetchUsers";
import HttpDemo5 from "../http/HttpDemo5";
import UseReducerDemo from "../hooks/UseReducerDemo";
import UseReducerDemo2 from "../hooks/UseReducerDemo2";
import UseMemoExam1 from "../hooks/UseMemoExam1";


export default function Center() {
  const [flag, setFlag] = useState(true);

  let f1 = function(){
    console.log("I am f1 function from center component")
  }
  return (
    <div>
      {/* <ExpressionDemo /> */}
      {/* <CssDemo /> */}
      {/* <ConditionalCss /> */}
      {/* <ConditionalDemo1 /> */}
      {/* <ConditionalDemo2 /> */}
      {/* <ConditionalDemo3 /> */}
      {/* <ConditionalDemo4 /> */}
      {/* <ListDemo1 /> */}
      {/* <ListDemo2 /> */}
      {/* <ListDemo3 /> */}
      {/* <ListDemo4 /> */}
      {/* <UsersList /> */}
      {/* <UsersList2 /> */}
      {/* <ForceUpdate1 /> */}
      {/* <ForceUpdate2 /> */}
      {/* <ProductList /> */}
      {/* <ProductsList2 /> */}
      {/* <ProductsList3 /> */}
      {/* <ProductsList4 /> */}
      {/* <GreetDemo1 msg='Good Morning'/> */}
      {/* <GreetDemo1 name='Sachin' msg='Good Morning' age={45} f1={f1}/> */}
      {/* <GreetDemo1 name='Sachin' msg='Good Morning' /> */}
      {/* <GreetDemo1 name='Rahul' msg='Good Evening' /> */}
      {/* <GreetDemo1 name='Vicky' msg='Good Afternoon' /> */}
      {/* <GreetDemo2 name='Kunal' message='How are you..?' /> */}
      {/* <GreetDemo2 name='Ranjan' message='How are you..?' /> */}
      {/* <GreetDemo3 name='Manoj' message='How are you..?' showTitle /> */}
      {/* <GreetDemo3 name='Bikash' message='How are you..?' showTitle={false} /> */}
      {/* <Welcome />
      <hr/>
      <Welcome>
        <div>This is Div-1 from parent(welcome.js)</div>
        <div>This is Div-2 from parent(welcome.js)</div>
      </Welcome>
      <hr/>
      <Welcome>This Content is from Parent Component </Welcome> */}
      {/* <MyModal /> */}
      {/* <MyModal>
        <table className="table table-bordered table-stripped">
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
      </MyModal> */}
      {/* <MyModal heading="Registration Form">
        <div className="container mt-3">
       <h2>Stacked form</h2>
     <form action="/action_page.php">
    <div className="mb-3 mt-3">
      <label htmlFor="email">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
    </div>
    <div className="mb-3">
      <label htmlFor="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
    </div>
    <div className="form-check mb-3">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember"/> Remember me
      </label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
        </div>
      </MyModal> */}
      {/* <StateDemo1 /> */}
      {/* <StateDemo_11 /> */}
      {/* <StateDemo_111 /> */}
      {/* <StateDemo_1111 /> */}
      {/* <StateDemo2 /> */}
      {/* <StateDemo3 /> */}
      {/* <StateDemo4 /> */}
      {/* <ShowHideDemo1 /> */}
      {/* <ShowHideDemo2 /> */}
      {/* <ShowHideDemo3 /> */}
      {/* <ShowHideDemo4 /> */}
      {/* <ShowHideE /> */}
      {/* <ShowHideEe /> */}
      {/* <ShowHideEee/> */}
      {/* <TogglePassword1 /> */}
      {/* <TogglePassword2 /> */}
      {/* <RemainingCharacter /> */}
      {/* <SweetAlertDemo1 /> */}
      {/* <ModalDemo1 /> */}
      {/* <ModalDemo2 /> */}
      {/* // <ModalDemo3 /> */}
      {/* <ModalDemo4 /> */}
      {/* <EmployeeList /> */}
      {/* <EventDemo1 /> */}
      {/* <EventDemo2 /> */}
      {/* <EventDemo3 /> */}
      {/* <EventDemo4 /> */}
      {/* <EventDemo5 /> */}
      {/* <EventBubbling /> */}
      {/* <EventBubbling2 /> */}
      {/* <EmployeeCRUD /> */}
      {/* <CrudEmployee /> */}
      {/* <PureCompDemo1 /> */}
      {/* <PureCompDemo2 /> */}
      {/* <PureCompDemo3 /> */}
      {/* <MemoDemo1 /> */}
      {/* <LifecycleDemo0 /> */}
      {/* <LifecycleDemo1 name="Rahul" /> */}
      {/* <LifecycleDemo2 /> */}
      {/* <LifecycleDemo3 /> */}
      {/* <LifecycleDemo4 /> */}
      {/* <LifecycleDemo5 /> */}

      {/* {flag ? <LifecycleDemo6_1 /> : <LifecycleDemo6 />}
      <button onClick={()=>setFlag(!flag)}>Toggle Flag</button> */}

      {/* <LifecycleDemo7 /> */}
      {/* <LifecycleDemo8 /> */}
      {/* <RefDemo0 /> */}
      {/* <RefDemo1 /> */}
      {/* <RefDemo2 /> */}
      {/* <RefDemo3 /> */}
      {/* <RefDemo3_0 /> */}
      {/* <RefDemo4 /> */}
      {/* <RefDemo4_0 /> */}
      {/* <RefDemo5 /> */}
      {/* <FormDemo1 /> */}
      {/* <FormDemo2 /> */}
      {/* <FormDemo3 /> */}
      {/* <FormDemo4 /> */}
      {/* <FormDemo5 /> */}
      {/* <FormDemo6 /> */}
      {/* <FormDemo7 /> */}
      {/* <Formdemo8 /> */}
      <HttpDemo1 />
      {/* <HttpDemo2 /> */}
      {/* <HttpDemo3 /> */}
      {/* <HttpDemo4 /> */}
      {/* <HttpDemo5 /> */}
      {/* <HttpFetchUsers /> */}
      {/* <UseReducerDemo /> */}
      {/* <UseReducerDemo2 /> */}
      {/* <UseMemoExam1 /> */}
    </div>
  );
}
