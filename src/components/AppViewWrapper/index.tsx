import React from 'react';
import { StyledAppViewWrapper } from './style';

export default function AppViewWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledAppViewWrapper>{children}</StyledAppViewWrapper>;
}
