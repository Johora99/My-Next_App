import React from "react";

const BlogDetails = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="p-6 w-3/5 mx-auto mt-20 bg-teal-500 text-center rounded-md border border-teal-950 shadow-lg">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-2">{post.body}</p>
    </div>
  );
};

export default BlogDetails;
