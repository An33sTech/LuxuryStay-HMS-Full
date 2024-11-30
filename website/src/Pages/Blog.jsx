import React from 'react';
import SlidesPerView from '../Components/SlidesPerView';
import HeadlineBar from '../Components/HeadlineBar';
import roomimg from '../assets/roomimg7.jpg';
import {blog} from '../Components/Data'

const Blog = () => {
  return (
    <>
      <h1 className="text-4xl font-[Unbounded] text-center pt-10">Our Blog</h1>
      <SlidesPerView />
      <HeadlineBar />

      {/* Blog Section */}
      <div className="grid lg:grid-cols-3 gap-4 py-10">

        {/* Recent Posts */}
        <div className="col-span-2">
          <p className="font-extrabold text-xl font-[Unbounded] pt-5 pl-5 bg-black text-white">Recent Posts</p>
          <div className="grid sm:grid-cols-2 gap-2 bg-black text-white">
            
            {/* Featured Post */}
            <div className='relative bg-black p-5'>
              <img className='h-full w-full object-cover' src={roomimg} alt="Luxury Hotel Room" />
              <div className='absolute p-5 left-0 right-0 bottom-5 bg-black bg-opacity-70'>
                <b className='capitalize'>5 Ways to Elevate Your Hotel Stay</b>
                <p className='text-gray-400'>Discover tips for transforming a good stay into an unforgettable experience.</p>
                <p className='text-gray-400'>3-Jan-2024</p>
              </div>
            </div>

            {/* Recent Post List */}
            <div className='bg-black p-5'>
              {blog.recentpost.map((post, index) => (
                <div className="flex items-center gap-5 mb-4" key={index}>
                  <img className="h-20 w-40 object-cover" src={post.img} alt={post.title} />
                  <div>
                    <p className='text-sm'>{post.title}</p>
                    <p className='text-sm text-gray-400'>{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Posts */}
          <div className="grid sm:grid-cols-2 gap-10 pt-5">
            {blog.addpost.map((post, index) => (
              <div className='border-t-4 border-cyan-400 p-2 bg-black text-white' key={index}>
                <p className='py-2 font-extrabold text-xl font-[Unbounded]'>Blog Post</p>
                <img className='h-1/2 w-full object-cover' src={post.img} alt={post.title} />
                <div className='py-5'>
                  <b className='capitalize md:text-lg text-base'>{post.title}</b>
                  <p className='text-gray-400 md:text-base text-sm py-2'>{post.content}</p>
                  <p className='text-gray-400 md:text-base text-sm'>{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Posts */}
        <div className="bg-black p-5 lg:col-span-1 col-span-2">
          <h1 className="text-center font-extrabold text-xl font-[Unbounded] py-1 text-white">Popular Posts</h1>
          {blog.popular.map((populars, index) => (
            <div key={index} className="mb-5">
              <img
                className="h-40 w-full object-cover py-1"
                src={populars.imgSrc}
                alt={populars.title}
              />
              <div className="text-white text-sm text-center font-semibold tracking-wider">
                {populars.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
