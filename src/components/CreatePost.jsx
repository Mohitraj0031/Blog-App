import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const likes = likesElement.current.value;
    const reactions = reactionsElement.current;
    const dislikes = dislikesElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    likesElement.current.value = "";
    dislikesElement.current.value = "";
    tagsElement.current.value = "";


    fetch("https://dummyjson.com/posts/add", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: {likes, dislikes},
        likes: likes,
        dislikes: dislikes,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
      });
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="your user Id "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="Share your thoughts"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="likes" className="form-label">
          Likes
        </label>
        <input
          type="text"
          ref={likesElement}
          className="form-control"
          id="likes"
          placeholder="Number of likes"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dislikes" className="form-label">
          Dislikes
        </label>
        <input
          type="text"
          ref={dislikesElement}
          className="form-control"
          id="dislikes"
          placeholder="Number of dislikes"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Give some tags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="#tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
