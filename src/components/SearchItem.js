const SearchItem = ({ item }) => {
  console.log(item);
  const { snippet, id } = item;
  const { channelTitle, title, description, thumbnails } = snippet;

  return (
    <div className="flex mb-3">
      {id?.channelId ? (
        <div className="w-[400px] flex justify-center">
          <img className="rounded-full" alt="search" src={thumbnails?.medium?.url} />
        </div>
      ) : (
        <div className="w-[400px] flex justify-center">
          <img className="rounded-md" alt="search" src={thumbnails?.medium?.url} />
        </div>
      )}
      <div className="w-[800px]">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="py-4 text-sm">{title === channelTitle ? null : channelTitle}</p>
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  );
};

export default SearchItem;
