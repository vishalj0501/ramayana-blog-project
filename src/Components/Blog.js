import React from "react";
import Post from "./Post";
import ReadingBar from "./ReadingBar";
import data from "../Content/_info";
import { useParams } from "react-router-dom";
import SidePanel from "./SidePanel";

const Blog = ({ ctx }) => {
  const { id } = useParams();
  const post = data.find((item) => item.id === id);

  return (
    <div>
      <div className="mx-auto">
        <div style={{ backgroundColor: '#FE985A' }} className="flex flex-row p-auto dark:bg-primary-dark bg-secondary-light ">
          {/* // left */}
          <div className="hidden md:inline fixed w-0 md:w-[23vw] md:pb-5 md:pt-5 ">
            <SidePanel post={post} />
            <ReadingBar />
          </div>

          {/* right */}
          <div className=" w-full md:w-[90%] md:my-2.5 md:pl-[20vw]  mx-auto">
            <Post ctx={ctx} post={post} />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Blog;
