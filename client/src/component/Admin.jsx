import React from "react";
import Dashboard from "./Admin/Dashboard";
import AdminPage from "./Admin/AdminPages/AdminPage";
import CategoryPage from "./Admin/AdminPages/CategoryPage";
import ProductPage from "./Admin/AdminPages/ProductPage";
import UserPage from "./Admin/AdminPages/UserPage";
import Sidebar from "./Admin/Sidebar";

const Admin = (props) => {
  const [component, setComponent] = React.useState("Dashboard");
  const handleClick = (e) => {
 
      setComponent(e.target.id);
    
  };


  const ComponentSwitch = (componentName) => {
    switch (componentName) {
      case "CategoryPage":
        return <CategoryPage {...props} />;
      case "ProductPage":
        return <ProductPage {...props} />;
      case "UserPage":
        return <UserPage {...props} />;
      case "AdminPage":
        return <AdminPage {...props} />;
     
      default:
        console.log("default");
        return <Dashboard {...props} />;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 m-0 p-0">
          <Sidebar {...props} handleClick={handleClick} activeComponent={component} />
        </div>
        <div className="col-md-9 m-0 p-0 ">{ComponentSwitch(component)}</div>
      </div>
    </div>
  );
};
export default Admin;
