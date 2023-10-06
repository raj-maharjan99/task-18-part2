import React, { useEffect, useState } from "react";
import { getPostData } from "../api/api";
import { IPostData } from "../type";

function PostList() {
  const [postData, setPostData] = useState<IPostData[]>([]);
  useEffect(() => {
    getPostData().then((data) => {
      setPostData(data);
    });
  }, []);
  return (
    <div>
      {postData.map((postData) => (
        <>
          <h1 key={postData.id}></h1>
          <div>{postData.userId}</div>
          <div>{postData.title}</div>
          <div>{postData.body}</div>
        </>
      ))}
    </div>
  );
}

export default PostList;
