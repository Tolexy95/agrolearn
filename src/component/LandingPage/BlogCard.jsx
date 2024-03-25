import React, { useState, useEffect } from 'react';
import { IoMdArrowForward } from "react-icons/io";
import { client } from '../../../lib/Client';
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns'
import Button from '../Button/CustomButton';
import { ButtonSize, ButtonState } from '../Button/ButtonStyles';


const BlogCard = () => {
  const navigate = useNavigate();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    client.fetch(
      `*[_type == "post"]{
    title,
    slug,
    body,
    publishedAt,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    },
    'name': author -> name,
 } | order(publishedAt desc)`


    ).then((data) => {
      setStories(data.slice(0, 3))
    })
      .catch(console.error);

  }, [])

  const handleShowAllPosts = () => {
    navigate("/blog");
  };

  return (
    <div className='px-5 md:px-12 bg-[#f6f5f270] py-8 mt-16 mb-40 font-inter'>
       <h1 className='text-[#255946] font-sora text-3xl text-center mb-8 font-semibold capitalize'>blog</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' >
        {
          stories.map((story) => (
            <Link to={`/blog/${story.slug.current}`} key={story.slug.current} className="rounded-t-lg bg-white shadow-sm" >

              <div className="aspect-[3/2] w-full">
                <img src={story.mainImage.asset.url} alt={story.mainImage.alt} className="object-cover w-full h-full rounded-md " loading='lazy' />
              </div>

              <div className='px-2'>
                <div className="flex justify-between mt-4 mb-0">
                  <p className="AUTHOR text-base text-gray-600 font-bold italic"><span className=' font-normal not-italic'>Author:</span> {story.name}</p>
                  <p className="text-base text-gray-600 font-semibold">{format(new Date(story.publishedAt), "dd MMMM yyyy")}</p>
                </div>

                <h2 className="TITLE text-2xl font-bold capitalize ">{story.title}</h2>

                <p className="text-gray-700 mt-2  md:h-40  font-sora" style={{ lineHeight: '1.7' }}>
                  {`${story.body[0].children[0].text.substring(0, 200)}  ...`} </p>

                <div className="flex items-center my-4 justify-between">
                  <p className="text-base text-gray-600">12 min read</p>
                  <div className="flex items-center">
                    <Link to={`/blog/${story.slug.current}`} className="text-blue-500 hover:text-blue-700">Read more</Link>
                    <IoMdArrowForward className='text-blue-500' />
                  </div>
                </div>
              </div>
            </Link>
          ))
        }

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
  )
}
export default BlogCard;
