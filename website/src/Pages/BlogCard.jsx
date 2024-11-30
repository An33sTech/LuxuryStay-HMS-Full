import React from "react";
import "../index.css";
import { blogCard } from "../Components/Data";

const BlogCard = () => {
  return (
    <div className="mx-10 md:pt-40 pt-10">
         <div className='h-1 w-20 bg-cyan-400 rounded-xl mx-auto my-5'></div>
      <h1 className="text-4xl font-bold text-white  pb-20 font-[Unbounded] text-center">
        Our Blog
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {blogCard.map((blog, index) => (
          <div key={index} className="h-[500px] w-full perspective relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-700 via-slate-600 to-cyan-800 animate-pulse blur-lg"></div>
            <div className="relative w-full h-full bg-gradient-to-b from-black to-gray-900  rounded-3xl overflow-hidden shadow-lg text-white transform transition-transform duration-700 cursor-pointer">
              <div className="absolute inset-0 p-4">
                <img
                  src={blog.imgSrc}
                  alt={blog.title}
                  className="rounded-lg shadow-md h-52 w-full object-cover"
                />
                <div className="mt-4">
                  <h2 className="py-1 text-xl font-bold ">
                    {blog.title}
                  </h2>
                  <p className="py-5 text-sm">
                    {blog.description}
                  </p>
                  <p className="py-1 text-sm">
                    {blog.date}
                  </p>
                  <div className="mt-2 flex space-x-4 bg-gray-700 bg-opacity-50 p-2 rounded-lg">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.25 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                      </svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M22.5 12C22.5 6.201 17.799 1.5 12 1.5S1.5 6.201 1.5 12c0 5.052 3.708 9.244 8.546 10.317v-7.3H7.285v-3.018h2.76V9.634c0-2.733 1.636-4.232 4.135-4.232 1.198 0 2.448.215 2.448.215v2.705h-1.379c-1.36 0-1.787.843-1.787 1.706v2.054h3.043l-.486 3.018h-2.557v7.3C18.792 21.243 22.5 17.052 22.5 12z" />
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M22.46 6.011a8.922 8.922 0 01-2.607.714 4.563 4.563 0 002.01-2.521 9.034 9.034 0 01-2.867 1.106 4.519 4.519 0 00-7.695 4.118 12.822 12.822 0 01-9.312-4.72 4.519 4.519 0 001.399 6.032 4.502 4.502 0 01-2.048-.565v.057a4.523 4.523 0 003.623 4.43 4.493 4.493 0 01-2.042.078 4.527 4.527 0 004.228 3.144A9.067 9.067 0 012 19.439 12.794 12.794 0 008.92 21c7.687 0 11.88-6.37 11.88-11.888 0-.18-.005-.358-.013-.536A8.504 8.504 0 0022.46 6.01z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
