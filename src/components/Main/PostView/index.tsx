import React from 'react';
import { StyledPostView } from './style';
import { Post } from '../../../helpers/utils';

export default function PostView({ userId, id, title, body }: Post) {
  return (
    <StyledPostView>
      Title: {title} <br />
      body: {body}
    </StyledPostView>
  );
}
