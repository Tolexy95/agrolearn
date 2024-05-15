import React, { useState, useEffect } from 'react';
import { IoMdArrowForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns'
import Button from '../Button/CustomButton';
import { ButtonSize, ButtonState } from '../Button/ButtonStyles';
import Loader from '../Loader/loader';

const BlogCard = () => {
  const navigate = useNavigate();
  const [stories, setStories] = useState([]);
 
  useEffect(() => {
    const fetchStories = async () => {
      try {
        // Simulating a delay of 2 seconds
        setTimeout(async () => {
          const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@agrohive');
          const data = await response.json();
          setStories(data.items.slice(0, 3).map(item => {
            // Extracting main image and content from description
            const parser = new DOMParser();
            const htmlContent = parser.parseFromString(item.description, 'text/html');
            const imgElement = htmlContent.querySelector('figure img');
            const mainImage = imgElement ? imgElement.getAttribute('src') : '';
            const paragraphs = Array.from(htmlContent.querySelectorAll('p')).map(p => p.textContent);
            const listItems = Array.from(htmlContent.querySelectorAll('li')).map(li => li.textContent);

            return {
              title: item.title,
              author: item.author,
              pubDate: item.pubDate,
              link: item.link,
              mainImage,
              content: { paragraphs, listItems }
            };
          }));
          // setLoading(false); // Set loading to false after data is fetched
        }, 2000); // Delay of 2 seconds
      } catch (error) {
        console.error('Error fetching stories:', error);
        // setLoading(false); // Set loading to false in case of error
      }
    };

    fetchStories();
  }, []);


  const handleShowAllPosts = () => {
    navigate("/blog");
  };

  return (
    <div className='px-5 md:px-12 bg-[#f6f5f270] py-8 mt-16 font-inter'>
      <h1 className='text-[#255946] font-sora text-3xl text-center mb-8 font-semibold capitalize'>blog</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' >
        {stories.length > 0 ? (
          stories.map((story, index) => (
            <div  key={index} className="rounded-t-lg bg-white shadow-sm" >
              <div className="aspect-[3/2] w-full">
                <img src={story.mainImage} alt={story.title} className="object-cover w-full h-full rounded-md " loading='lazy' />
              </div>
              <div className='px-2'>
                <div className="flex justify-between mt-4 mb-0">

                  <p className="AUTHOR text-base text-gray-600 font-bold italic"><span className=' font-normal not-italic'>Author:</span> {story.author}</p>

                  <p className="text-base text-gray-600 font-semibold">
                    {format(new Date(story.pubDate), "dd MMMM yyyy")}
                  </p>
                </div>

                <h2 className="text-[#255946] text-base mt-3 min-h-20 lg:min-h-12 font-bold capitalize text-justify tracking-tighter">{story.title}</h2>

                {/* Combine the paragraphs until the character count reaches 200 */}
                <p className=" text-[#000000c2] mt-2 lg:h-40 font-sora text-justify text-sm" style={{ lineHeight: '2' }}>
                  {story.content.paragraphs.reduce((acc, paragraph) => {
                    if (acc.length < 225) {
                      const remainingCharacters = 225 - acc.length;
                      acc += paragraph.substring(0, remainingCharacters);
                    }
                    return acc;
                  }, "")} ...
                </p>

                <div className="flex items-center my-4 justify-between">
                  <p className="text-base text-gray-600">12 min read</p>
                  <div className="flex items-center">
                    <Link to={story.link} className="text-blue-500 hover:text-blue-700">Read more</Link>
                    <IoMdArrowForward className='text-blue-500' />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="lg:translate-x-[110%] lg:translate-y-1/4 md:translate-x-[60%] md:translate-y-1/4">
          <Loader className="" />
        </div>
        
        )}
      </div>
      <div className='mt-8 flex justify-end'>
        <Button
          className={`${ButtonSize ? 'w-48 lg:w-1/5' : 'w-1/2'}`}
          value='Explore more posts'
          size={ButtonSize.sm}
          variant={ButtonState.SECONDARY}
          onClick={handleShowAllPosts}
        />
      </div>
    </div>
  );
};

export default BlogCard;
