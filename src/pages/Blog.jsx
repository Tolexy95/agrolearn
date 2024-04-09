import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { format } from 'date-fns'



const Blog = () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@agrohive');
                const data = await response.json();
                setPost(data.items.map(item => {
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
            } catch (error) {
                console.error('Error fetching stories:', error);
            }
        };

        fetchStories();
    }, []);

    return (
        <div className="px-5 md:px-12 mt-10 font-inter">

            {!posts ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {
                        posts[2] && (
                            <div className="relative" >
                                <img src={posts[2].mainImage} alt={posts[2].title} className="w-screen h-96  hobject-fill  rounded-2xl" />

                                <div className=" absolute bottom-16 left-8 ">
                                    <h2 className="text-[#255946ab] text-2xl max-w-[400px] text-justify font-bold capitalize tracking-tighter ">{posts[2].title}</h2>

                                    <p className="max-w-96 font-bold mt-5 text-[#fffc]" style={{ lineHeight: '2' }}>
                                        {posts[0].content.paragraphs.reduce((acc, paragraph) => {
                                            if (acc.length < 225) {
                                                const remainingCharacters = 225 - acc.length;
                                                acc += paragraph.substring(0, remainingCharacters);
                                            }
                                            return acc;
                                        }, "")} ...
                                    </p>
                                    <div className="mt-7">
                                        <Link to={posts[2].link} className="bg-green-500 text-white py-3 px-4 rounded-md font-bold my-1 hover:bg-green-700 w-3/4 text-lg">Read more ...</Link>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                </div>
            )}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 bg-[#f6f5f256]' >
                {posts.length > 0 ? (
                    posts.map((post, index) => (
                        <div key={index} className="rounded-t-lg bg-white shadow-sm" >
                            <div className="aspect-[3/2] w-full">
                                <img src={post.mainImage} alt={post.title} className="object-cover w-full h-full rounded-md " loading='lazy' />
                            </div>
                            <div className='px-2'>
                                <div className="flex justify-between mt-4 mb-0">

                                    <p className="AUTHOR text-base text-gray-600 font-bold italic"><span className=' font-normal not-italic'>Author:</span> {post.author}</p>

                                    <p className="text-base text-gray-600 font-semibold">
                                        {format(new Date(post.pubDate), "dd MMMM yyyy")}
                                    </p>
                                </div>

                                <h2 className="text-[#255946] text-base mt-3 min-h-20 lg:min-h-12 font-bold capitalize text-justify tracking-tighter">{post.title}</h2>

                                {/* Combine the paragraphs until the character count reaches 200 */}
                                <p className=" text-[#000000c2] mt-2 lg:h-40 font-sora text-justify text-sm" style={{ lineHeight: '2' }}>
                                    {post.content.paragraphs.reduce((acc, paragraph) => {
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
                                        <Link to={post.link} className="text-blue-500 hover:text-blue-700">Read more</Link>
                                        <IoMdArrowForward className='text-blue-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default Blog;
