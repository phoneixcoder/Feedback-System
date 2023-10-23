import { useState, useEffect } from "react";
import { Comment } from "react-loader-spinner";

const Loading = () => {
  const [path, setPath] = useState(window.location.pathname);
  return (
    <div
      className={`flex items-center justify-center w-full ${
        path != "/register" || path != "/login" ? "h-[100vh]" : "h-full"
      }`}
    >
      `
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
    </div>
  );
};

export default Loading;
