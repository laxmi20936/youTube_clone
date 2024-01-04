import { toggleMenu } from "../utils/toggleMenuSlice";
import { useDispatch , useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { addSearchSuggestion } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [focus, setFocus] = useState(false)
  const dispatch = useDispatch();
  const searchResult = useSelector(store => store?.searchCache?.data)

  useEffect(() => {
    let timer;
    if(searchResult[searchQuery]){
       setSuggestions(searchResult[searchQuery])

    }else{
      timer = setTimeout(() => {
      getData()
    }, 200)
  }
    return () => {
      console.log("laxmi hii");
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getData = async () => {
    const data1 = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const json = await data1.json();
    console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(addSearchSuggestion({[searchQuery]: json[1]}))
  };

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="head grid grid-flow-col p-5 shadow-lg w-full fixed z-10 bg-white">
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
        <div>
          <input
            className="border border-slate-900 w-1/2 rounded-l-full p-2 px-4"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=> setFocus(true)}
            onBlur={()=> setFocus(false)}
          />
          <button className="border border-slate-900 rounded-r-full p-2 cursor-pointer">
            🔍
          </button>
        </div>

        {focus && (suggestions.length > 0) && <div className="border border-gray-50 
        rounded-md shadow-md w-[33rem] mt-1 fixed bg-slate-50 top-16">
          {suggestions.map((suggestion, index) => (
            <div className="px-2 hover:bg-slate-200 py-2" key={index}>
              <span className="mr-3">🔍</span>
              <span>{suggestion}</span>
            </div>
          ))}
        </div>}
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
