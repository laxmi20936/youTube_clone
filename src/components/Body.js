import { useEffect } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  // useEffect(()=>{
  //     console.log("body useeffect called");
  // },[])

  return (
    <div className="body flex">
      {/* {console.log("Body called")} */}
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
