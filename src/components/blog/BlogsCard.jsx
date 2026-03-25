import SEOImage from "@/common-components/SeoImage/SeoImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Sample data array

const BlogCard = ({ data }) => {
  const blogs = Array.isArray(data) ? data : [];
  if (!blogs || blogs.length === 0) {
    return <p className="text-center">No blogs available.</p>;
  }
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-0 ">
      {blogs?.map((blog, index) => (
           
           <Link title={blog.title}
              href={`/blogs/${blog.id}`}
          key={index}
          className={` shadow-2xl transform hover:translate-y-[-15px] transition-all duration-1000 ease-in-out  rounded-2xl  ${
            index % 4 === 3
              ? " w-full lg:col-span-12 lg:my-4  lg:flex lg:w-full"
              : " w-full lg:w-[98%]   bg-white"
          }  overflow-hidden    `}
        >
          {/* Cover Image */}
          <div className={`relative ${ index % 4 === 3?"lg:hidden":"lg:block"}`}>
            <div
              className={`relative w-full h-[12rem] md:h-[15rem] lg:h-[15vw] xl:h-[12rem] 2xl:h-[15rem]  ${blog.coverImg ? "bg-transparent" : "bg-[whitesmoke]  lg:px-[2%]"}`}
            >
              <SEOImage branding={true}
                src={blog.coverImg || "/Header LOGO .webp"}
                alt={blog.title}
                fill
                className={`  ${blog.coverImg ? "object-center" : "object-contain px-[2rem] lg:px-[4%]"}  `}
              />
            </div>
            <p className="font-bold absolute bottom-[4%] left-[2%] text-[0.8rem] lg:text-[0.8vw] 2xl:text-[0.8rem] bg-[whitesmoke] text-black z-10 rounded-full px-[2%] py-[1%]">
              {blog.category}
            </p>
          </div>
          {index % 4 === 3 && 
              <SEOImage branding={true} width={400} height={400}
                src={blog.coverImg || "/Header LOGO .webp"}
                alt={blog.title}
                className={`  ${blog.coverImg ? "object-center object-cover lg:w-[45%] xl:w-[100%] hidden lg:block lg:h-[100%]" : "object-contain px-[2rem] lg:px-[4%]"}  `}
              />
              }
          {/* Card Content */}
          <div className={`p-[3%] ${index % 4 === 3?"triangle-bg w-[100%]":""}`}>
            <h2 className="font-bold  truncate lg:text-[1vw] 2xl:text-[clamp(0.3rem,1vw,1.2rem)] ">{blog.title}</h2>
            <p className="my-[2%] h-[6rem] ">
              {(blog.shortDes ?? "").replace(/<[^>]+>/g, "")}
            </p>
            <div className="flex items-center gap-x-2 justify-between flex-wrap text-gray-500 border-t-2 border-gray-300 pt-[2%]">
              {/* Avatar */}
              <div className="flex items-center gap-x-2 ">
              <div className="size-[3rem] lg:size-[3vw] 2xl:size-[3rem] rounded-full overflow-hidden bg-gray-200 flex items-center justify-center  font-semibold">
                {blog.userDetails?.profileImage ? (
                  <SEOImage width={200} height={200} 
                    src={blog.userDetails.profileImage}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  getInitials(blog.userDetails?.fullName || "John Doe")
                )}
              </div>
                 <p className=" lg:text-[1vw] font-bold 2xl:text-[1rem] ">
                  {blog.userDetails?.fullName || "John Doe"}{` `}•
                </p>
              </div>
                <p className="lg:text-[0.8vw] font-bold 2xl:text-[0.8rem] text-[#00cfaa]">
                  {blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : ""}
                </p>
            </div>

            <div
              className={`${
                index % 4 === 3 ? "btn-header inline-block" : "btn-header inline-block lg:hidden "
              } mt-[4%] `}
            >
              <p className="font-bold">Read More...</p>{" "}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
