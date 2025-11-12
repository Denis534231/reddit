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
          type="text"
          className="createPostTitleInput"
          placeholder="Enter post title"
        ></input>

        <p className="createPostDescription">Description</p>
        <textarea
          className="createPostDescriptionTextarea"
          placeholder="Enter post description"
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
