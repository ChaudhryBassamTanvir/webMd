import router, { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import ContributerSection from "@/app/components/BlogsComponent/ContributerSection"; // Adjust the import path as needed
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CIcon } from "@coreui/icons-react";
import { cilHamburgerMenu } from "@coreui/icons";

const ContributorDetail = ({ condition }: any) => {
  if (!condition) {
    return <div>Condition not found</div>;
  }

  const { blogs } = condition;

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  const handleBlogClick = (slug: string) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button className="text-blue-700 hover:text-blue-900 focus:outline-none">
                <CIcon icon={cilHamburgerMenu} className="w-6 h-6" />
              </button>
            </div>
            <div className="flex items-center">
              <a href="#" className="text-3xl font-bold text-blue-700">
                WebMD
              </a>
            </div>
            <div className="flex items-center">
              <button className="text-blue-700 hover:text-blue-900 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gray-100">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="text-sm breadcrumbs">
            <ul className="flex space-x-2 text-blue-700">
              <ul className="flex space-x-2">
                <li>
                  <a href="#" className="text-black hover:text-blue-700">
                    WebMD Blogs
                  </a>
                </li>
                <li>&gt;</li>
                <li>
                  <a href="#" className="text-black hover:text-blue-700">
                    Patient Blogs
                  </a>
                </li>
                <li>&gt;</li>
                <li>
                  <a href="#" className="text-black hover:text-blue-700">
                    Myasthenia Gravis
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="p-4 sm:p-10 w-full mx-auto "
        style={{
          backgroundImage:
            'url("https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/tocs/healthctr/FB_Group_Image/bioinfo_desktop_3.jpg?resize=*:*&output-quality=75")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row lg:space-x-8 ">
          <div className="lg:w-2/3 flex flex-col items-start mb-4 lg:mb-0">
            <div className="flex items-center mb-4">
              <img
                src={condition.imageUrl}
                alt={condition.name}
                width={150}
                height={200}
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-lg"
              />
              <div className="ml-4">
                <p className="text-sm text-black">{condition.condition}</p>
                <h1 className="text-2xl font-bold text-blue-900 mt-1">
                  {condition.name}
                </h1>
                <p className="text-md text-blue-700 mt-1">
                  Diagnosed since {condition.diagnosisYear}
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{condition.description}</p>
          </div>
          <div className="lg:w-3/3">
            <div className="p-7 bg-white rounded-lg shadow-md w-full sm:w-auto">
              <h2 className="text-xl font-bold text-blue-900 flex items-center mb-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-6 h-6 text-blue-700 mr-2"
                />
                Follow {condition.name}'s latest {condition.condition} blog
                posts
              </h2>
              <form className="flex flex-col sm:flex-row items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="p-2 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none flex-grow bg-gray-200 w-full sm:w-auto"
                />
                <button
                  type="submit"
                  className="p-2 bg-gray-300 text-gray-700 rounded-b-md sm:rounded-r-md sm:rounded-b-none w-full sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-500 mt-2 text-sm text-center sm:text-left">
                By clicking Subscribe, I agree to the WebMD{" "}
                <a href="#" className="text-blue-700 underline">
                  Terms & Conditions
                </a>{" "}
                &{" "}
                <a href="#" className="text-blue-700 underline">
                  Privacy Policy
                </a>{" "}
                and understand that I may opt out of WebMD subscriptions at any
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-10 w-full mx-auto bg-gray-100">
        <div className="mt-10 flex flex-col lg:flex-row bg-gray-100 w-full wx-auto">
          <div className="lg:w-2/3 pr-0 lg:pr-6 border-r border-gray-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Latest Blog Posts from {condition.name}
            </h2>

            <hr className="border-gray-300 mb-4" />
            <div className="flex flex-col space-y-4">
              {currentBlogs.map(
                (blog: {
                  id: React.Key | null | undefined;
                  imageUrl: string | undefined;
                  title:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                  excerpt:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                  date:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                  slug: string;
                }) => (
                  <div
                    key={blog.id}
                    className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4"
                  >
                    <img
                      src={blog.imageUrl}
                      alt={blog.title ? String(blog.title) : "Blog Image"}
                      className="w-full sm:w-32 h-32 object-cover rounded-lg"
                    />
                    <div>
                      <h3
                        className="text-xl font-bold text-black cursor-pointer hover:text-blue-700"
                        onClick={() => handleBlogClick(blog.slug)}
                      >
                        {blog.title}
                      </h3>
                      <p className="text-md text-gray-700">{blog.excerpt}</p>
                      <div className="text-sm text-gray-500">
                        By{" "}
                        <a href="#" className="text-blue-700 underline">
                          {condition.name}
                        </a>{" "}
                        | {blog.date}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="flex justify-center mt-8">
              <nav>
                <ul className="inline-flex -space-x-px">
                  <li>
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      &lt;
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, i) => (
                    <li key={i}>
                      <button
                        onClick={() => paginate(i + 1)}
                        className={`px-3 py-2 leading-tight border ${
                          currentPage === i + 1
                            ? "text-blue-700 bg-gray-200"
                            : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                        }`}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      &gt;
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="lg:w-1/3 pl-0 lg:pl-6 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Advertisement
              </h3>
              <img
                // src="https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/magazine/dashboard/2022/hero-desktop-2.jpg?resize=*:*"
                alt="Ad"
                className="w-full object-cover rounded-lg"
              />
              <p className="text-gray-700 mt-2">
                Get 50% Off Divi Pro. Find out why Divi's Visual Builder will
                change the way you build WP websites forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorDetail;
