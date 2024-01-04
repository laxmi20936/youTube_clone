import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const toggleData = useSelector(store => store.toggle.isOpenMenu)
  // useEffect(()=>{
  //   console.log("sidebar useffect called");
  // },[])
  if(!toggleData){
    return null
  }
  
  return (
    <div className="sidebar shadow-md p-4 font-normal">
      {/* {console.log("sidebar called")} */}
      <div className="m-4">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div className="mx-4 pb-3">
        <h1 className="font-bold">You</h1>
        <ul>
          <li>Your channel</li>
          <li>History</li>
          <li>Your videos</li>
          <li>Watch later</li>
        </ul>
      </div>
      <div className="mx-4 pb-3">
        <h1 className="font-bold">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Sports</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
