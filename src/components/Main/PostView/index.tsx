import React from 'react';
import { StyledPostView } from './style';
import { Post } from '../../../helpers/utils';

export default function PostView({ userId, id, title, body }: Post) {
  return (
    <StyledPostView>
      <span className="post-view__label">Title:</span>
      {title} <br />
      <span className="post-view__label">body:</span> {body}
    </StyledPostView>
  );
}
