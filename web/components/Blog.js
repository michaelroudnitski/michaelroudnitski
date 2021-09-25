import { useState, useEffect, useCallback } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_DEV_TO_URL)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="divide-y-2 divide-gray-500">
      <h2 className="text-xl tracking-tight font-extrabold dark:text-gray-400 text-gray-900 sm:text-4xl">
        Recent posts
      </h2>
      <div className="mt-4 pt-8 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {posts.map((post) => {
          return (
            <div key={post.title}>
              <a
                href={post.url}
                target="_blank"
                className="block mt-4 group transition-colors"
              >
                <p className="text-xl font-semibold dark:text-gray-400 dark:group-hover:text-gray-200 text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base dark:text-gray-500 dark:group-hover:text-gray-400">
                  {post.description}
                </p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <span className="sr-only">{post.user.name}</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.user.profile_image_90}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium dark:text-gray-300 text-gray-900">
                    {post.user.name}
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.published_timestamp}>
                      {post.readable_publish_date}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.reading_time_minutes} minute read</span>
                    <span aria-hidden="true">&middot;</span>
                    <span className="flex">{post.public_reactions_count}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
