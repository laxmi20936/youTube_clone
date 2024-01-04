import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/toggleMenuSlice";
import { Each_Video } from "../utils/constants";
// import VideoCard from "./VideoCard";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoData, setVideoData] = useState([]);
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    // setId(searchParams.get("v"))
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(Each_Video + "&id=" + searchParams.get("v"));
    const jsonValue = await res.json();
    // console.log("laxmi", jsonValue);
    setVideoData(jsonValue?.items);
  };

  return (
    // <div className="watchPage">
    //   <iframe
    //     width="560"
    //     height="315"
    //     src={"https://www.youtube.com/embed/" + id}
    //     title="YouTube video player"
    //     frameBorder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     allowFullScreen
    //   ></iframe>

    // </div>
    <div className="watchPage">
      {/* {videoData.map(item => <VideoCard key={item?.id} video={item}/>)} */}
      {videoData.map((item) => (
        <div className="m-7 w-[1000px]" key = {item?.id}>
          <img
            className="w-full rounded-lg"
            alt="thumbnail"
            src={item?.snippet?.thumbnails?.standard?.url}
          />
          <div className="pl-2">
            <h2 className="font-bold">{item?.snippet?.title}</h2>
            <h2>{item?.snippet?.channelTitle}</h2>
            <h2>{item?.statistics?.viewCount} views</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WatchPage;
