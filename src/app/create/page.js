"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Create() {
  const router = useRouter();

  const [postTitleValue, setPostTitleValue] = useState("");

  const [postDescriptionValue, setPostDescriptionValue] = useState("");

  const handleTitleChange = (e) => {
    setPostTitleValue(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setPostDescriptionValue(e.target.value);
  };

  console.log({ postTitleValue });
  return (
    <div className="createPost">
      <div className="postCard">
        <h1 className="createPostTitle">Create a Post</h1>

        <p className="createPostSmallTitle">Title</p>
        <input
          type="text"
          className="createPostTitleInput"
          placeholder="Enter post title"
          value={postTitleValue}
          onChange={handleTitleChange}
        ></input>

        <p className="createPostDescription">Description</p>
        <textarea
          className="createPostDescriptionTextarea"
          placeholder="Enter post description"
          value={postDescriptionValue}
          onChange={handleDescriptionChange}
        ></textarea>

        <div className="createPostButtons">
          <button className="createPostButton" onClick={() => router.push("/")}>
            Create Post
          </button>
          <button
            className="createPostCancelButton"
            onClick={() => router.push("/")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
