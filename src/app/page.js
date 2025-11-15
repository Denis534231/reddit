import CreatePostButton from "./components/CreatePostButton";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts = await response.json();

  return (
    <div className="container">
      <div className="header">
        <h1 className="headerTitle">Reddit Clone</h1>
        <CreatePostButton />
      </div>

      <h1 className="title">Posts</h1>

      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}
