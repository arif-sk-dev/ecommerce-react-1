// BlogPage.jsx
import React from 'react';
import blogList from '../../utilis/blogdata'; // Adjust path as needed

const Blog = () => {
  return (
    <section className="min-h-screen py-12 px-4 mt-15 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">📝 Latest Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogList.map(blog => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
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
                <p className="text-sm text-gray-600">{blog.desc}</p>
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
                <a
                  href="#"
                  className="inline-block text-indigo-600 text-sm font-medium hover:underline"
                >
                  {blog.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
