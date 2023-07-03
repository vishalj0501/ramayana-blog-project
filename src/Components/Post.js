import Code from "./blog-component/Code";
import Note from "./blog-component/Note";
import Space from "./blog-component/Space";
import BlogHead from "./BlogHead";
import {Link} from "react-router-dom";
import Markdown from "markdown-to-jsx";
import ImageHandler from "./blog-component/ImageHandler";
import { LeftArrow } from "../Assets/icons"
import { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import React from "react";

const Post = (props) => {
  const [postContent, setPostcontent] = useState("");
  const [isDark] = props.ctx.theme;
  const post = props.post;

  const override = {
    display: "block",
    top: "40vh",
    left: "35vw",
    margin: "10",
    borderColor: `${isDark ? "#faf5f5" : "#11b880"}`,
  };

  useEffect(() => {
    import(`../Content/${post.path}.md`) //src/Content/13-08-22_Try-to-Post.md
      .then((res) =>
        fetch(res.default)
          .then((response) => response.text())
          .then((response) => {
            setPostcontent(response);
          })
          .catch((err) => console.log(err))
      );
  }, []);

  return (
    <div>
      {postContent === "" ? (
        <BounceLoader
          color={isDark ? "#e4e7ed" : "#192745"}
          loading={true}
          cssOverride={override}
          size={90}
        />
      ) : (
        // <div className= "bg-primary-light dark:bg-secondary-dark my-2 md:my-3 mx-2 p-6 md:py-20 md:pb-28 rounded-xl md:mx-6 md:px-44 shadow-xl min-h-screen">
        <div className="dark:bg-secondary-dark my-2 md:my-3 mx-2 p-6 md:py-20 md:pb-28 rounded-xl md:mx-6 md:px-44 shadow-xl min-h-screen">
          <article>

          <Link to="/blog" className='relative top-2 left-4 flex flex-row items-center space-x-2 text-lg hover:underline'>
            <LeftArrow className=""/><span className="">back</span></Link>

            <BlogHead post={post} />
            <main className="prose-base md:prose-xl md:prose-slate">
              <Markdown
                options={{
                  overrides: {
                    Code: {
                      component: Code,
                      props: {
                        isDark,
                      },
                    },
                    ImageHandler: {
                      component: ImageHandler,
                    },
                    Note: {
                      component: Note,
                    },
                    Space: {
                      component: Space,
                    },
                  },
                }}
              >
                {postContent}
              </Markdown>
            </main>
          </article>
        </div>
      )}
    </div>
  );
};

export default Post;
