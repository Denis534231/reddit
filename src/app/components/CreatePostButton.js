"use client";

import { useRouter } from "next/navigation";

export default function CreatePostButton() {
  const router = useRouter();

  return (
    <button className="headerButton" onClick={() => router.push("/create")}>
      Create Post
    </button>
  );
}
