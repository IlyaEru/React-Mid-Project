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
          <header>
            <h2>New Post - {userName}</h2>
          </header>
          <form>
            <label htmlFor={`${postsData[0].userId}-new-post__title`}>
              Title :
            </label>
            <input
              onChange={(e) => setNewPostTitle(e.target.value)}
              type="text"
              id={`${postsData[0].userId}-new-post__title`}
            />
            <label htmlFor={`${postsData[0].userId}-new-post__body`}>
              Body :
            </label>
            <input
              onChange={(e) => setNewPostBody(e.target.value)}
              type="text"
              id={`${postsData[0].userId}-new-post__body`}
            />
            <button onClick={handleNewPostCancel}>Cancel</button>
            <button onClick={handleNewPostAdd}>Add</button>
          </form>
        </>
      ) : (
        <>
          <header>
            <h2>Posts - {userName}</h2>
            <button onClick={() => setIsAddingNewPost(true)}>Add</button>
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
