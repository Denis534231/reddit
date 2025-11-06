"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();

  return (
    <div className="createPost">
      <div className="postCard">
        <h1 className="createPostTitle">Create a Post</h1>
        <p className="createPostSmallTitle">Title</p>
        <input
          className="createPostTitleInput"
          placeholder="Enter post title"
        ></input>
        <p className="createPostDescription">Description</p>
        <input
          className="createPostDescriptionInput"
          placeholder="Enter post description"
        ></input>

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
