import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { client } from "../../lib/Client";
import { format } from 'date-fns'


const SinglePost = () => {
    const [singlePost, setSinglePost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { slug } = useParams();


    useEffect(() => {
        client
            .fetch(
                `*[slug.current == "${slug}"] {
                    title,
                    body,
                    publishedAt,
                    mainImage {
                        asset -> {
                            _id,
                            url
                        },
                        alt
                    },
                    "name": author -> name
                }`
            )
            .then((data) => {
                setSinglePost(data[0]);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
                setIsLoading(false);
            });
    }, [slug]);

    return (
        <div className="px-10 py-10 font-inter">
            <Link to="/blog" className="flex items-center text-gray-600 hover:text-gray-900 mb-4">
                <IoMdArrowRoundBack className="text-xl" />
                Back to Blog
            </Link>
            {isLoading ? (
                <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
                    Loading...
                </h1>
            ) : (
                singlePost ? (
                    <div>
                        <div className=" w-full">
                            <img src={singlePost.mainImage.asset.url} alt={singlePost.mainImage.alt} className="object-cover w-full h-full rounded-md" loading='lazy' />
                        </div>

                        <div className="flex justify-between mt-4 mb-0">
                            <p className="text-base text-gray-600 font-bold italic">
                                <span className=' font-normal not-italic'>Author:</span> {singlePost.name}
                            </p>
                            <p className="text-base text-gray-600 font-semibold">
                                {format(new Date(singlePost.publishedAt), "dd MMMM yyyy")}
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold capitalize">{singlePost.title}</h2>

                        <p className="text-gray-700 mt-2" style={{ lineHeight: '1.7' }}>
                        {singlePost.body[0].children[0].text} </p>
                        
                    </div>
                ) : (
                    <p>No post found with the specified slug.</p>
                )
            )}
        </div>
    );
}

export default SinglePost;
