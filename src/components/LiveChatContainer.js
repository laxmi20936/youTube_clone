const LiveChatContainer = () => {
    const submitHandler = (e) => {
      e.preventDefault();
    }
  return (
    <div className="h-[790px]">
      <div className="h-[708px]"> Live chat</div>
      <form className="p-2 m-2 " onSubmit={(e)=>submitHandler(e)}>
        <input className="border border-gray-400 p-2 w-8/12" />
        <button className="w-3/12 border border-green-200 bg-green-200 p-2 ml-5"> Send</button>
      </form>
    </div>
  );
};

export default LiveChatContainer;
