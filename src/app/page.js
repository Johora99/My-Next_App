

import React from "react";
import Link from "next/link";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="p-4 container w-11/12 mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-teal-900">Blogs</h1>
      <div>
        {posts.slice(0, 10).map((post) => (
          <div key={post.id} className="mb-2">
            <Link href={`/blog/${post.id}`} className="text-teal-500 underline">
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
