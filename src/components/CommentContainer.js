import Comment from "./Comment";
import Reply from "./Reply";

const CommentContainer = () => {
  const commentsData = [
    {
      name: "laxmi",
      desc: "wow",
      reply: [
        { name: "shital", desc: "wow" },
        { name: "ganesh", desc: "wow" },
      ],
    },
    { name: "rishit", desc: "So beautiful" },
    { name: "rishit", desc: "So beautiful" },
    {
        name: "laxmi",
        desc: "wow",
        reply: [
          { name: "shital", desc: "wow" },
          { name: "ganesh", desc: "wow" },
        ],
      },
  ];

  
  return (
    <div className="comment-cont mt-3">
      <h1 className="font-bold">Comments</h1>
      <div>
        {commentsData.map((comment,index) => (
          <div>
            <Comment info={comment} index = {index} />
            {/* <Reply reply={comment?.reply} /> */}
            {/* <div className="border border-slate-200 px-6">
              {comment?.reply?.map((comment) => (
                <Comment info={comment} />
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentContainer;
