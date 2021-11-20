import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";
import Share from "./img/share.png";
import Send from "./img/send.png";

const Post = forwardRef(({ name, description, message, photurl, isLiked }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <img
          src={"https://cdn-icons-png.flaticon.com/512/1946/1946392.png"}
          alt=""
          height="40"
        />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption
          img="https://cdn-icons-png.flaticon.com/512/633/633759.png"
          title="Like"
          isActive={isLiked}
          onClick={() => console.log("Clicked")}
        />
        <InputOption
          img="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
          title="Comment"
        />
        <InputOption img={Share} title="Share" />
        <InputOption img={Send} title="Send" />
      </div>
    </div>
  );
});

export default Post;
