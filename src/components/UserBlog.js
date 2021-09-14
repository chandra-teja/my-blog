import React from "react";
import UserPage from "./UserPage";
function UserBlog(props) {
  const postArray = props.dataArray;
  function deletePostHandler1(postId) {
    props.deletepost(postId);
  }
  return (
    <div>
      {postArray.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <h2>No Posts Yet</h2>
        </div>
      ) : (
        postArray.map((postArray) => (
          <UserPage
            key={postArray.id}
            id={postArray.id}
            title={postArray.title}
            content={postArray.content}
            date={postArray.date}
            category={postArray.category}
            img={postArray.img}
            deletepost1={deletePostHandler1}
          />
        ))
      )}
    </div>
  );
}
export default UserBlog;
