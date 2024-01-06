import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { search_list_api } from "../utils/constants";
import SearchItem from "./SearchItem";
import ButtonList from "./ButtonList";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [searchItem, setSearchItem] = useState([]);

  useEffect(() => {
    getData();
    console.log("AAAAA");
  }, [searchParams]);

  const getData = async () => {
    const res = await fetch(
      search_list_api + "&q=" + searchParams.get("search_query")
    );
    const jsonValue = await res.json();
    console.log(jsonValue?.items);
    setSearchItem(jsonValue?.items);
  };

  return (
    <div className="mx-7">
      <div className="my-4">
        <ButtonList />
      </div>
      <div>
        {searchItem?.map((item) => (
          <SearchItem
            // key={item?.id?.channelId || item?.id?.videoId}
            key={item?.etag}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
