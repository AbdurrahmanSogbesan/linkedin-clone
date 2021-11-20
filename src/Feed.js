import React, { useEffect, useState } from "react";
import "./Feed.css";
import { db } from "./firebase";
import InputOption from "./InputOption";
import Post from "./Post";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
import CameraIcon from "./CameraIcon";
import Video from "./img/video.png";
import Calendar from "./img/calendar.png";
import Write from "./img/write.png";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photourl: user.photourl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      isLiked: false,
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/34/31/24/500_F_134312443_I9m56Hfziy0L3hKRLKRCMSY9YAllCoFK.jpg"
            alt=""
            width="25"
          />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            comp={<CameraIcon height="20" width="20" colour="#0a66c2" />}
            title="Photo"
          />
          <InputOption img={Video} title="Video" />
          <InputOption img={Calendar} title="Event" />
          <InputOption img={Write} title="Write Article" />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photourl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photourl={photourl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
