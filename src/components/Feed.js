import React, { useEffect } from "react";
import Post from "./Post";
import { useState } from "react";
import { db } from "../firebase";
// const Dummy_Data = [
//   {
//     id: 1,
//     username: "Cristiano Ronaldo",
//     avatar:
//       "https://s.yimg.com/ny/api/res/1.2/EI1xiSaqK.xKicgje9OhYw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2021-05/3bab6320-bd3b-11eb-9ff3-4298048832ad",
//     image:
//       "https://i2-prod.football.london/incoming/article24324545.ece/ALTERNATES/s1200c/0_Chelsea-target-Cristiano-Ronaldo-in-recent-Nations-League-action-for-Portugal.jpg",
//     caption: "Some Thing",
//   },
//   {
//     id: 2,
//     username: "Cristiano Ronaldo",
//     avatar:
//       "https://s.yimg.com/ny/api/res/1.2/EI1xiSaqK.xKicgje9OhYw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2021-05/3bab6320-bd3b-11eb-9ff3-4298048832ad",

//     image:
//       "https://i2-prod.football.london/incoming/article24324545.ece/ALTERNATES/s1200c/0_Chelsea-target-Cristiano-Ronaldo-in-recent-Nations-League-action-for-Portugal.jpg",
//   },
//   {
//     id: 3,
//     username: "Cristiano Ronaldo",
//     avatar:
//       "https://s.yimg.com/ny/api/res/1.2/EI1xiSaqK.xKicgje9OhYw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2021-05/3bab6320-bd3b-11eb-9ff3-4298048832ad",
//     image:
//       "https://i2-prod.football.london/incoming/article24324545.ece/ALTERNATES/s1200c/0_Chelsea-target-Cristiano-Ronaldo-in-recent-Nations-League-action-for-Portugal.jpg",
//   },
//   {
//     id: 4,
//     username: "Cristiano Ronaldo",
//     avatar:
//       "https://s.yimg.com/ny/api/res/1.2/EI1xiSaqK.xKicgje9OhYw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2021-05/3bab6320-bd3b-11eb-9ff3-4298048832ad",
//     image:
//       "https://i2-prod.football.london/incoming/article24324545.ece/ALTERNATES/s1200c/0_Chelsea-target-Cristiano-Ronaldo-in-recent-Nations-League-action-for-Portugal.jpg",
//   },
// ];
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          post: doc.data(),
        };
      });
      setPosts(data);
    });
  }, []);
  return (
    <div className=" flex flex-col flex-1 items-center">
      {posts.length > 0 ? (
        posts.map(({ id, post }) => (
          <Post
            key={id}
            image={post.image}
            username={post.username}
            timeStamp={post.timeStamp}
            caption={post.caption}
          />
        ))
      ) : (
        <div className="mt-24 border-4 animate-spin border-blue-600 w-10 h-10 rounded-full border-b-gray-100"></div>
      )}
    </div>
  );
}

export default Feed;
