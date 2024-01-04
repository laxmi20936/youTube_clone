import { toggleMenu } from "../utils/toggleMenuSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();
  
  const toggleHandler = () => {
    dispatch(toggleMenu())
  };
  return (
    <div className="head grid grid-flow-col p-5 shadow-lg">
      <div className="col-span-1 flex">
        <img
          className="h-7 mr-4 cursor-pointer"
          alt="menu"
          onClick={toggleHandler}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <img
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          className="h-6 cursor-pointer"
        />
      </div>
      <div className="col-span-10 ml-20">
        <input
          className="border border-slate-900 w-1/2 rounded-l-full p-2"
          type="text"
        />
        <button className="border border-slate-900 rounded-r-full p-2 cursor-pointer">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex justify-end">
        <img
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          className="w-11 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Head;
