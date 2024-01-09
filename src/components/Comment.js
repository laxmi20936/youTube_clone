import { useState, useEffect } from "react";

const Comment = ({ info }) => {
  const [data, setData] = useState(info);
  const [replyData, setReplyData] = useState(info?.reply || []);

  useEffect(() => {
    setReplyData(data?.reply || []);
  }, [data]);

  return (
    <div>
      <div className="flex">
        <div>
          <img
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            className="w-11 cursor-pointer"
          />
        </div>
        <div>
          <p>{data?.name}</p>
          <p>
            {data?.desc}{" "}
            <span
              className="mx-4"
              onClick={() => {
                if (data?.reply) {
                  // setData({...data,reply:[...replyData,{name:"om",desc:"om"}]})
                  setReplyData([...replyData, { name: "om", desc: "om" }]);
                } else {
                  setData({ ...data, reply: [{ name: "p", desc: "d" }] });
                }
              }}
            >
              {" "}
              Reply
            </span>
          </p>
        </div>
      </div>
      <div className="px-6 mx-12">
        {replyData?.map((comment) => {
          return (
            <div className="m-2">
              <div>Name: {comment?.name}</div>
              <div>
                Comment: {comment?.desc}{" "}
                <span
                  onClick={() =>
                    setReplyData([...replyData, { name: "New Added", desc: "Added good good" }])
                  }
                >
                  Reply
                </span>
              </div>
              {/* <div> */}
            </div>
          );
          // return (<Comment info={comment}/>)
        })}
      </div>
    </div>
  );
};

export default Comment;
