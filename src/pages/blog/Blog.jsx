// Blog.jsx
import React, { useState } from "react";
import blogList from "../../utilis/blogdata";

const Blog = () => {
  const [expandedIds, setExpandedIds] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 blogs initially

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3); // Reveal 3 more blogs per click
  };

  const visibleBlogs = blogList.slice(0, visibleCount);
  const hasMore = visibleCount < blogList.length;

  return (
    <section className="min-h-screen py-12 px-4 mt-15 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          📝 Latest Insights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleBlogs.map((blog) => {
            const isExpanded = expandedIds.includes(blog.id);
            return (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <img
                  src={blog.imgUrl}
                  alt={blog.imgAlt}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isExpanded ? blog.desc : blog.desc.slice(0, 80) + "..."}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex gap-3">
                      {blog.metaList.map((meta, i) => (
                        <span key={i} className="flex items-center gap-1">
                          <i className={meta.iconName}></i> {meta.text}
                        </span>
                      ))}
                    </div>
                    <span>{blog.commentCount} comments</span>
                  </div>
                  <button
                    onClick={() => toggleExpand(blog.id)}
                    className="text-indigo-600 text-sm font-medium hover:underline"
                  >
                    {isExpanded ? "Show Less" : blog.btnText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
