import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { client } from "../../lib/Client";
import { format } from 'date-fns'


const Blog = () => {
    const [posts, setPost] = useState([]);

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
            setPost(data)
        })
            .catch(console.error);

    }, [])



    return (
        <div className="px-5 md:px-12 mt-10 font-inter">

            {!posts ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {
                        posts[0] && (
                            <Link to={`/blog/${posts[0].slug.current}`} className="relative" >


                                <img src={posts[0].mainImage.asset.url} alt={posts[0].mainImage.alt} className="w-screen h-96  hobject-fill  rounded-2xl" />

                                <div className=" absolute bottom-16 left-8 text-[#ffffffda]">
                                    <h2 className="TITLE text-2xl font-bold capitalize ">{posts[0].title}</h2>

                                    <p className="max-w-96 font-semibold" style={{ lineHeight: '1.7' }}>
                                        {posts[0].body[0].children[0].text.substring(0, 200)}  ... </p>

                                    <div className="mt-7">
                                    <Link to={`/blog/${posts[0].slug.current}`} className="bg-green-500 text-white py-3 px-4 rounded-md font-bold my-1 hover:bg-green-700 w-3/4 text-lg">Read more ...</Link>
                                    </div>
                                    
                                </div>
                            </Link>
                        )
                    }
                </div>
            )}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 bg-[#f6f5f256]' >
                {
                    posts.map((post) => (
                        <Link to={`/blog/${post.slug.current}`} key={post.slug.current} className="rounded-t-lg bg-white shadow-sm" >

                            <div className="aspect-[3/2] w-full">
                                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="object-cover w-full h-full rounded-md " loading='lazy' />
                            </div>

                            <div className='px-2'>
                            <div className="flex justify-between mt-4 mb-0">
                                <p className="AUTHOR text-base text-gray-600 font-bold italic"><span className=' font-normal not-italic'>Author:</span> {post.name}</p>
                                <p className="text-base text-gray-600 font-semibold">{format(new Date(post.publishedAt), "dd MMMM yyyy")}</p>
                            </div>

                            <h2 className="TITLE text-2xl font-bold capitalize ">{post.title}</h2>

                            <p className="text-gray-700 mt-2  md:h-48 lg:h-40 font-sora" style={{ lineHeight: '1.7' }}>
                                {`${post.body[0].children[0].text.substring(0, 200)}  ...`} </p>

                            <div className="flex items-center my-3 justify-between">
                                <p className="text-base text-gray-600">12 min read</p>
                                <div className="flex items-center">
                                    <Link to={`/blog/${post.slug.current}`} className="text-blue-500 hover:text-blue-700">Read more</Link>
                                    <IoMdArrowForward />
                                </div>
                            </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Blog;
