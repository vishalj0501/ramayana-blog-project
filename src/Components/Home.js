import React from "react";
import data from "../Content/_info.js";
import {useNavigate} from "react-router-dom";
import "./text.css"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" ">
    <div className=" mx-5 md:mx-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:mx-12 justify-center">
        {data.map((item) => 
          (
            <div key={item.id} title={item.title} className="flex flex-col justify-start cursor-pointer  mx-5 md:mx-10 max-w-lg border border-orange-400 rounded-xl dark:bg-orange-500 dark:hover:bg-yellow-500 bg-orange-500 hover:scale-105 hover:shadow-xl hover:bg-yellow-500 duration-200 my-5 min-w-[250px]" onClick={()=>navigate(`/blog/${item.id}`)} >
                <img
                  src={require(`../Assets/images/${item.cover}`)}
                  className="w-[400] rounded-xl mx-auto"  
                  alt="Cover"
                />
                <div className="card-body  mx-4 ">
                  <h3 className="text-2xl font-bold my-2">{item.title}</h3>
                  <h6 className="space-x-3 my-3 text-sm ">{item.tags.map((tag)=>{return <span key={tag} className="bg-green-400 dark:bg-green-800 my-2 break-words px-2 py-1 rounded-xl">{tag}</span>})}</h6>
                  <p className=" dark:text-white-200 text-white-700 mb-5 font-light text-base">{item.description}</p>
                </div> 
            </div>
          )
        )}
      </div>
    </div>
    </div>
  );
};

export default Home;
