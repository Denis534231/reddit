"use client";

import { useRouter } from "next/navigation";

export default function CreatePostButton() {
  const router = useRouter();
  async function handleClick() {
    await fetch("/api/posts", {
      method: "POST",
    });
  }
  return (
    <button className="headerButton" onClick={() => router.push("/create")}>
      Create Post
    </button>
  );
}
