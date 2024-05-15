import React from "react";
import { BsChatQuoteFill } from "react-icons/bs";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const CourseReview = () => {
  const ReviewCourses = [
    {
      icon1: BsChatQuoteFill,
      description:
        "The training is an eye opener with great insights for key players in the agriculture industry",
      Ratings: 5,
      period: "2 days Ago",
      title: "Rachael Nalwoga -Uganda",
    },
    {
      icon2: BsChatQuoteFill,
      description:
        "Very interesting and insightful. It opened me up to grey, hidden and unknown areas in agriculture.",
      Ratings: 4.5,
      period: "5 days Ago",
      title: "Igwe Samuel -Nigeria",
    },
    {
      icon3: BsChatQuoteFill,
      description:
        "My AgroHive training experience was so awesome and practical.",
      Ratings: 3.5,
      period: "4 days Ago",
      title: "Josephus Teekpah -Liberia",
    },
  ];

  return (
    <div className="md:mx-24 mt-20">
      <h1 className="text-[#2E7d32] text-4xl font-sora pb-12 font-bold tracking-wider text-center">
        STUDENT REVIEWS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ReviewCourses.map((course, index) => (
          <div key={index} className="mb-4">
            <div>
              {course.icon1 && (
                <course.icon1 className="text-[#2E7d32]  text-3xl mx-auto mb-8" />
              )}

              {course.icon2 && (
                <course.icon2 className="text-[#2E7d32] text-3xl mx-auto mb-8" />
              )}
              {course.icon3 && (
                <course.icon3 className="text-[#2E7d32] text-3xl mx-auto mb-8" />
              )}
              <p className="px-12 mb-4 text-center text-lg leading-8">
                {course.description}
              </p>

              <div className="flex items-center ml-16 mb-4">
                {Array.from({ length: Math.floor(course.Ratings) }, (_, i) => (
                  <IoIosStar key={i} className="text-[#2E7d32] text-2xl" />
                ))}
                {course.Ratings % 1 !== 0 && (
                  <IoIosStarHalf className="text-[#2E7d32] text-2xl" />
                )}
                <span className="text-sm text-gray-500 font-semibold pl-3">
                  {course.period}
                </span>
              </div>
              <h1 className="text-center text-[#2E7d32] font-bold">
                {course.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseReview;
