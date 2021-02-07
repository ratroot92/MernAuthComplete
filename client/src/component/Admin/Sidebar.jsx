/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./AdminStyles.css";

export default function Sidebar(props) {
  const {activeComponent}=props
  const activeDisplay = {
    backgroundColor: "blueviolet",
  };



  return (
    <ul className="list">
      <li
        className="p-0 m-0 list-group-item custom-side-bar-li"
         style={(activeComponent === "Dashboard")  ? activeDisplay: null}
       
      >
        <a
className="nav-link "
        onClick={(e)=>props.handleClick(e)}
        id="Dashboard"
        >
          Dashboard
        </a>
      </li>
      <li
className="p-0 m-0 list-group-item custom-side-bar-li"
       style={(activeComponent === "UserPage")  ? activeDisplay: null}
      >
        <a
className="nav-link "
        onClick={(e)=>props.handleClick(e)}
        id="UserPage"
        >
         
          Users
        </a>
      </li>
      <li
className="p-0 m-0 list-group-item custom-side-bar-li"
       style={(activeComponent === "AdminPage")  ? activeDisplay: null}
      >
        <a
className="nav-link "
        onClick={(e)=>props.handleClick(e)}
        id="AdminPage"
        >
         
          Admins
        </a>
      </li>
      <li
className="p-0 m-0 list-group-item custom-side-bar-li"
       style={(activeComponent === "ProductPage")  ? activeDisplay: null}
      >
        <a
className="nav-link "
        onClick={(e)=>props.handleClick(e)}
        id="ProductPage"
        >
         
          Products
        </a>
      </li>
      <li
className="p-0 m-0 list-group-item custom-side-bar-li"
       style={(activeComponent === "CategoryPage")  ? activeDisplay: null}
      >
        <a
className="nav-link "
        onClick={(e)=>props.handleClick(e)}
        id="CategoryPage"
        >
         
          Categories
        </a>
      </li>
    </ul>
  );
}
