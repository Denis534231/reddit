const posts = [
  {
    title: "Welcome to Reddit Clone!",
    description:
      "This is the first post on our Reddit clone. Feel free to explore and see how posts are displayed.",
  },
  {
    title: "How to build a Next.js app",
    description:
      "Next.js is a powerful React framework that makes building web applications easier. It provides features like server-side rendering, static site generation, and more.",
  },
  {
    title: "The benefits of using CSS Modules",
    description:
      "CSS Modules help you write modular and scoped CSS. Each component gets its own CSS file, preventing style conflicts across your application.",
  },
  {
    title: "React 19 is here!",
    description:
      "React 19 brings exciting new features and improvements. The new compiler and enhanced hooks make development even more enjoyable.",
  },
  {
    title: "Why Turbopack is fast",
    description:
      "Turbopack is a next-generation bundler built with Rust. It's designed to be incredibly fast and efficient, making your development experience smoother.",
  },
];

export function GET() {
  return Response.json(posts);
}

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const newPost = {
    title: "New post",
    description: "Description",
  };

  posts.unshift(newPost);
  return Response.json(posts);
}
