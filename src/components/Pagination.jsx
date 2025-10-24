import React from "react";

const getPages = (current, total) => {
  const pages = [];

  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }

  return pages;
};

const Pagination = ({ page, pageHandler, dynamicPage }) => {
  const pages = getPages(page, dynamicPage);

  return (
    <div className="mt-10 flex flex-wrap gap-2 justify-center items-center">
      {/* Prev Button */}
      <button
        onClick={() => pageHandler(page - 1)}
        disabled={page === 1}
        className={`px-3 py-1 rounded-md transition ${
          page === 1
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 text-white cursor-pointer"
        }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((pg, index) =>
        pg === "..." ? (
          <span key={index} className="px-3 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => pageHandler(pg)}
            className={`px-3 py-1 rounded-md transition ${
              page === pg
                ? "bg-red-500 text-white font-bold"
                : "bg-zinc-400 hover:bg-zinc-500 text-white cursor-pointer"
            }`}
          >
            {pg}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => pageHandler(page + 1)}
        disabled={page === dynamicPage}
        className={`px-3 py-1 rounded-md transition ${
          page === dynamicPage
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 text-white cursor-pointer"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
