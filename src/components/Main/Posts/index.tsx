import React, { useState } from 'react';
import { Post } from '../../../helpers/utils';
import PostView from '../PostView';
import { StyledPosts } from './style';

interface PostsProps {
  userName: string;
  userId: number;
  lastPostId: number;
  postsData: Post[];
  handleAddPost: (post: Post) => void;
}

export default function Posts({
  userName,
  postsData,
  handleAddPost,
  userId,
  lastPostId,
}: PostsProps) {
  const [isAddingNewPost, setIsAddingNewPost] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');

  const handleNewPostCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.nativeEvent.preventDefault();
    setIsAddingNewPost(false);
  };

  const handleNewPostAdd = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.nativeEvent.preventDefault();
    if (newPostTitle.length !== 0) {
      handleAddPost({
        userId: userId,
        title: newPostTitle,
        body: newPostBody,
        id: lastPostId + 1,
      });
      setNewPostTitle('');
      setNewPostBody('');
      setIsAddingNewPost(false);
    }
  };
  return (
    <StyledPosts>
      {isAddingNewPost ? (
        <>
          <header className="posts-header">
            <h2>New Post - {userName}</h2>
          </header>
          <form className="new-post__form">
            <div className="new-post__form-input">
              <label htmlFor={`${postsData[0].userId}-new-post__title`}>
                Title :
              </label>
              <input
                onChange={(e) => setNewPostTitle(e.target.value)}
                type="text"
                id={`${postsData[0].userId}-new-post__title`}
              />
            </div>
            <div className="new-post__form-input">
              <label htmlFor={`${postsData[0].userId}-new-post__body`}>
                Body :
              </label>
              <input
                onChange={(e) => setNewPostBody(e.target.value)}
                type="text"
                id={`${postsData[0].userId}-new-post__body`}
              />
            </div>
            <div className="new-post__form-btns">
              <button
                className="btn new-post-cancel-btn"
                onClick={handleNewPostCancel}
              >
                Cancel
              </button>
              <button
                className="btn new-post-add-btn"
                onClick={handleNewPostAdd}
              >
                Add
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <header className="posts-header">
            <h2>Posts - {userName}</h2>
            <button className="btn" onClick={() => setIsAddingNewPost(true)}>
              Add
            </button>
          </header>
          <ul>
            {postsData.map((post) => (
              <PostView {...post} key={post.id} />
            ))}
          </ul>
        </>
      )}
    </StyledPosts>
  );
}
