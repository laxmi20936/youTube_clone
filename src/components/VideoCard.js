const VideoCard = ({video}) => {
    // console.log("video")
    const {snippet,statistics} = video
    const {title,channelTitle,thumbnails}= snippet
    return (
        <div className="m-3 my-5 w-60 hover:shadow-md cursor-pointer">
            <img className="w-full rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url}/>
            <div className="pl-2">
            <h2 className="font-bold">{title}</h2>
            <h2>{channelTitle}</h2>
            <h2>{statistics?.viewCount} views</h2>
            </div>
        </div>
    )
}

export default VideoCard