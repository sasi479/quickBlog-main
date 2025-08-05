import React, { useMemo, useState } from "react";
import { blogCategories } from "../assets/assets";
import { motion } from "framer-motion";

import BlogCard from "./BlogCard";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const { blogs, input } = useAppContext();

  const filteredBlogs = useMemo(() => {
    return blogs.filter(
      (blog) =>
        (blog.title.toLowerCase().includes(input.toLowerCase()) ||
          blog.category.toLowerCase().includes(input.toLowerCase())) &&
        (menu === "All" || blog.category === menu)
    );
  }, [blogs, input, menu]);
  return (
    <div>
      {/*Blog menu */}
      <div className=" flex justify-center flex-wrap gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item) => (
          <div className=" relative" key={item}>
            <button
              onClick={() => {
                setMenu(item);
              }}
              className={` cursor-pointer text-gray-500 ${
                menu === item && "text-white px-4 pt-0.5"
              }`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className=" absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
      {/*  blog list */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-20">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
