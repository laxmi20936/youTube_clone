import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/toggleMenuSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(openMenu());
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(YOUTUBE_API);
    //  console.log(await res.json())
    const jsonValue = await res.json();
    console.log(jsonValue);
    setVideos(jsonValue?.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos?.map((item) => (
        <Link  to={"/watch?v=" + item?.id}key={item?.id}>
          <VideoCard video={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
