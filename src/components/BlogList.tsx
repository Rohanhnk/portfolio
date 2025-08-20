import { getAllBlogPosts } from "@/lib/blogs";

export default function BlogList() {
  const posts = getAllBlogPosts();
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about development, design, and
            technology.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <time className="text-sm text-gray-500 font-medium">
                  {post.date}
                </time>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                <a href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </a>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {post.description}
              </p>
              <div className="mt-4">
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Read more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
